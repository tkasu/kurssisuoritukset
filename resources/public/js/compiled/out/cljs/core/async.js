// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27351 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27351 = (function (f,fn_handler,meta27352){
this.f = f;
this.fn_handler = fn_handler;
this.meta27352 = meta27352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27351.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27353){
var self__ = this;
var _27353__$1 = this;
return self__.meta27352;
});

cljs.core.async.t27351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27353,meta27352__$1){
var self__ = this;
var _27353__$1 = this;
return (new cljs.core.async.t27351(self__.f,self__.fn_handler,meta27352__$1));
});

cljs.core.async.t27351.cljs$lang$type = true;

cljs.core.async.t27351.cljs$lang$ctorStr = "cljs.core.async/t27351";

cljs.core.async.t27351.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27351");
});

cljs.core.async.__GT_t27351 = (function cljs$core$async$fn_handler_$___GT_t27351(f__$1,fn_handler__$1,meta27352){
return (new cljs.core.async.t27351(f__$1,fn_handler__$1,meta27352));
});

}

return (new cljs.core.async.t27351(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27355 = buff;
if(G__27355){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__27355.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27355.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27355);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27355);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__27357 = arguments.length;
switch (G__27357) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__27360 = arguments.length;
switch (G__27360) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27362 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27362);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27362,ret){
return (function (){
return fn1.call(null,val_27362);
});})(val_27362,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__27364 = arguments.length;
switch (G__27364) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
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
var n__19006__auto___27366 = n;
var x_27367 = (0);
while(true){
if((x_27367 < n__19006__auto___27366)){
(a[x_27367] = (0));

var G__27368 = (x_27367 + (1));
x_27367 = G__27368;
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

var G__27369 = (i + (1));
i = G__27369;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27373 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27373 = (function (flag,alt_flag,meta27374){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27374 = meta27374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27373.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27375){
var self__ = this;
var _27375__$1 = this;
return self__.meta27374;
});})(flag))
;

cljs.core.async.t27373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27375,meta27374__$1){
var self__ = this;
var _27375__$1 = this;
return (new cljs.core.async.t27373(self__.flag,self__.alt_flag,meta27374__$1));
});})(flag))
;

cljs.core.async.t27373.cljs$lang$type = true;

cljs.core.async.t27373.cljs$lang$ctorStr = "cljs.core.async/t27373";

cljs.core.async.t27373.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27373");
});})(flag))
;

cljs.core.async.__GT_t27373 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27373(flag__$1,alt_flag__$1,meta27374){
return (new cljs.core.async.t27373(flag__$1,alt_flag__$1,meta27374));
});})(flag))
;

}

return (new cljs.core.async.t27373(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27379 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27379 = (function (cb,flag,alt_handler,meta27380){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27380 = meta27380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27379.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27381){
var self__ = this;
var _27381__$1 = this;
return self__.meta27380;
});

cljs.core.async.t27379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27381,meta27380__$1){
var self__ = this;
var _27381__$1 = this;
return (new cljs.core.async.t27379(self__.cb,self__.flag,self__.alt_handler,meta27380__$1));
});

cljs.core.async.t27379.cljs$lang$type = true;

cljs.core.async.t27379.cljs$lang$ctorStr = "cljs.core.async/t27379";

cljs.core.async.t27379.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27379");
});

cljs.core.async.__GT_t27379 = (function cljs$core$async$alt_handler_$___GT_t27379(cb__$1,flag__$1,alt_handler__$1,meta27380){
return (new cljs.core.async.t27379(cb__$1,flag__$1,alt_handler__$1,meta27380));
});

}

return (new cljs.core.async.t27379(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27382_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27382_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27383_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27383_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18121__auto__ = wport;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27384 = (i + (1));
i = G__27384;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18121__auto__ = ret;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18109__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18109__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27387){
var map__27388 = p__27387;
var map__27388__$1 = ((cljs.core.seq_QMARK_.call(null,map__27388))?cljs.core.apply.call(null,cljs.core.hash_map,map__27388):map__27388);
var opts = map__27388__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27385){
var G__27386 = cljs.core.first.call(null,seq27385);
var seq27385__$1 = cljs.core.next.call(null,seq27385);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27386,seq27385__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27390 = arguments.length;
switch (G__27390) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21535__auto___27439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___27439){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___27439){
return (function (state_27414){
var state_val_27415 = (state_27414[(1)]);
if((state_val_27415 === (7))){
var inst_27410 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27416_27440 = state_27414__$1;
(statearr_27416_27440[(2)] = inst_27410);

(statearr_27416_27440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (1))){
var state_27414__$1 = state_27414;
var statearr_27417_27441 = state_27414__$1;
(statearr_27417_27441[(2)] = null);

(statearr_27417_27441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (4))){
var inst_27393 = (state_27414[(7)]);
var inst_27393__$1 = (state_27414[(2)]);
var inst_27394 = (inst_27393__$1 == null);
var state_27414__$1 = (function (){var statearr_27418 = state_27414;
(statearr_27418[(7)] = inst_27393__$1);

return statearr_27418;
})();
if(cljs.core.truth_(inst_27394)){
var statearr_27419_27442 = state_27414__$1;
(statearr_27419_27442[(1)] = (5));

} else {
var statearr_27420_27443 = state_27414__$1;
(statearr_27420_27443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (13))){
var state_27414__$1 = state_27414;
var statearr_27421_27444 = state_27414__$1;
(statearr_27421_27444[(2)] = null);

(statearr_27421_27444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (6))){
var inst_27393 = (state_27414[(7)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27414__$1,(11),to,inst_27393);
} else {
if((state_val_27415 === (3))){
var inst_27412 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27414__$1,inst_27412);
} else {
if((state_val_27415 === (12))){
var state_27414__$1 = state_27414;
var statearr_27422_27445 = state_27414__$1;
(statearr_27422_27445[(2)] = null);

(statearr_27422_27445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (2))){
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27414__$1,(4),from);
} else {
if((state_val_27415 === (11))){
var inst_27403 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27403)){
var statearr_27423_27446 = state_27414__$1;
(statearr_27423_27446[(1)] = (12));

} else {
var statearr_27424_27447 = state_27414__$1;
(statearr_27424_27447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (9))){
var state_27414__$1 = state_27414;
var statearr_27425_27448 = state_27414__$1;
(statearr_27425_27448[(2)] = null);

(statearr_27425_27448[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (5))){
var state_27414__$1 = state_27414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27426_27449 = state_27414__$1;
(statearr_27426_27449[(1)] = (8));

} else {
var statearr_27427_27450 = state_27414__$1;
(statearr_27427_27450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (14))){
var inst_27408 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27428_27451 = state_27414__$1;
(statearr_27428_27451[(2)] = inst_27408);

(statearr_27428_27451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (10))){
var inst_27400 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27429_27452 = state_27414__$1;
(statearr_27429_27452[(2)] = inst_27400);

(statearr_27429_27452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (8))){
var inst_27397 = cljs.core.async.close_BANG_.call(null,to);
var state_27414__$1 = state_27414;
var statearr_27430_27453 = state_27414__$1;
(statearr_27430_27453[(2)] = inst_27397);

(statearr_27430_27453[(1)] = (10));


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
});})(c__21535__auto___27439))
;
return ((function (switch__21473__auto__,c__21535__auto___27439){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_27434 = [null,null,null,null,null,null,null,null];
(statearr_27434[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_27434[(1)] = (1));

return statearr_27434;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_27414){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27435){if((e27435 instanceof Object)){
var ex__21477__auto__ = e27435;
var statearr_27436_27454 = state_27414;
(statearr_27436_27454[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27455 = state_27414;
state_27414 = G__27455;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_27414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_27414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___27439))
})();
var state__21537__auto__ = (function (){var statearr_27437 = f__21536__auto__.call(null);
(statearr_27437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___27439);

return statearr_27437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___27439))
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
return (function (p__27639){
var vec__27640 = p__27639;
var v = cljs.core.nth.call(null,vec__27640,(0),null);
var p = cljs.core.nth.call(null,vec__27640,(1),null);
var job = vec__27640;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21535__auto___27822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___27822,res,vec__27640,v,p,job,jobs,results){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___27822,res,vec__27640,v,p,job,jobs,results){
return (function (state_27645){
var state_val_27646 = (state_27645[(1)]);
if((state_val_27646 === (2))){
var inst_27642 = (state_27645[(2)]);
var inst_27643 = cljs.core.async.close_BANG_.call(null,res);
var state_27645__$1 = (function (){var statearr_27647 = state_27645;
(statearr_27647[(7)] = inst_27642);

return statearr_27647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27645__$1,inst_27643);
} else {
if((state_val_27646 === (1))){
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27645__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21535__auto___27822,res,vec__27640,v,p,job,jobs,results))
;
return ((function (switch__21473__auto__,c__21535__auto___27822,res,vec__27640,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0 = (function (){
var statearr_27651 = [null,null,null,null,null,null,null,null];
(statearr_27651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__);

(statearr_27651[(1)] = (1));

return statearr_27651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1 = (function (state_27645){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27652){if((e27652 instanceof Object)){
var ex__21477__auto__ = e27652;
var statearr_27653_27823 = state_27645;
(statearr_27653_27823[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27824 = state_27645;
state_27645 = G__27824;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = function(state_27645){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1.call(this,state_27645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___27822,res,vec__27640,v,p,job,jobs,results))
})();
var state__21537__auto__ = (function (){var statearr_27654 = f__21536__auto__.call(null);
(statearr_27654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___27822);

return statearr_27654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___27822,res,vec__27640,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27655){
var vec__27656 = p__27655;
var v = cljs.core.nth.call(null,vec__27656,(0),null);
var p = cljs.core.nth.call(null,vec__27656,(1),null);
var job = vec__27656;
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
var n__19006__auto___27825 = n;
var __27826 = (0);
while(true){
if((__27826 < n__19006__auto___27825)){
var G__27657_27827 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27657_27827) {
case "async":
var c__21535__auto___27829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27826,c__21535__auto___27829,G__27657_27827,n__19006__auto___27825,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (__27826,c__21535__auto___27829,G__27657_27827,n__19006__auto___27825,jobs,results,process,async){
return (function (state_27670){
var state_val_27671 = (state_27670[(1)]);
if((state_val_27671 === (7))){
var inst_27666 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27672_27830 = state_27670__$1;
(statearr_27672_27830[(2)] = inst_27666);

(statearr_27672_27830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (6))){
var state_27670__$1 = state_27670;
var statearr_27673_27831 = state_27670__$1;
(statearr_27673_27831[(2)] = null);

(statearr_27673_27831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (5))){
var state_27670__$1 = state_27670;
var statearr_27674_27832 = state_27670__$1;
(statearr_27674_27832[(2)] = null);

(statearr_27674_27832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (4))){
var inst_27660 = (state_27670[(2)]);
var inst_27661 = async.call(null,inst_27660);
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27661)){
var statearr_27675_27833 = state_27670__$1;
(statearr_27675_27833[(1)] = (5));

} else {
var statearr_27676_27834 = state_27670__$1;
(statearr_27676_27834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (3))){
var inst_27668 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27670__$1,inst_27668);
} else {
if((state_val_27671 === (2))){
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(4),jobs);
} else {
if((state_val_27671 === (1))){
var state_27670__$1 = state_27670;
var statearr_27677_27835 = state_27670__$1;
(statearr_27677_27835[(2)] = null);

(statearr_27677_27835[(1)] = (2));


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
});})(__27826,c__21535__auto___27829,G__27657_27827,n__19006__auto___27825,jobs,results,process,async))
;
return ((function (__27826,switch__21473__auto__,c__21535__auto___27829,G__27657_27827,n__19006__auto___27825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0 = (function (){
var statearr_27681 = [null,null,null,null,null,null,null];
(statearr_27681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__);

(statearr_27681[(1)] = (1));

return statearr_27681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1 = (function (state_27670){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27682){if((e27682 instanceof Object)){
var ex__21477__auto__ = e27682;
var statearr_27683_27836 = state_27670;
(statearr_27683_27836[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27837 = state_27670;
state_27670 = G__27837;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = function(state_27670){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1.call(this,state_27670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__;
})()
;})(__27826,switch__21473__auto__,c__21535__auto___27829,G__27657_27827,n__19006__auto___27825,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_27684 = f__21536__auto__.call(null);
(statearr_27684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___27829);

return statearr_27684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(__27826,c__21535__auto___27829,G__27657_27827,n__19006__auto___27825,jobs,results,process,async))
);


break;
case "compute":
var c__21535__auto___27838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27826,c__21535__auto___27838,G__27657_27827,n__19006__auto___27825,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (__27826,c__21535__auto___27838,G__27657_27827,n__19006__auto___27825,jobs,results,process,async){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27693 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27699_27839 = state_27697__$1;
(statearr_27699_27839[(2)] = inst_27693);

(statearr_27699_27839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var state_27697__$1 = state_27697;
var statearr_27700_27840 = state_27697__$1;
(statearr_27700_27840[(2)] = null);

(statearr_27700_27840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (5))){
var state_27697__$1 = state_27697;
var statearr_27701_27841 = state_27697__$1;
(statearr_27701_27841[(2)] = null);

(statearr_27701_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27687 = (state_27697[(2)]);
var inst_27688 = process.call(null,inst_27687);
var state_27697__$1 = state_27697;
if(cljs.core.truth_(inst_27688)){
var statearr_27702_27842 = state_27697__$1;
(statearr_27702_27842[(1)] = (5));

} else {
var statearr_27703_27843 = state_27697__$1;
(statearr_27703_27843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27695 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (2))){
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(4),jobs);
} else {
if((state_val_27698 === (1))){
var state_27697__$1 = state_27697;
var statearr_27704_27844 = state_27697__$1;
(statearr_27704_27844[(2)] = null);

(statearr_27704_27844[(1)] = (2));


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
});})(__27826,c__21535__auto___27838,G__27657_27827,n__19006__auto___27825,jobs,results,process,async))
;
return ((function (__27826,switch__21473__auto__,c__21535__auto___27838,G__27657_27827,n__19006__auto___27825,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0 = (function (){
var statearr_27708 = [null,null,null,null,null,null,null];
(statearr_27708[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__);

(statearr_27708[(1)] = (1));

return statearr_27708;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1 = (function (state_27697){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27709){if((e27709 instanceof Object)){
var ex__21477__auto__ = e27709;
var statearr_27710_27845 = state_27697;
(statearr_27710_27845[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27846 = state_27697;
state_27697 = G__27846;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__;
})()
;})(__27826,switch__21473__auto__,c__21535__auto___27838,G__27657_27827,n__19006__auto___27825,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_27711 = f__21536__auto__.call(null);
(statearr_27711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___27838);

return statearr_27711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(__27826,c__21535__auto___27838,G__27657_27827,n__19006__auto___27825,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27847 = (__27826 + (1));
__27826 = G__27847;
continue;
} else {
}
break;
}

var c__21535__auto___27848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___27848,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___27848,jobs,results,process,async){
return (function (state_27733){
var state_val_27734 = (state_27733[(1)]);
if((state_val_27734 === (9))){
var inst_27726 = (state_27733[(2)]);
var state_27733__$1 = (function (){var statearr_27735 = state_27733;
(statearr_27735[(7)] = inst_27726);

return statearr_27735;
})();
var statearr_27736_27849 = state_27733__$1;
(statearr_27736_27849[(2)] = null);

(statearr_27736_27849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (8))){
var inst_27719 = (state_27733[(8)]);
var inst_27724 = (state_27733[(2)]);
var state_27733__$1 = (function (){var statearr_27737 = state_27733;
(statearr_27737[(9)] = inst_27724);

return statearr_27737;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27733__$1,(9),results,inst_27719);
} else {
if((state_val_27734 === (7))){
var inst_27729 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
var statearr_27738_27850 = state_27733__$1;
(statearr_27738_27850[(2)] = inst_27729);

(statearr_27738_27850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (6))){
var inst_27714 = (state_27733[(10)]);
var inst_27719 = (state_27733[(8)]);
var inst_27719__$1 = cljs.core.async.chan.call(null,(1));
var inst_27720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27721 = [inst_27714,inst_27719__$1];
var inst_27722 = (new cljs.core.PersistentVector(null,2,(5),inst_27720,inst_27721,null));
var state_27733__$1 = (function (){var statearr_27739 = state_27733;
(statearr_27739[(8)] = inst_27719__$1);

return statearr_27739;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27733__$1,(8),jobs,inst_27722);
} else {
if((state_val_27734 === (5))){
var inst_27717 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27733__$1 = state_27733;
var statearr_27740_27851 = state_27733__$1;
(statearr_27740_27851[(2)] = inst_27717);

(statearr_27740_27851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (4))){
var inst_27714 = (state_27733[(10)]);
var inst_27714__$1 = (state_27733[(2)]);
var inst_27715 = (inst_27714__$1 == null);
var state_27733__$1 = (function (){var statearr_27741 = state_27733;
(statearr_27741[(10)] = inst_27714__$1);

return statearr_27741;
})();
if(cljs.core.truth_(inst_27715)){
var statearr_27742_27852 = state_27733__$1;
(statearr_27742_27852[(1)] = (5));

} else {
var statearr_27743_27853 = state_27733__$1;
(statearr_27743_27853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27734 === (3))){
var inst_27731 = (state_27733[(2)]);
var state_27733__$1 = state_27733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27733__$1,inst_27731);
} else {
if((state_val_27734 === (2))){
var state_27733__$1 = state_27733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27733__$1,(4),from);
} else {
if((state_val_27734 === (1))){
var state_27733__$1 = state_27733;
var statearr_27744_27854 = state_27733__$1;
(statearr_27744_27854[(2)] = null);

(statearr_27744_27854[(1)] = (2));


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
});})(c__21535__auto___27848,jobs,results,process,async))
;
return ((function (switch__21473__auto__,c__21535__auto___27848,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0 = (function (){
var statearr_27748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__);

(statearr_27748[(1)] = (1));

return statearr_27748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1 = (function (state_27733){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27749){if((e27749 instanceof Object)){
var ex__21477__auto__ = e27749;
var statearr_27750_27855 = state_27733;
(statearr_27750_27855[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27856 = state_27733;
state_27733 = G__27856;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = function(state_27733){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1.call(this,state_27733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___27848,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_27751 = f__21536__auto__.call(null);
(statearr_27751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___27848);

return statearr_27751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___27848,jobs,results,process,async))
);


var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__,jobs,results,process,async){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__,jobs,results,process,async){
return (function (state_27789){
var state_val_27790 = (state_27789[(1)]);
if((state_val_27790 === (7))){
var inst_27785 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27791_27857 = state_27789__$1;
(statearr_27791_27857[(2)] = inst_27785);

(statearr_27791_27857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (20))){
var state_27789__$1 = state_27789;
var statearr_27792_27858 = state_27789__$1;
(statearr_27792_27858[(2)] = null);

(statearr_27792_27858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (1))){
var state_27789__$1 = state_27789;
var statearr_27793_27859 = state_27789__$1;
(statearr_27793_27859[(2)] = null);

(statearr_27793_27859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (4))){
var inst_27754 = (state_27789[(7)]);
var inst_27754__$1 = (state_27789[(2)]);
var inst_27755 = (inst_27754__$1 == null);
var state_27789__$1 = (function (){var statearr_27794 = state_27789;
(statearr_27794[(7)] = inst_27754__$1);

return statearr_27794;
})();
if(cljs.core.truth_(inst_27755)){
var statearr_27795_27860 = state_27789__$1;
(statearr_27795_27860[(1)] = (5));

} else {
var statearr_27796_27861 = state_27789__$1;
(statearr_27796_27861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (15))){
var inst_27767 = (state_27789[(8)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27789__$1,(18),to,inst_27767);
} else {
if((state_val_27790 === (21))){
var inst_27780 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27797_27862 = state_27789__$1;
(statearr_27797_27862[(2)] = inst_27780);

(statearr_27797_27862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (13))){
var inst_27782 = (state_27789[(2)]);
var state_27789__$1 = (function (){var statearr_27798 = state_27789;
(statearr_27798[(9)] = inst_27782);

return statearr_27798;
})();
var statearr_27799_27863 = state_27789__$1;
(statearr_27799_27863[(2)] = null);

(statearr_27799_27863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (6))){
var inst_27754 = (state_27789[(7)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27789__$1,(11),inst_27754);
} else {
if((state_val_27790 === (17))){
var inst_27775 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
if(cljs.core.truth_(inst_27775)){
var statearr_27800_27864 = state_27789__$1;
(statearr_27800_27864[(1)] = (19));

} else {
var statearr_27801_27865 = state_27789__$1;
(statearr_27801_27865[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (3))){
var inst_27787 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27789__$1,inst_27787);
} else {
if((state_val_27790 === (12))){
var inst_27764 = (state_27789[(10)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27789__$1,(14),inst_27764);
} else {
if((state_val_27790 === (2))){
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27789__$1,(4),results);
} else {
if((state_val_27790 === (19))){
var state_27789__$1 = state_27789;
var statearr_27802_27866 = state_27789__$1;
(statearr_27802_27866[(2)] = null);

(statearr_27802_27866[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (11))){
var inst_27764 = (state_27789[(2)]);
var state_27789__$1 = (function (){var statearr_27803 = state_27789;
(statearr_27803[(10)] = inst_27764);

return statearr_27803;
})();
var statearr_27804_27867 = state_27789__$1;
(statearr_27804_27867[(2)] = null);

(statearr_27804_27867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (9))){
var state_27789__$1 = state_27789;
var statearr_27805_27868 = state_27789__$1;
(statearr_27805_27868[(2)] = null);

(statearr_27805_27868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (5))){
var state_27789__$1 = state_27789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27806_27869 = state_27789__$1;
(statearr_27806_27869[(1)] = (8));

} else {
var statearr_27807_27870 = state_27789__$1;
(statearr_27807_27870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (14))){
var inst_27769 = (state_27789[(11)]);
var inst_27767 = (state_27789[(8)]);
var inst_27767__$1 = (state_27789[(2)]);
var inst_27768 = (inst_27767__$1 == null);
var inst_27769__$1 = cljs.core.not.call(null,inst_27768);
var state_27789__$1 = (function (){var statearr_27808 = state_27789;
(statearr_27808[(11)] = inst_27769__$1);

(statearr_27808[(8)] = inst_27767__$1);

return statearr_27808;
})();
if(inst_27769__$1){
var statearr_27809_27871 = state_27789__$1;
(statearr_27809_27871[(1)] = (15));

} else {
var statearr_27810_27872 = state_27789__$1;
(statearr_27810_27872[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (16))){
var inst_27769 = (state_27789[(11)]);
var state_27789__$1 = state_27789;
var statearr_27811_27873 = state_27789__$1;
(statearr_27811_27873[(2)] = inst_27769);

(statearr_27811_27873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (10))){
var inst_27761 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27812_27874 = state_27789__$1;
(statearr_27812_27874[(2)] = inst_27761);

(statearr_27812_27874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (18))){
var inst_27772 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27813_27875 = state_27789__$1;
(statearr_27813_27875[(2)] = inst_27772);

(statearr_27813_27875[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (8))){
var inst_27758 = cljs.core.async.close_BANG_.call(null,to);
var state_27789__$1 = state_27789;
var statearr_27814_27876 = state_27789__$1;
(statearr_27814_27876[(2)] = inst_27758);

(statearr_27814_27876[(1)] = (10));


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
});})(c__21535__auto__,jobs,results,process,async))
;
return ((function (switch__21473__auto__,c__21535__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0 = (function (){
var statearr_27818 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__);

(statearr_27818[(1)] = (1));

return statearr_27818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1 = (function (state_27789){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27819){if((e27819 instanceof Object)){
var ex__21477__auto__ = e27819;
var statearr_27820_27877 = state_27789;
(statearr_27820_27877[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27878 = state_27789;
state_27789 = G__27878;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__ = function(state_27789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1.call(this,state_27789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__,jobs,results,process,async))
})();
var state__21537__auto__ = (function (){var statearr_27821 = f__21536__auto__.call(null);
(statearr_27821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_27821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__,jobs,results,process,async))
);

return c__21535__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27880 = arguments.length;
switch (G__27880) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27883 = arguments.length;
switch (G__27883) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27886 = arguments.length;
switch (G__27886) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21535__auto___27938 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___27938,tc,fc){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___27938,tc,fc){
return (function (state_27912){
var state_val_27913 = (state_27912[(1)]);
if((state_val_27913 === (7))){
var inst_27908 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
var statearr_27914_27939 = state_27912__$1;
(statearr_27914_27939[(2)] = inst_27908);

(statearr_27914_27939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (1))){
var state_27912__$1 = state_27912;
var statearr_27915_27940 = state_27912__$1;
(statearr_27915_27940[(2)] = null);

(statearr_27915_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (4))){
var inst_27889 = (state_27912[(7)]);
var inst_27889__$1 = (state_27912[(2)]);
var inst_27890 = (inst_27889__$1 == null);
var state_27912__$1 = (function (){var statearr_27916 = state_27912;
(statearr_27916[(7)] = inst_27889__$1);

return statearr_27916;
})();
if(cljs.core.truth_(inst_27890)){
var statearr_27917_27941 = state_27912__$1;
(statearr_27917_27941[(1)] = (5));

} else {
var statearr_27918_27942 = state_27912__$1;
(statearr_27918_27942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (13))){
var state_27912__$1 = state_27912;
var statearr_27919_27943 = state_27912__$1;
(statearr_27919_27943[(2)] = null);

(statearr_27919_27943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (6))){
var inst_27889 = (state_27912[(7)]);
var inst_27895 = p.call(null,inst_27889);
var state_27912__$1 = state_27912;
if(cljs.core.truth_(inst_27895)){
var statearr_27920_27944 = state_27912__$1;
(statearr_27920_27944[(1)] = (9));

} else {
var statearr_27921_27945 = state_27912__$1;
(statearr_27921_27945[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (3))){
var inst_27910 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27912__$1,inst_27910);
} else {
if((state_val_27913 === (12))){
var state_27912__$1 = state_27912;
var statearr_27922_27946 = state_27912__$1;
(statearr_27922_27946[(2)] = null);

(statearr_27922_27946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (2))){
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27912__$1,(4),ch);
} else {
if((state_val_27913 === (11))){
var inst_27889 = (state_27912[(7)]);
var inst_27899 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27912__$1,(8),inst_27899,inst_27889);
} else {
if((state_val_27913 === (9))){
var state_27912__$1 = state_27912;
var statearr_27923_27947 = state_27912__$1;
(statearr_27923_27947[(2)] = tc);

(statearr_27923_27947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (5))){
var inst_27892 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27893 = cljs.core.async.close_BANG_.call(null,fc);
var state_27912__$1 = (function (){var statearr_27924 = state_27912;
(statearr_27924[(8)] = inst_27892);

return statearr_27924;
})();
var statearr_27925_27948 = state_27912__$1;
(statearr_27925_27948[(2)] = inst_27893);

(statearr_27925_27948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (14))){
var inst_27906 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
var statearr_27926_27949 = state_27912__$1;
(statearr_27926_27949[(2)] = inst_27906);

(statearr_27926_27949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (10))){
var state_27912__$1 = state_27912;
var statearr_27927_27950 = state_27912__$1;
(statearr_27927_27950[(2)] = fc);

(statearr_27927_27950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27913 === (8))){
var inst_27901 = (state_27912[(2)]);
var state_27912__$1 = state_27912;
if(cljs.core.truth_(inst_27901)){
var statearr_27928_27951 = state_27912__$1;
(statearr_27928_27951[(1)] = (12));

} else {
var statearr_27929_27952 = state_27912__$1;
(statearr_27929_27952[(1)] = (13));

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
});})(c__21535__auto___27938,tc,fc))
;
return ((function (switch__21473__auto__,c__21535__auto___27938,tc,fc){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_27933 = [null,null,null,null,null,null,null,null,null];
(statearr_27933[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_27933[(1)] = (1));

return statearr_27933;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_27912){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_27912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e27934){if((e27934 instanceof Object)){
var ex__21477__auto__ = e27934;
var statearr_27935_27953 = state_27912;
(statearr_27935_27953[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27954 = state_27912;
state_27912 = G__27954;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_27912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_27912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___27938,tc,fc))
})();
var state__21537__auto__ = (function (){var statearr_27936 = f__21536__auto__.call(null);
(statearr_27936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___27938);

return statearr_27936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___27938,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__){
return (function (state_28001){
var state_val_28002 = (state_28001[(1)]);
if((state_val_28002 === (7))){
var inst_27997 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
var statearr_28003_28019 = state_28001__$1;
(statearr_28003_28019[(2)] = inst_27997);

(statearr_28003_28019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (6))){
var inst_27987 = (state_28001[(7)]);
var inst_27990 = (state_28001[(8)]);
var inst_27994 = f.call(null,inst_27987,inst_27990);
var inst_27987__$1 = inst_27994;
var state_28001__$1 = (function (){var statearr_28004 = state_28001;
(statearr_28004[(7)] = inst_27987__$1);

return statearr_28004;
})();
var statearr_28005_28020 = state_28001__$1;
(statearr_28005_28020[(2)] = null);

(statearr_28005_28020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (5))){
var inst_27987 = (state_28001[(7)]);
var state_28001__$1 = state_28001;
var statearr_28006_28021 = state_28001__$1;
(statearr_28006_28021[(2)] = inst_27987);

(statearr_28006_28021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (4))){
var inst_27990 = (state_28001[(8)]);
var inst_27990__$1 = (state_28001[(2)]);
var inst_27991 = (inst_27990__$1 == null);
var state_28001__$1 = (function (){var statearr_28007 = state_28001;
(statearr_28007[(8)] = inst_27990__$1);

return statearr_28007;
})();
if(cljs.core.truth_(inst_27991)){
var statearr_28008_28022 = state_28001__$1;
(statearr_28008_28022[(1)] = (5));

} else {
var statearr_28009_28023 = state_28001__$1;
(statearr_28009_28023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28002 === (3))){
var inst_27999 = (state_28001[(2)]);
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28001__$1,inst_27999);
} else {
if((state_val_28002 === (2))){
var state_28001__$1 = state_28001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28001__$1,(4),ch);
} else {
if((state_val_28002 === (1))){
var inst_27987 = init;
var state_28001__$1 = (function (){var statearr_28010 = state_28001;
(statearr_28010[(7)] = inst_27987);

return statearr_28010;
})();
var statearr_28011_28024 = state_28001__$1;
(statearr_28011_28024[(2)] = null);

(statearr_28011_28024[(1)] = (2));


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
});})(c__21535__auto__))
;
return ((function (switch__21473__auto__,c__21535__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21474__auto____0 = (function (){
var statearr_28015 = [null,null,null,null,null,null,null,null,null];
(statearr_28015[(0)] = cljs$core$async$reduce_$_state_machine__21474__auto__);

(statearr_28015[(1)] = (1));

return statearr_28015;
});
var cljs$core$async$reduce_$_state_machine__21474__auto____1 = (function (state_28001){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_28001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e28016){if((e28016 instanceof Object)){
var ex__21477__auto__ = e28016;
var statearr_28017_28025 = state_28001;
(statearr_28017_28025[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28026 = state_28001;
state_28001 = G__28026;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21474__auto__ = function(state_28001){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21474__auto____1.call(this,state_28001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21474__auto____0;
cljs$core$async$reduce_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21474__auto____1;
return cljs$core$async$reduce_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_28018 = f__21536__auto__.call(null);
(statearr_28018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_28018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__28028 = arguments.length;
switch (G__28028) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__){
return (function (state_28053){
var state_val_28054 = (state_28053[(1)]);
if((state_val_28054 === (7))){
var inst_28035 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28055_28079 = state_28053__$1;
(statearr_28055_28079[(2)] = inst_28035);

(statearr_28055_28079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (1))){
var inst_28029 = cljs.core.seq.call(null,coll);
var inst_28030 = inst_28029;
var state_28053__$1 = (function (){var statearr_28056 = state_28053;
(statearr_28056[(7)] = inst_28030);

return statearr_28056;
})();
var statearr_28057_28080 = state_28053__$1;
(statearr_28057_28080[(2)] = null);

(statearr_28057_28080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (4))){
var inst_28030 = (state_28053[(7)]);
var inst_28033 = cljs.core.first.call(null,inst_28030);
var state_28053__$1 = state_28053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28053__$1,(7),ch,inst_28033);
} else {
if((state_val_28054 === (13))){
var inst_28047 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28058_28081 = state_28053__$1;
(statearr_28058_28081[(2)] = inst_28047);

(statearr_28058_28081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (6))){
var inst_28038 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
if(cljs.core.truth_(inst_28038)){
var statearr_28059_28082 = state_28053__$1;
(statearr_28059_28082[(1)] = (8));

} else {
var statearr_28060_28083 = state_28053__$1;
(statearr_28060_28083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (3))){
var inst_28051 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28053__$1,inst_28051);
} else {
if((state_val_28054 === (12))){
var state_28053__$1 = state_28053;
var statearr_28061_28084 = state_28053__$1;
(statearr_28061_28084[(2)] = null);

(statearr_28061_28084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (2))){
var inst_28030 = (state_28053[(7)]);
var state_28053__$1 = state_28053;
if(cljs.core.truth_(inst_28030)){
var statearr_28062_28085 = state_28053__$1;
(statearr_28062_28085[(1)] = (4));

} else {
var statearr_28063_28086 = state_28053__$1;
(statearr_28063_28086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (11))){
var inst_28044 = cljs.core.async.close_BANG_.call(null,ch);
var state_28053__$1 = state_28053;
var statearr_28064_28087 = state_28053__$1;
(statearr_28064_28087[(2)] = inst_28044);

(statearr_28064_28087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (9))){
var state_28053__$1 = state_28053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28065_28088 = state_28053__$1;
(statearr_28065_28088[(1)] = (11));

} else {
var statearr_28066_28089 = state_28053__$1;
(statearr_28066_28089[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (5))){
var inst_28030 = (state_28053[(7)]);
var state_28053__$1 = state_28053;
var statearr_28067_28090 = state_28053__$1;
(statearr_28067_28090[(2)] = inst_28030);

(statearr_28067_28090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (10))){
var inst_28049 = (state_28053[(2)]);
var state_28053__$1 = state_28053;
var statearr_28068_28091 = state_28053__$1;
(statearr_28068_28091[(2)] = inst_28049);

(statearr_28068_28091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28054 === (8))){
var inst_28030 = (state_28053[(7)]);
var inst_28040 = cljs.core.next.call(null,inst_28030);
var inst_28030__$1 = inst_28040;
var state_28053__$1 = (function (){var statearr_28069 = state_28053;
(statearr_28069[(7)] = inst_28030__$1);

return statearr_28069;
})();
var statearr_28070_28092 = state_28053__$1;
(statearr_28070_28092[(2)] = null);

(statearr_28070_28092[(1)] = (2));


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
});})(c__21535__auto__))
;
return ((function (switch__21473__auto__,c__21535__auto__){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_28074 = [null,null,null,null,null,null,null,null];
(statearr_28074[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_28074[(1)] = (1));

return statearr_28074;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_28053){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_28053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e28075){if((e28075 instanceof Object)){
var ex__21477__auto__ = e28075;
var statearr_28076_28093 = state_28053;
(statearr_28076_28093[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28094 = state_28053;
state_28053 = G__28094;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_28053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_28053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_28077 = f__21536__auto__.call(null);
(statearr_28077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_28077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28096 = {};
return obj28096;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18109__auto__ = _;
if(and__18109__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18757__auto__ = (((_ == null))?null:_);
return (function (){var or__18121__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28098 = {};
return obj28098;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28320 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28320 = (function (cs,ch,mult,meta28321){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28321 = meta28321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28320.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28320.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28320.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28320.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28320.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28322){
var self__ = this;
var _28322__$1 = this;
return self__.meta28321;
});})(cs))
;

cljs.core.async.t28320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28322,meta28321__$1){
var self__ = this;
var _28322__$1 = this;
return (new cljs.core.async.t28320(self__.cs,self__.ch,self__.mult,meta28321__$1));
});})(cs))
;

cljs.core.async.t28320.cljs$lang$type = true;

cljs.core.async.t28320.cljs$lang$ctorStr = "cljs.core.async/t28320";

cljs.core.async.t28320.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28320");
});})(cs))
;

cljs.core.async.__GT_t28320 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28320(cs__$1,ch__$1,mult__$1,meta28321){
return (new cljs.core.async.t28320(cs__$1,ch__$1,mult__$1,meta28321));
});})(cs))
;

}

return (new cljs.core.async.t28320(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21535__auto___28541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___28541,cs,m,dchan,dctr,done){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___28541,cs,m,dchan,dctr,done){
return (function (state_28453){
var state_val_28454 = (state_28453[(1)]);
if((state_val_28454 === (7))){
var inst_28449 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28455_28542 = state_28453__$1;
(statearr_28455_28542[(2)] = inst_28449);

(statearr_28455_28542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (20))){
var inst_28354 = (state_28453[(7)]);
var inst_28364 = cljs.core.first.call(null,inst_28354);
var inst_28365 = cljs.core.nth.call(null,inst_28364,(0),null);
var inst_28366 = cljs.core.nth.call(null,inst_28364,(1),null);
var state_28453__$1 = (function (){var statearr_28456 = state_28453;
(statearr_28456[(8)] = inst_28365);

return statearr_28456;
})();
if(cljs.core.truth_(inst_28366)){
var statearr_28457_28543 = state_28453__$1;
(statearr_28457_28543[(1)] = (22));

} else {
var statearr_28458_28544 = state_28453__$1;
(statearr_28458_28544[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (27))){
var inst_28396 = (state_28453[(9)]);
var inst_28401 = (state_28453[(10)]);
var inst_28394 = (state_28453[(11)]);
var inst_28325 = (state_28453[(12)]);
var inst_28401__$1 = cljs.core._nth.call(null,inst_28394,inst_28396);
var inst_28402 = cljs.core.async.put_BANG_.call(null,inst_28401__$1,inst_28325,done);
var state_28453__$1 = (function (){var statearr_28459 = state_28453;
(statearr_28459[(10)] = inst_28401__$1);

return statearr_28459;
})();
if(cljs.core.truth_(inst_28402)){
var statearr_28460_28545 = state_28453__$1;
(statearr_28460_28545[(1)] = (30));

} else {
var statearr_28461_28546 = state_28453__$1;
(statearr_28461_28546[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (1))){
var state_28453__$1 = state_28453;
var statearr_28462_28547 = state_28453__$1;
(statearr_28462_28547[(2)] = null);

(statearr_28462_28547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (24))){
var inst_28354 = (state_28453[(7)]);
var inst_28371 = (state_28453[(2)]);
var inst_28372 = cljs.core.next.call(null,inst_28354);
var inst_28334 = inst_28372;
var inst_28335 = null;
var inst_28336 = (0);
var inst_28337 = (0);
var state_28453__$1 = (function (){var statearr_28463 = state_28453;
(statearr_28463[(13)] = inst_28335);

(statearr_28463[(14)] = inst_28336);

(statearr_28463[(15)] = inst_28371);

(statearr_28463[(16)] = inst_28337);

(statearr_28463[(17)] = inst_28334);

return statearr_28463;
})();
var statearr_28464_28548 = state_28453__$1;
(statearr_28464_28548[(2)] = null);

(statearr_28464_28548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (39))){
var state_28453__$1 = state_28453;
var statearr_28468_28549 = state_28453__$1;
(statearr_28468_28549[(2)] = null);

(statearr_28468_28549[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (4))){
var inst_28325 = (state_28453[(12)]);
var inst_28325__$1 = (state_28453[(2)]);
var inst_28326 = (inst_28325__$1 == null);
var state_28453__$1 = (function (){var statearr_28469 = state_28453;
(statearr_28469[(12)] = inst_28325__$1);

return statearr_28469;
})();
if(cljs.core.truth_(inst_28326)){
var statearr_28470_28550 = state_28453__$1;
(statearr_28470_28550[(1)] = (5));

} else {
var statearr_28471_28551 = state_28453__$1;
(statearr_28471_28551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (15))){
var inst_28335 = (state_28453[(13)]);
var inst_28336 = (state_28453[(14)]);
var inst_28337 = (state_28453[(16)]);
var inst_28334 = (state_28453[(17)]);
var inst_28350 = (state_28453[(2)]);
var inst_28351 = (inst_28337 + (1));
var tmp28465 = inst_28335;
var tmp28466 = inst_28336;
var tmp28467 = inst_28334;
var inst_28334__$1 = tmp28467;
var inst_28335__$1 = tmp28465;
var inst_28336__$1 = tmp28466;
var inst_28337__$1 = inst_28351;
var state_28453__$1 = (function (){var statearr_28472 = state_28453;
(statearr_28472[(18)] = inst_28350);

(statearr_28472[(13)] = inst_28335__$1);

(statearr_28472[(14)] = inst_28336__$1);

(statearr_28472[(16)] = inst_28337__$1);

(statearr_28472[(17)] = inst_28334__$1);

return statearr_28472;
})();
var statearr_28473_28552 = state_28453__$1;
(statearr_28473_28552[(2)] = null);

(statearr_28473_28552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (21))){
var inst_28375 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28477_28553 = state_28453__$1;
(statearr_28477_28553[(2)] = inst_28375);

(statearr_28477_28553[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (31))){
var inst_28401 = (state_28453[(10)]);
var inst_28405 = done.call(null,null);
var inst_28406 = cljs.core.async.untap_STAR_.call(null,m,inst_28401);
var state_28453__$1 = (function (){var statearr_28478 = state_28453;
(statearr_28478[(19)] = inst_28405);

return statearr_28478;
})();
var statearr_28479_28554 = state_28453__$1;
(statearr_28479_28554[(2)] = inst_28406);

(statearr_28479_28554[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (32))){
var inst_28396 = (state_28453[(9)]);
var inst_28394 = (state_28453[(11)]);
var inst_28395 = (state_28453[(20)]);
var inst_28393 = (state_28453[(21)]);
var inst_28408 = (state_28453[(2)]);
var inst_28409 = (inst_28396 + (1));
var tmp28474 = inst_28394;
var tmp28475 = inst_28395;
var tmp28476 = inst_28393;
var inst_28393__$1 = tmp28476;
var inst_28394__$1 = tmp28474;
var inst_28395__$1 = tmp28475;
var inst_28396__$1 = inst_28409;
var state_28453__$1 = (function (){var statearr_28480 = state_28453;
(statearr_28480[(9)] = inst_28396__$1);

(statearr_28480[(22)] = inst_28408);

(statearr_28480[(11)] = inst_28394__$1);

(statearr_28480[(20)] = inst_28395__$1);

(statearr_28480[(21)] = inst_28393__$1);

return statearr_28480;
})();
var statearr_28481_28555 = state_28453__$1;
(statearr_28481_28555[(2)] = null);

(statearr_28481_28555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (40))){
var inst_28421 = (state_28453[(23)]);
var inst_28425 = done.call(null,null);
var inst_28426 = cljs.core.async.untap_STAR_.call(null,m,inst_28421);
var state_28453__$1 = (function (){var statearr_28482 = state_28453;
(statearr_28482[(24)] = inst_28425);

return statearr_28482;
})();
var statearr_28483_28556 = state_28453__$1;
(statearr_28483_28556[(2)] = inst_28426);

(statearr_28483_28556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (33))){
var inst_28412 = (state_28453[(25)]);
var inst_28414 = cljs.core.chunked_seq_QMARK_.call(null,inst_28412);
var state_28453__$1 = state_28453;
if(inst_28414){
var statearr_28484_28557 = state_28453__$1;
(statearr_28484_28557[(1)] = (36));

} else {
var statearr_28485_28558 = state_28453__$1;
(statearr_28485_28558[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (13))){
var inst_28344 = (state_28453[(26)]);
var inst_28347 = cljs.core.async.close_BANG_.call(null,inst_28344);
var state_28453__$1 = state_28453;
var statearr_28486_28559 = state_28453__$1;
(statearr_28486_28559[(2)] = inst_28347);

(statearr_28486_28559[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (22))){
var inst_28365 = (state_28453[(8)]);
var inst_28368 = cljs.core.async.close_BANG_.call(null,inst_28365);
var state_28453__$1 = state_28453;
var statearr_28487_28560 = state_28453__$1;
(statearr_28487_28560[(2)] = inst_28368);

(statearr_28487_28560[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (36))){
var inst_28412 = (state_28453[(25)]);
var inst_28416 = cljs.core.chunk_first.call(null,inst_28412);
var inst_28417 = cljs.core.chunk_rest.call(null,inst_28412);
var inst_28418 = cljs.core.count.call(null,inst_28416);
var inst_28393 = inst_28417;
var inst_28394 = inst_28416;
var inst_28395 = inst_28418;
var inst_28396 = (0);
var state_28453__$1 = (function (){var statearr_28488 = state_28453;
(statearr_28488[(9)] = inst_28396);

(statearr_28488[(11)] = inst_28394);

(statearr_28488[(20)] = inst_28395);

(statearr_28488[(21)] = inst_28393);

return statearr_28488;
})();
var statearr_28489_28561 = state_28453__$1;
(statearr_28489_28561[(2)] = null);

(statearr_28489_28561[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (41))){
var inst_28412 = (state_28453[(25)]);
var inst_28428 = (state_28453[(2)]);
var inst_28429 = cljs.core.next.call(null,inst_28412);
var inst_28393 = inst_28429;
var inst_28394 = null;
var inst_28395 = (0);
var inst_28396 = (0);
var state_28453__$1 = (function (){var statearr_28490 = state_28453;
(statearr_28490[(27)] = inst_28428);

(statearr_28490[(9)] = inst_28396);

(statearr_28490[(11)] = inst_28394);

(statearr_28490[(20)] = inst_28395);

(statearr_28490[(21)] = inst_28393);

return statearr_28490;
})();
var statearr_28491_28562 = state_28453__$1;
(statearr_28491_28562[(2)] = null);

(statearr_28491_28562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (43))){
var state_28453__$1 = state_28453;
var statearr_28492_28563 = state_28453__$1;
(statearr_28492_28563[(2)] = null);

(statearr_28492_28563[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (29))){
var inst_28437 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28493_28564 = state_28453__$1;
(statearr_28493_28564[(2)] = inst_28437);

(statearr_28493_28564[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (44))){
var inst_28446 = (state_28453[(2)]);
var state_28453__$1 = (function (){var statearr_28494 = state_28453;
(statearr_28494[(28)] = inst_28446);

return statearr_28494;
})();
var statearr_28495_28565 = state_28453__$1;
(statearr_28495_28565[(2)] = null);

(statearr_28495_28565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (6))){
var inst_28385 = (state_28453[(29)]);
var inst_28384 = cljs.core.deref.call(null,cs);
var inst_28385__$1 = cljs.core.keys.call(null,inst_28384);
var inst_28386 = cljs.core.count.call(null,inst_28385__$1);
var inst_28387 = cljs.core.reset_BANG_.call(null,dctr,inst_28386);
var inst_28392 = cljs.core.seq.call(null,inst_28385__$1);
var inst_28393 = inst_28392;
var inst_28394 = null;
var inst_28395 = (0);
var inst_28396 = (0);
var state_28453__$1 = (function (){var statearr_28496 = state_28453;
(statearr_28496[(29)] = inst_28385__$1);

(statearr_28496[(9)] = inst_28396);

(statearr_28496[(30)] = inst_28387);

(statearr_28496[(11)] = inst_28394);

(statearr_28496[(20)] = inst_28395);

(statearr_28496[(21)] = inst_28393);

return statearr_28496;
})();
var statearr_28497_28566 = state_28453__$1;
(statearr_28497_28566[(2)] = null);

(statearr_28497_28566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (28))){
var inst_28412 = (state_28453[(25)]);
var inst_28393 = (state_28453[(21)]);
var inst_28412__$1 = cljs.core.seq.call(null,inst_28393);
var state_28453__$1 = (function (){var statearr_28498 = state_28453;
(statearr_28498[(25)] = inst_28412__$1);

return statearr_28498;
})();
if(inst_28412__$1){
var statearr_28499_28567 = state_28453__$1;
(statearr_28499_28567[(1)] = (33));

} else {
var statearr_28500_28568 = state_28453__$1;
(statearr_28500_28568[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (25))){
var inst_28396 = (state_28453[(9)]);
var inst_28395 = (state_28453[(20)]);
var inst_28398 = (inst_28396 < inst_28395);
var inst_28399 = inst_28398;
var state_28453__$1 = state_28453;
if(cljs.core.truth_(inst_28399)){
var statearr_28501_28569 = state_28453__$1;
(statearr_28501_28569[(1)] = (27));

} else {
var statearr_28502_28570 = state_28453__$1;
(statearr_28502_28570[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (34))){
var state_28453__$1 = state_28453;
var statearr_28503_28571 = state_28453__$1;
(statearr_28503_28571[(2)] = null);

(statearr_28503_28571[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (17))){
var state_28453__$1 = state_28453;
var statearr_28504_28572 = state_28453__$1;
(statearr_28504_28572[(2)] = null);

(statearr_28504_28572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (3))){
var inst_28451 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28453__$1,inst_28451);
} else {
if((state_val_28454 === (12))){
var inst_28380 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28505_28573 = state_28453__$1;
(statearr_28505_28573[(2)] = inst_28380);

(statearr_28505_28573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (2))){
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28453__$1,(4),ch);
} else {
if((state_val_28454 === (23))){
var state_28453__$1 = state_28453;
var statearr_28506_28574 = state_28453__$1;
(statearr_28506_28574[(2)] = null);

(statearr_28506_28574[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (35))){
var inst_28435 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28507_28575 = state_28453__$1;
(statearr_28507_28575[(2)] = inst_28435);

(statearr_28507_28575[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (19))){
var inst_28354 = (state_28453[(7)]);
var inst_28358 = cljs.core.chunk_first.call(null,inst_28354);
var inst_28359 = cljs.core.chunk_rest.call(null,inst_28354);
var inst_28360 = cljs.core.count.call(null,inst_28358);
var inst_28334 = inst_28359;
var inst_28335 = inst_28358;
var inst_28336 = inst_28360;
var inst_28337 = (0);
var state_28453__$1 = (function (){var statearr_28508 = state_28453;
(statearr_28508[(13)] = inst_28335);

(statearr_28508[(14)] = inst_28336);

(statearr_28508[(16)] = inst_28337);

(statearr_28508[(17)] = inst_28334);

return statearr_28508;
})();
var statearr_28509_28576 = state_28453__$1;
(statearr_28509_28576[(2)] = null);

(statearr_28509_28576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (11))){
var inst_28354 = (state_28453[(7)]);
var inst_28334 = (state_28453[(17)]);
var inst_28354__$1 = cljs.core.seq.call(null,inst_28334);
var state_28453__$1 = (function (){var statearr_28510 = state_28453;
(statearr_28510[(7)] = inst_28354__$1);

return statearr_28510;
})();
if(inst_28354__$1){
var statearr_28511_28577 = state_28453__$1;
(statearr_28511_28577[(1)] = (16));

} else {
var statearr_28512_28578 = state_28453__$1;
(statearr_28512_28578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (9))){
var inst_28382 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28513_28579 = state_28453__$1;
(statearr_28513_28579[(2)] = inst_28382);

(statearr_28513_28579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (5))){
var inst_28332 = cljs.core.deref.call(null,cs);
var inst_28333 = cljs.core.seq.call(null,inst_28332);
var inst_28334 = inst_28333;
var inst_28335 = null;
var inst_28336 = (0);
var inst_28337 = (0);
var state_28453__$1 = (function (){var statearr_28514 = state_28453;
(statearr_28514[(13)] = inst_28335);

(statearr_28514[(14)] = inst_28336);

(statearr_28514[(16)] = inst_28337);

(statearr_28514[(17)] = inst_28334);

return statearr_28514;
})();
var statearr_28515_28580 = state_28453__$1;
(statearr_28515_28580[(2)] = null);

(statearr_28515_28580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (14))){
var state_28453__$1 = state_28453;
var statearr_28516_28581 = state_28453__$1;
(statearr_28516_28581[(2)] = null);

(statearr_28516_28581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (45))){
var inst_28443 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28517_28582 = state_28453__$1;
(statearr_28517_28582[(2)] = inst_28443);

(statearr_28517_28582[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (26))){
var inst_28385 = (state_28453[(29)]);
var inst_28439 = (state_28453[(2)]);
var inst_28440 = cljs.core.seq.call(null,inst_28385);
var state_28453__$1 = (function (){var statearr_28518 = state_28453;
(statearr_28518[(31)] = inst_28439);

return statearr_28518;
})();
if(inst_28440){
var statearr_28519_28583 = state_28453__$1;
(statearr_28519_28583[(1)] = (42));

} else {
var statearr_28520_28584 = state_28453__$1;
(statearr_28520_28584[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (16))){
var inst_28354 = (state_28453[(7)]);
var inst_28356 = cljs.core.chunked_seq_QMARK_.call(null,inst_28354);
var state_28453__$1 = state_28453;
if(inst_28356){
var statearr_28521_28585 = state_28453__$1;
(statearr_28521_28585[(1)] = (19));

} else {
var statearr_28522_28586 = state_28453__$1;
(statearr_28522_28586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (38))){
var inst_28432 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28523_28587 = state_28453__$1;
(statearr_28523_28587[(2)] = inst_28432);

(statearr_28523_28587[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (30))){
var state_28453__$1 = state_28453;
var statearr_28524_28588 = state_28453__$1;
(statearr_28524_28588[(2)] = null);

(statearr_28524_28588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (10))){
var inst_28335 = (state_28453[(13)]);
var inst_28337 = (state_28453[(16)]);
var inst_28343 = cljs.core._nth.call(null,inst_28335,inst_28337);
var inst_28344 = cljs.core.nth.call(null,inst_28343,(0),null);
var inst_28345 = cljs.core.nth.call(null,inst_28343,(1),null);
var state_28453__$1 = (function (){var statearr_28525 = state_28453;
(statearr_28525[(26)] = inst_28344);

return statearr_28525;
})();
if(cljs.core.truth_(inst_28345)){
var statearr_28526_28589 = state_28453__$1;
(statearr_28526_28589[(1)] = (13));

} else {
var statearr_28527_28590 = state_28453__$1;
(statearr_28527_28590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (18))){
var inst_28378 = (state_28453[(2)]);
var state_28453__$1 = state_28453;
var statearr_28528_28591 = state_28453__$1;
(statearr_28528_28591[(2)] = inst_28378);

(statearr_28528_28591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (42))){
var state_28453__$1 = state_28453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28453__$1,(45),dchan);
} else {
if((state_val_28454 === (37))){
var inst_28412 = (state_28453[(25)]);
var inst_28325 = (state_28453[(12)]);
var inst_28421 = (state_28453[(23)]);
var inst_28421__$1 = cljs.core.first.call(null,inst_28412);
var inst_28422 = cljs.core.async.put_BANG_.call(null,inst_28421__$1,inst_28325,done);
var state_28453__$1 = (function (){var statearr_28529 = state_28453;
(statearr_28529[(23)] = inst_28421__$1);

return statearr_28529;
})();
if(cljs.core.truth_(inst_28422)){
var statearr_28530_28592 = state_28453__$1;
(statearr_28530_28592[(1)] = (39));

} else {
var statearr_28531_28593 = state_28453__$1;
(statearr_28531_28593[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28454 === (8))){
var inst_28336 = (state_28453[(14)]);
var inst_28337 = (state_28453[(16)]);
var inst_28339 = (inst_28337 < inst_28336);
var inst_28340 = inst_28339;
var state_28453__$1 = state_28453;
if(cljs.core.truth_(inst_28340)){
var statearr_28532_28594 = state_28453__$1;
(statearr_28532_28594[(1)] = (10));

} else {
var statearr_28533_28595 = state_28453__$1;
(statearr_28533_28595[(1)] = (11));

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
});})(c__21535__auto___28541,cs,m,dchan,dctr,done))
;
return ((function (switch__21473__auto__,c__21535__auto___28541,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21474__auto__ = null;
var cljs$core$async$mult_$_state_machine__21474__auto____0 = (function (){
var statearr_28537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28537[(0)] = cljs$core$async$mult_$_state_machine__21474__auto__);

(statearr_28537[(1)] = (1));

return statearr_28537;
});
var cljs$core$async$mult_$_state_machine__21474__auto____1 = (function (state_28453){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_28453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e28538){if((e28538 instanceof Object)){
var ex__21477__auto__ = e28538;
var statearr_28539_28596 = state_28453;
(statearr_28539_28596[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28597 = state_28453;
state_28453 = G__28597;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21474__auto__ = function(state_28453){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21474__auto____1.call(this,state_28453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21474__auto____0;
cljs$core$async$mult_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21474__auto____1;
return cljs$core$async$mult_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___28541,cs,m,dchan,dctr,done))
})();
var state__21537__auto__ = (function (){var statearr_28540 = f__21536__auto__.call(null);
(statearr_28540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___28541);

return statearr_28540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___28541,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__28599 = arguments.length;
switch (G__28599) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj28602 = {};
return obj28602;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28607){
var map__28608 = p__28607;
var map__28608__$1 = ((cljs.core.seq_QMARK_.call(null,map__28608))?cljs.core.apply.call(null,cljs.core.hash_map,map__28608):map__28608);
var opts = map__28608__$1;
var statearr_28609_28612 = state;
(statearr_28609_28612[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28608,map__28608__$1,opts){
return (function (val){
var statearr_28610_28613 = state;
(statearr_28610_28613[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28608,map__28608__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28611_28614 = state;
(statearr_28611_28614[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28603){
var G__28604 = cljs.core.first.call(null,seq28603);
var seq28603__$1 = cljs.core.next.call(null,seq28603);
var G__28605 = cljs.core.first.call(null,seq28603__$1);
var seq28603__$2 = cljs.core.next.call(null,seq28603__$1);
var G__28606 = cljs.core.first.call(null,seq28603__$2);
var seq28603__$3 = cljs.core.next.call(null,seq28603__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28604,G__28605,G__28606,seq28603__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t28734 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28734 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28735){
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
this.meta28735 = meta28735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28734.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28734.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28734.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28734.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28734.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28734.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28734.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28736){
var self__ = this;
var _28736__$1 = this;
return self__.meta28735;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28736,meta28735__$1){
var self__ = this;
var _28736__$1 = this;
return (new cljs.core.async.t28734(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28735__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28734.cljs$lang$type = true;

cljs.core.async.t28734.cljs$lang$ctorStr = "cljs.core.async/t28734";

cljs.core.async.t28734.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28734");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28734 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28734(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28735){
return (new cljs.core.async.t28734(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28735));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28734(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21535__auto___28853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___28853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___28853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28806){
var state_val_28807 = (state_28806[(1)]);
if((state_val_28807 === (7))){
var inst_28750 = (state_28806[(7)]);
var inst_28755 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28750);
var state_28806__$1 = state_28806;
var statearr_28808_28854 = state_28806__$1;
(statearr_28808_28854[(2)] = inst_28755);

(statearr_28808_28854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (20))){
var inst_28765 = (state_28806[(8)]);
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28806__$1,(23),out,inst_28765);
} else {
if((state_val_28807 === (1))){
var inst_28740 = (state_28806[(9)]);
var inst_28740__$1 = calc_state.call(null);
var inst_28741 = cljs.core.seq_QMARK_.call(null,inst_28740__$1);
var state_28806__$1 = (function (){var statearr_28809 = state_28806;
(statearr_28809[(9)] = inst_28740__$1);

return statearr_28809;
})();
if(inst_28741){
var statearr_28810_28855 = state_28806__$1;
(statearr_28810_28855[(1)] = (2));

} else {
var statearr_28811_28856 = state_28806__$1;
(statearr_28811_28856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (24))){
var inst_28758 = (state_28806[(10)]);
var inst_28750 = inst_28758;
var state_28806__$1 = (function (){var statearr_28812 = state_28806;
(statearr_28812[(7)] = inst_28750);

return statearr_28812;
})();
var statearr_28813_28857 = state_28806__$1;
(statearr_28813_28857[(2)] = null);

(statearr_28813_28857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (4))){
var inst_28740 = (state_28806[(9)]);
var inst_28746 = (state_28806[(2)]);
var inst_28747 = cljs.core.get.call(null,inst_28746,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28748 = cljs.core.get.call(null,inst_28746,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28749 = cljs.core.get.call(null,inst_28746,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28750 = inst_28740;
var state_28806__$1 = (function (){var statearr_28814 = state_28806;
(statearr_28814[(11)] = inst_28748);

(statearr_28814[(12)] = inst_28749);

(statearr_28814[(7)] = inst_28750);

(statearr_28814[(13)] = inst_28747);

return statearr_28814;
})();
var statearr_28815_28858 = state_28806__$1;
(statearr_28815_28858[(2)] = null);

(statearr_28815_28858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (15))){
var state_28806__$1 = state_28806;
var statearr_28816_28859 = state_28806__$1;
(statearr_28816_28859[(2)] = null);

(statearr_28816_28859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (21))){
var inst_28758 = (state_28806[(10)]);
var inst_28750 = inst_28758;
var state_28806__$1 = (function (){var statearr_28817 = state_28806;
(statearr_28817[(7)] = inst_28750);

return statearr_28817;
})();
var statearr_28818_28860 = state_28806__$1;
(statearr_28818_28860[(2)] = null);

(statearr_28818_28860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (13))){
var inst_28802 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28819_28861 = state_28806__$1;
(statearr_28819_28861[(2)] = inst_28802);

(statearr_28819_28861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (22))){
var inst_28800 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28820_28862 = state_28806__$1;
(statearr_28820_28862[(2)] = inst_28800);

(statearr_28820_28862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (6))){
var inst_28804 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28806__$1,inst_28804);
} else {
if((state_val_28807 === (25))){
var state_28806__$1 = state_28806;
var statearr_28821_28863 = state_28806__$1;
(statearr_28821_28863[(2)] = null);

(statearr_28821_28863[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (17))){
var inst_28780 = (state_28806[(14)]);
var state_28806__$1 = state_28806;
var statearr_28822_28864 = state_28806__$1;
(statearr_28822_28864[(2)] = inst_28780);

(statearr_28822_28864[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (3))){
var inst_28740 = (state_28806[(9)]);
var state_28806__$1 = state_28806;
var statearr_28823_28865 = state_28806__$1;
(statearr_28823_28865[(2)] = inst_28740);

(statearr_28823_28865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (12))){
var inst_28780 = (state_28806[(14)]);
var inst_28761 = (state_28806[(15)]);
var inst_28766 = (state_28806[(16)]);
var inst_28780__$1 = inst_28761.call(null,inst_28766);
var state_28806__$1 = (function (){var statearr_28824 = state_28806;
(statearr_28824[(14)] = inst_28780__$1);

return statearr_28824;
})();
if(cljs.core.truth_(inst_28780__$1)){
var statearr_28825_28866 = state_28806__$1;
(statearr_28825_28866[(1)] = (17));

} else {
var statearr_28826_28867 = state_28806__$1;
(statearr_28826_28867[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (2))){
var inst_28740 = (state_28806[(9)]);
var inst_28743 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28740);
var state_28806__$1 = state_28806;
var statearr_28827_28868 = state_28806__$1;
(statearr_28827_28868[(2)] = inst_28743);

(statearr_28827_28868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (23))){
var inst_28791 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28791)){
var statearr_28828_28869 = state_28806__$1;
(statearr_28828_28869[(1)] = (24));

} else {
var statearr_28829_28870 = state_28806__$1;
(statearr_28829_28870[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (19))){
var inst_28788 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28788)){
var statearr_28830_28871 = state_28806__$1;
(statearr_28830_28871[(1)] = (20));

} else {
var statearr_28831_28872 = state_28806__$1;
(statearr_28831_28872[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (11))){
var inst_28765 = (state_28806[(8)]);
var inst_28771 = (inst_28765 == null);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28771)){
var statearr_28832_28873 = state_28806__$1;
(statearr_28832_28873[(1)] = (14));

} else {
var statearr_28833_28874 = state_28806__$1;
(statearr_28833_28874[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (9))){
var inst_28758 = (state_28806[(10)]);
var inst_28758__$1 = (state_28806[(2)]);
var inst_28759 = cljs.core.get.call(null,inst_28758__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28760 = cljs.core.get.call(null,inst_28758__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28761 = cljs.core.get.call(null,inst_28758__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28806__$1 = (function (){var statearr_28834 = state_28806;
(statearr_28834[(15)] = inst_28761);

(statearr_28834[(10)] = inst_28758__$1);

(statearr_28834[(17)] = inst_28760);

return statearr_28834;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28806__$1,(10),inst_28759);
} else {
if((state_val_28807 === (5))){
var inst_28750 = (state_28806[(7)]);
var inst_28753 = cljs.core.seq_QMARK_.call(null,inst_28750);
var state_28806__$1 = state_28806;
if(inst_28753){
var statearr_28835_28875 = state_28806__$1;
(statearr_28835_28875[(1)] = (7));

} else {
var statearr_28836_28876 = state_28806__$1;
(statearr_28836_28876[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (14))){
var inst_28766 = (state_28806[(16)]);
var inst_28773 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28766);
var state_28806__$1 = state_28806;
var statearr_28837_28877 = state_28806__$1;
(statearr_28837_28877[(2)] = inst_28773);

(statearr_28837_28877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (26))){
var inst_28796 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28838_28878 = state_28806__$1;
(statearr_28838_28878[(2)] = inst_28796);

(statearr_28838_28878[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (16))){
var inst_28776 = (state_28806[(2)]);
var inst_28777 = calc_state.call(null);
var inst_28750 = inst_28777;
var state_28806__$1 = (function (){var statearr_28839 = state_28806;
(statearr_28839[(18)] = inst_28776);

(statearr_28839[(7)] = inst_28750);

return statearr_28839;
})();
var statearr_28840_28879 = state_28806__$1;
(statearr_28840_28879[(2)] = null);

(statearr_28840_28879[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (10))){
var inst_28765 = (state_28806[(8)]);
var inst_28766 = (state_28806[(16)]);
var inst_28764 = (state_28806[(2)]);
var inst_28765__$1 = cljs.core.nth.call(null,inst_28764,(0),null);
var inst_28766__$1 = cljs.core.nth.call(null,inst_28764,(1),null);
var inst_28767 = (inst_28765__$1 == null);
var inst_28768 = cljs.core._EQ_.call(null,inst_28766__$1,change);
var inst_28769 = (inst_28767) || (inst_28768);
var state_28806__$1 = (function (){var statearr_28841 = state_28806;
(statearr_28841[(8)] = inst_28765__$1);

(statearr_28841[(16)] = inst_28766__$1);

return statearr_28841;
})();
if(cljs.core.truth_(inst_28769)){
var statearr_28842_28880 = state_28806__$1;
(statearr_28842_28880[(1)] = (11));

} else {
var statearr_28843_28881 = state_28806__$1;
(statearr_28843_28881[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (18))){
var inst_28761 = (state_28806[(15)]);
var inst_28766 = (state_28806[(16)]);
var inst_28760 = (state_28806[(17)]);
var inst_28783 = cljs.core.empty_QMARK_.call(null,inst_28761);
var inst_28784 = inst_28760.call(null,inst_28766);
var inst_28785 = cljs.core.not.call(null,inst_28784);
var inst_28786 = (inst_28783) && (inst_28785);
var state_28806__$1 = state_28806;
var statearr_28844_28882 = state_28806__$1;
(statearr_28844_28882[(2)] = inst_28786);

(statearr_28844_28882[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (8))){
var inst_28750 = (state_28806[(7)]);
var state_28806__$1 = state_28806;
var statearr_28845_28883 = state_28806__$1;
(statearr_28845_28883[(2)] = inst_28750);

(statearr_28845_28883[(1)] = (9));


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
});})(c__21535__auto___28853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21473__auto__,c__21535__auto___28853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21474__auto__ = null;
var cljs$core$async$mix_$_state_machine__21474__auto____0 = (function (){
var statearr_28849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28849[(0)] = cljs$core$async$mix_$_state_machine__21474__auto__);

(statearr_28849[(1)] = (1));

return statearr_28849;
});
var cljs$core$async$mix_$_state_machine__21474__auto____1 = (function (state_28806){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_28806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e28850){if((e28850 instanceof Object)){
var ex__21477__auto__ = e28850;
var statearr_28851_28884 = state_28806;
(statearr_28851_28884[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28885 = state_28806;
state_28806 = G__28885;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21474__auto__ = function(state_28806){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21474__auto____1.call(this,state_28806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21474__auto____0;
cljs$core$async$mix_$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21474__auto____1;
return cljs$core$async$mix_$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___28853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21537__auto__ = (function (){var statearr_28852 = f__21536__auto__.call(null);
(statearr_28852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___28853);

return statearr_28852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___28853,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj28887 = {};
return obj28887;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28889 = arguments.length;
switch (G__28889) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28893 = arguments.length;
switch (G__28893) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18121__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18121__auto__,mults){
return (function (p1__28891_SHARP_){
if(cljs.core.truth_(p1__28891_SHARP_.call(null,topic))){
return p1__28891_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28891_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28894 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28894 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28895){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28895 = meta28895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28894.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28894.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28894.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28894.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28894.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28896){
var self__ = this;
var _28896__$1 = this;
return self__.meta28895;
});})(mults,ensure_mult))
;

cljs.core.async.t28894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28896,meta28895__$1){
var self__ = this;
var _28896__$1 = this;
return (new cljs.core.async.t28894(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28895__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28894.cljs$lang$type = true;

cljs.core.async.t28894.cljs$lang$ctorStr = "cljs.core.async/t28894";

cljs.core.async.t28894.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28894");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28894 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28894(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28895){
return (new cljs.core.async.t28894(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28895));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28894(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21535__auto___29017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29017,mults,ensure_mult,p){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29017,mults,ensure_mult,p){
return (function (state_28968){
var state_val_28969 = (state_28968[(1)]);
if((state_val_28969 === (7))){
var inst_28964 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28970_29018 = state_28968__$1;
(statearr_28970_29018[(2)] = inst_28964);

(statearr_28970_29018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (20))){
var state_28968__$1 = state_28968;
var statearr_28971_29019 = state_28968__$1;
(statearr_28971_29019[(2)] = null);

(statearr_28971_29019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (1))){
var state_28968__$1 = state_28968;
var statearr_28972_29020 = state_28968__$1;
(statearr_28972_29020[(2)] = null);

(statearr_28972_29020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (24))){
var inst_28947 = (state_28968[(7)]);
var inst_28956 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28947);
var state_28968__$1 = state_28968;
var statearr_28973_29021 = state_28968__$1;
(statearr_28973_29021[(2)] = inst_28956);

(statearr_28973_29021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (4))){
var inst_28899 = (state_28968[(8)]);
var inst_28899__$1 = (state_28968[(2)]);
var inst_28900 = (inst_28899__$1 == null);
var state_28968__$1 = (function (){var statearr_28974 = state_28968;
(statearr_28974[(8)] = inst_28899__$1);

return statearr_28974;
})();
if(cljs.core.truth_(inst_28900)){
var statearr_28975_29022 = state_28968__$1;
(statearr_28975_29022[(1)] = (5));

} else {
var statearr_28976_29023 = state_28968__$1;
(statearr_28976_29023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (15))){
var inst_28941 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28977_29024 = state_28968__$1;
(statearr_28977_29024[(2)] = inst_28941);

(statearr_28977_29024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (21))){
var inst_28961 = (state_28968[(2)]);
var state_28968__$1 = (function (){var statearr_28978 = state_28968;
(statearr_28978[(9)] = inst_28961);

return statearr_28978;
})();
var statearr_28979_29025 = state_28968__$1;
(statearr_28979_29025[(2)] = null);

(statearr_28979_29025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (13))){
var inst_28923 = (state_28968[(10)]);
var inst_28925 = cljs.core.chunked_seq_QMARK_.call(null,inst_28923);
var state_28968__$1 = state_28968;
if(inst_28925){
var statearr_28980_29026 = state_28968__$1;
(statearr_28980_29026[(1)] = (16));

} else {
var statearr_28981_29027 = state_28968__$1;
(statearr_28981_29027[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (22))){
var inst_28953 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
if(cljs.core.truth_(inst_28953)){
var statearr_28982_29028 = state_28968__$1;
(statearr_28982_29028[(1)] = (23));

} else {
var statearr_28983_29029 = state_28968__$1;
(statearr_28983_29029[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (6))){
var inst_28949 = (state_28968[(11)]);
var inst_28899 = (state_28968[(8)]);
var inst_28947 = (state_28968[(7)]);
var inst_28947__$1 = topic_fn.call(null,inst_28899);
var inst_28948 = cljs.core.deref.call(null,mults);
var inst_28949__$1 = cljs.core.get.call(null,inst_28948,inst_28947__$1);
var state_28968__$1 = (function (){var statearr_28984 = state_28968;
(statearr_28984[(11)] = inst_28949__$1);

(statearr_28984[(7)] = inst_28947__$1);

return statearr_28984;
})();
if(cljs.core.truth_(inst_28949__$1)){
var statearr_28985_29030 = state_28968__$1;
(statearr_28985_29030[(1)] = (19));

} else {
var statearr_28986_29031 = state_28968__$1;
(statearr_28986_29031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (25))){
var inst_28958 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28987_29032 = state_28968__$1;
(statearr_28987_29032[(2)] = inst_28958);

(statearr_28987_29032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (17))){
var inst_28923 = (state_28968[(10)]);
var inst_28932 = cljs.core.first.call(null,inst_28923);
var inst_28933 = cljs.core.async.muxch_STAR_.call(null,inst_28932);
var inst_28934 = cljs.core.async.close_BANG_.call(null,inst_28933);
var inst_28935 = cljs.core.next.call(null,inst_28923);
var inst_28909 = inst_28935;
var inst_28910 = null;
var inst_28911 = (0);
var inst_28912 = (0);
var state_28968__$1 = (function (){var statearr_28988 = state_28968;
(statearr_28988[(12)] = inst_28911);

(statearr_28988[(13)] = inst_28934);

(statearr_28988[(14)] = inst_28912);

(statearr_28988[(15)] = inst_28910);

(statearr_28988[(16)] = inst_28909);

return statearr_28988;
})();
var statearr_28989_29033 = state_28968__$1;
(statearr_28989_29033[(2)] = null);

(statearr_28989_29033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (3))){
var inst_28966 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28968__$1,inst_28966);
} else {
if((state_val_28969 === (12))){
var inst_28943 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28990_29034 = state_28968__$1;
(statearr_28990_29034[(2)] = inst_28943);

(statearr_28990_29034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (2))){
var state_28968__$1 = state_28968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28968__$1,(4),ch);
} else {
if((state_val_28969 === (23))){
var state_28968__$1 = state_28968;
var statearr_28991_29035 = state_28968__$1;
(statearr_28991_29035[(2)] = null);

(statearr_28991_29035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (19))){
var inst_28949 = (state_28968[(11)]);
var inst_28899 = (state_28968[(8)]);
var inst_28951 = cljs.core.async.muxch_STAR_.call(null,inst_28949);
var state_28968__$1 = state_28968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28968__$1,(22),inst_28951,inst_28899);
} else {
if((state_val_28969 === (11))){
var inst_28923 = (state_28968[(10)]);
var inst_28909 = (state_28968[(16)]);
var inst_28923__$1 = cljs.core.seq.call(null,inst_28909);
var state_28968__$1 = (function (){var statearr_28992 = state_28968;
(statearr_28992[(10)] = inst_28923__$1);

return statearr_28992;
})();
if(inst_28923__$1){
var statearr_28993_29036 = state_28968__$1;
(statearr_28993_29036[(1)] = (13));

} else {
var statearr_28994_29037 = state_28968__$1;
(statearr_28994_29037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (9))){
var inst_28945 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28995_29038 = state_28968__$1;
(statearr_28995_29038[(2)] = inst_28945);

(statearr_28995_29038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (5))){
var inst_28906 = cljs.core.deref.call(null,mults);
var inst_28907 = cljs.core.vals.call(null,inst_28906);
var inst_28908 = cljs.core.seq.call(null,inst_28907);
var inst_28909 = inst_28908;
var inst_28910 = null;
var inst_28911 = (0);
var inst_28912 = (0);
var state_28968__$1 = (function (){var statearr_28996 = state_28968;
(statearr_28996[(12)] = inst_28911);

(statearr_28996[(14)] = inst_28912);

(statearr_28996[(15)] = inst_28910);

(statearr_28996[(16)] = inst_28909);

return statearr_28996;
})();
var statearr_28997_29039 = state_28968__$1;
(statearr_28997_29039[(2)] = null);

(statearr_28997_29039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (14))){
var state_28968__$1 = state_28968;
var statearr_29001_29040 = state_28968__$1;
(statearr_29001_29040[(2)] = null);

(statearr_29001_29040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (16))){
var inst_28923 = (state_28968[(10)]);
var inst_28927 = cljs.core.chunk_first.call(null,inst_28923);
var inst_28928 = cljs.core.chunk_rest.call(null,inst_28923);
var inst_28929 = cljs.core.count.call(null,inst_28927);
var inst_28909 = inst_28928;
var inst_28910 = inst_28927;
var inst_28911 = inst_28929;
var inst_28912 = (0);
var state_28968__$1 = (function (){var statearr_29002 = state_28968;
(statearr_29002[(12)] = inst_28911);

(statearr_29002[(14)] = inst_28912);

(statearr_29002[(15)] = inst_28910);

(statearr_29002[(16)] = inst_28909);

return statearr_29002;
})();
var statearr_29003_29041 = state_28968__$1;
(statearr_29003_29041[(2)] = null);

(statearr_29003_29041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (10))){
var inst_28911 = (state_28968[(12)]);
var inst_28912 = (state_28968[(14)]);
var inst_28910 = (state_28968[(15)]);
var inst_28909 = (state_28968[(16)]);
var inst_28917 = cljs.core._nth.call(null,inst_28910,inst_28912);
var inst_28918 = cljs.core.async.muxch_STAR_.call(null,inst_28917);
var inst_28919 = cljs.core.async.close_BANG_.call(null,inst_28918);
var inst_28920 = (inst_28912 + (1));
var tmp28998 = inst_28911;
var tmp28999 = inst_28910;
var tmp29000 = inst_28909;
var inst_28909__$1 = tmp29000;
var inst_28910__$1 = tmp28999;
var inst_28911__$1 = tmp28998;
var inst_28912__$1 = inst_28920;
var state_28968__$1 = (function (){var statearr_29004 = state_28968;
(statearr_29004[(12)] = inst_28911__$1);

(statearr_29004[(14)] = inst_28912__$1);

(statearr_29004[(17)] = inst_28919);

(statearr_29004[(15)] = inst_28910__$1);

(statearr_29004[(16)] = inst_28909__$1);

return statearr_29004;
})();
var statearr_29005_29042 = state_28968__$1;
(statearr_29005_29042[(2)] = null);

(statearr_29005_29042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (18))){
var inst_28938 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_29006_29043 = state_28968__$1;
(statearr_29006_29043[(2)] = inst_28938);

(statearr_29006_29043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (8))){
var inst_28911 = (state_28968[(12)]);
var inst_28912 = (state_28968[(14)]);
var inst_28914 = (inst_28912 < inst_28911);
var inst_28915 = inst_28914;
var state_28968__$1 = state_28968;
if(cljs.core.truth_(inst_28915)){
var statearr_29007_29044 = state_28968__$1;
(statearr_29007_29044[(1)] = (10));

} else {
var statearr_29008_29045 = state_28968__$1;
(statearr_29008_29045[(1)] = (11));

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
});})(c__21535__auto___29017,mults,ensure_mult,p))
;
return ((function (switch__21473__auto__,c__21535__auto___29017,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29012[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29012[(1)] = (1));

return statearr_29012;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_28968){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_28968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29013){if((e29013 instanceof Object)){
var ex__21477__auto__ = e29013;
var statearr_29014_29046 = state_28968;
(statearr_29014_29046[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29047 = state_28968;
state_28968 = G__29047;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_28968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_28968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29017,mults,ensure_mult,p))
})();
var state__21537__auto__ = (function (){var statearr_29015 = f__21536__auto__.call(null);
(statearr_29015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29017);

return statearr_29015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29017,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__29049 = arguments.length;
switch (G__29049) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__29052 = arguments.length;
switch (G__29052) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__29055 = arguments.length;
switch (G__29055) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__21535__auto___29125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29094){
var state_val_29095 = (state_29094[(1)]);
if((state_val_29095 === (7))){
var state_29094__$1 = state_29094;
var statearr_29096_29126 = state_29094__$1;
(statearr_29096_29126[(2)] = null);

(statearr_29096_29126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (1))){
var state_29094__$1 = state_29094;
var statearr_29097_29127 = state_29094__$1;
(statearr_29097_29127[(2)] = null);

(statearr_29097_29127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (4))){
var inst_29058 = (state_29094[(7)]);
var inst_29060 = (inst_29058 < cnt);
var state_29094__$1 = state_29094;
if(cljs.core.truth_(inst_29060)){
var statearr_29098_29128 = state_29094__$1;
(statearr_29098_29128[(1)] = (6));

} else {
var statearr_29099_29129 = state_29094__$1;
(statearr_29099_29129[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (15))){
var inst_29090 = (state_29094[(2)]);
var state_29094__$1 = state_29094;
var statearr_29100_29130 = state_29094__$1;
(statearr_29100_29130[(2)] = inst_29090);

(statearr_29100_29130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (13))){
var inst_29083 = cljs.core.async.close_BANG_.call(null,out);
var state_29094__$1 = state_29094;
var statearr_29101_29131 = state_29094__$1;
(statearr_29101_29131[(2)] = inst_29083);

(statearr_29101_29131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (6))){
var state_29094__$1 = state_29094;
var statearr_29102_29132 = state_29094__$1;
(statearr_29102_29132[(2)] = null);

(statearr_29102_29132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (3))){
var inst_29092 = (state_29094[(2)]);
var state_29094__$1 = state_29094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29094__$1,inst_29092);
} else {
if((state_val_29095 === (12))){
var inst_29080 = (state_29094[(8)]);
var inst_29080__$1 = (state_29094[(2)]);
var inst_29081 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29080__$1);
var state_29094__$1 = (function (){var statearr_29103 = state_29094;
(statearr_29103[(8)] = inst_29080__$1);

return statearr_29103;
})();
if(cljs.core.truth_(inst_29081)){
var statearr_29104_29133 = state_29094__$1;
(statearr_29104_29133[(1)] = (13));

} else {
var statearr_29105_29134 = state_29094__$1;
(statearr_29105_29134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (2))){
var inst_29057 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29058 = (0);
var state_29094__$1 = (function (){var statearr_29106 = state_29094;
(statearr_29106[(9)] = inst_29057);

(statearr_29106[(7)] = inst_29058);

return statearr_29106;
})();
var statearr_29107_29135 = state_29094__$1;
(statearr_29107_29135[(2)] = null);

(statearr_29107_29135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (11))){
var inst_29058 = (state_29094[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29094,(10),Object,null,(9));
var inst_29067 = chs__$1.call(null,inst_29058);
var inst_29068 = done.call(null,inst_29058);
var inst_29069 = cljs.core.async.take_BANG_.call(null,inst_29067,inst_29068);
var state_29094__$1 = state_29094;
var statearr_29108_29136 = state_29094__$1;
(statearr_29108_29136[(2)] = inst_29069);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (9))){
var inst_29058 = (state_29094[(7)]);
var inst_29071 = (state_29094[(2)]);
var inst_29072 = (inst_29058 + (1));
var inst_29058__$1 = inst_29072;
var state_29094__$1 = (function (){var statearr_29109 = state_29094;
(statearr_29109[(10)] = inst_29071);

(statearr_29109[(7)] = inst_29058__$1);

return statearr_29109;
})();
var statearr_29110_29137 = state_29094__$1;
(statearr_29110_29137[(2)] = null);

(statearr_29110_29137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (5))){
var inst_29078 = (state_29094[(2)]);
var state_29094__$1 = (function (){var statearr_29111 = state_29094;
(statearr_29111[(11)] = inst_29078);

return statearr_29111;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29094__$1,(12),dchan);
} else {
if((state_val_29095 === (14))){
var inst_29080 = (state_29094[(8)]);
var inst_29085 = cljs.core.apply.call(null,f,inst_29080);
var state_29094__$1 = state_29094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29094__$1,(16),out,inst_29085);
} else {
if((state_val_29095 === (16))){
var inst_29087 = (state_29094[(2)]);
var state_29094__$1 = (function (){var statearr_29112 = state_29094;
(statearr_29112[(12)] = inst_29087);

return statearr_29112;
})();
var statearr_29113_29138 = state_29094__$1;
(statearr_29113_29138[(2)] = null);

(statearr_29113_29138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (10))){
var inst_29062 = (state_29094[(2)]);
var inst_29063 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29094__$1 = (function (){var statearr_29114 = state_29094;
(statearr_29114[(13)] = inst_29062);

return statearr_29114;
})();
var statearr_29115_29139 = state_29094__$1;
(statearr_29115_29139[(2)] = inst_29063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29094__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29095 === (8))){
var inst_29076 = (state_29094[(2)]);
var state_29094__$1 = state_29094;
var statearr_29116_29140 = state_29094__$1;
(statearr_29116_29140[(2)] = inst_29076);

(statearr_29116_29140[(1)] = (5));


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
});})(c__21535__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21473__auto__,c__21535__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29120[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29120[(1)] = (1));

return statearr_29120;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_29094){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29121){if((e29121 instanceof Object)){
var ex__21477__auto__ = e29121;
var statearr_29122_29141 = state_29094;
(statearr_29122_29141[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29142 = state_29094;
state_29094 = G__29142;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_29094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_29094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21537__auto__ = (function (){var statearr_29123 = f__21536__auto__.call(null);
(statearr_29123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29125);

return statearr_29123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29125,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__29145 = arguments.length;
switch (G__29145) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___29200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29200,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29200,out){
return (function (state_29175){
var state_val_29176 = (state_29175[(1)]);
if((state_val_29176 === (7))){
var inst_29155 = (state_29175[(7)]);
var inst_29154 = (state_29175[(8)]);
var inst_29154__$1 = (state_29175[(2)]);
var inst_29155__$1 = cljs.core.nth.call(null,inst_29154__$1,(0),null);
var inst_29156 = cljs.core.nth.call(null,inst_29154__$1,(1),null);
var inst_29157 = (inst_29155__$1 == null);
var state_29175__$1 = (function (){var statearr_29177 = state_29175;
(statearr_29177[(7)] = inst_29155__$1);

(statearr_29177[(9)] = inst_29156);

(statearr_29177[(8)] = inst_29154__$1);

return statearr_29177;
})();
if(cljs.core.truth_(inst_29157)){
var statearr_29178_29201 = state_29175__$1;
(statearr_29178_29201[(1)] = (8));

} else {
var statearr_29179_29202 = state_29175__$1;
(statearr_29179_29202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (1))){
var inst_29146 = cljs.core.vec.call(null,chs);
var inst_29147 = inst_29146;
var state_29175__$1 = (function (){var statearr_29180 = state_29175;
(statearr_29180[(10)] = inst_29147);

return statearr_29180;
})();
var statearr_29181_29203 = state_29175__$1;
(statearr_29181_29203[(2)] = null);

(statearr_29181_29203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (4))){
var inst_29147 = (state_29175[(10)]);
var state_29175__$1 = state_29175;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29175__$1,(7),inst_29147);
} else {
if((state_val_29176 === (6))){
var inst_29171 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29182_29204 = state_29175__$1;
(statearr_29182_29204[(2)] = inst_29171);

(statearr_29182_29204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (3))){
var inst_29173 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29175__$1,inst_29173);
} else {
if((state_val_29176 === (2))){
var inst_29147 = (state_29175[(10)]);
var inst_29149 = cljs.core.count.call(null,inst_29147);
var inst_29150 = (inst_29149 > (0));
var state_29175__$1 = state_29175;
if(cljs.core.truth_(inst_29150)){
var statearr_29184_29205 = state_29175__$1;
(statearr_29184_29205[(1)] = (4));

} else {
var statearr_29185_29206 = state_29175__$1;
(statearr_29185_29206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (11))){
var inst_29147 = (state_29175[(10)]);
var inst_29164 = (state_29175[(2)]);
var tmp29183 = inst_29147;
var inst_29147__$1 = tmp29183;
var state_29175__$1 = (function (){var statearr_29186 = state_29175;
(statearr_29186[(10)] = inst_29147__$1);

(statearr_29186[(11)] = inst_29164);

return statearr_29186;
})();
var statearr_29187_29207 = state_29175__$1;
(statearr_29187_29207[(2)] = null);

(statearr_29187_29207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (9))){
var inst_29155 = (state_29175[(7)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29175__$1,(11),out,inst_29155);
} else {
if((state_val_29176 === (5))){
var inst_29169 = cljs.core.async.close_BANG_.call(null,out);
var state_29175__$1 = state_29175;
var statearr_29188_29208 = state_29175__$1;
(statearr_29188_29208[(2)] = inst_29169);

(statearr_29188_29208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (10))){
var inst_29167 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29189_29209 = state_29175__$1;
(statearr_29189_29209[(2)] = inst_29167);

(statearr_29189_29209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (8))){
var inst_29155 = (state_29175[(7)]);
var inst_29147 = (state_29175[(10)]);
var inst_29156 = (state_29175[(9)]);
var inst_29154 = (state_29175[(8)]);
var inst_29159 = (function (){var c = inst_29156;
var v = inst_29155;
var vec__29152 = inst_29154;
var cs = inst_29147;
return ((function (c,v,vec__29152,cs,inst_29155,inst_29147,inst_29156,inst_29154,state_val_29176,c__21535__auto___29200,out){
return (function (p1__29143_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29143_SHARP_);
});
;})(c,v,vec__29152,cs,inst_29155,inst_29147,inst_29156,inst_29154,state_val_29176,c__21535__auto___29200,out))
})();
var inst_29160 = cljs.core.filterv.call(null,inst_29159,inst_29147);
var inst_29147__$1 = inst_29160;
var state_29175__$1 = (function (){var statearr_29190 = state_29175;
(statearr_29190[(10)] = inst_29147__$1);

return statearr_29190;
})();
var statearr_29191_29210 = state_29175__$1;
(statearr_29191_29210[(2)] = null);

(statearr_29191_29210[(1)] = (2));


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
});})(c__21535__auto___29200,out))
;
return ((function (switch__21473__auto__,c__21535__auto___29200,out){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29195 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29195[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29195[(1)] = (1));

return statearr_29195;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_29175){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29196){if((e29196 instanceof Object)){
var ex__21477__auto__ = e29196;
var statearr_29197_29211 = state_29175;
(statearr_29197_29211[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29212 = state_29175;
state_29175 = G__29212;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_29175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_29175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29200,out))
})();
var state__21537__auto__ = (function (){var statearr_29198 = f__21536__auto__.call(null);
(statearr_29198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29200);

return statearr_29198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29200,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__29214 = arguments.length;
switch (G__29214) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___29262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29262,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29262,out){
return (function (state_29238){
var state_val_29239 = (state_29238[(1)]);
if((state_val_29239 === (7))){
var inst_29220 = (state_29238[(7)]);
var inst_29220__$1 = (state_29238[(2)]);
var inst_29221 = (inst_29220__$1 == null);
var inst_29222 = cljs.core.not.call(null,inst_29221);
var state_29238__$1 = (function (){var statearr_29240 = state_29238;
(statearr_29240[(7)] = inst_29220__$1);

return statearr_29240;
})();
if(inst_29222){
var statearr_29241_29263 = state_29238__$1;
(statearr_29241_29263[(1)] = (8));

} else {
var statearr_29242_29264 = state_29238__$1;
(statearr_29242_29264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (1))){
var inst_29215 = (0);
var state_29238__$1 = (function (){var statearr_29243 = state_29238;
(statearr_29243[(8)] = inst_29215);

return statearr_29243;
})();
var statearr_29244_29265 = state_29238__$1;
(statearr_29244_29265[(2)] = null);

(statearr_29244_29265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (4))){
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29238__$1,(7),ch);
} else {
if((state_val_29239 === (6))){
var inst_29233 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29245_29266 = state_29238__$1;
(statearr_29245_29266[(2)] = inst_29233);

(statearr_29245_29266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (3))){
var inst_29235 = (state_29238[(2)]);
var inst_29236 = cljs.core.async.close_BANG_.call(null,out);
var state_29238__$1 = (function (){var statearr_29246 = state_29238;
(statearr_29246[(9)] = inst_29235);

return statearr_29246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29238__$1,inst_29236);
} else {
if((state_val_29239 === (2))){
var inst_29215 = (state_29238[(8)]);
var inst_29217 = (inst_29215 < n);
var state_29238__$1 = state_29238;
if(cljs.core.truth_(inst_29217)){
var statearr_29247_29267 = state_29238__$1;
(statearr_29247_29267[(1)] = (4));

} else {
var statearr_29248_29268 = state_29238__$1;
(statearr_29248_29268[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (11))){
var inst_29215 = (state_29238[(8)]);
var inst_29225 = (state_29238[(2)]);
var inst_29226 = (inst_29215 + (1));
var inst_29215__$1 = inst_29226;
var state_29238__$1 = (function (){var statearr_29249 = state_29238;
(statearr_29249[(10)] = inst_29225);

(statearr_29249[(8)] = inst_29215__$1);

return statearr_29249;
})();
var statearr_29250_29269 = state_29238__$1;
(statearr_29250_29269[(2)] = null);

(statearr_29250_29269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (9))){
var state_29238__$1 = state_29238;
var statearr_29251_29270 = state_29238__$1;
(statearr_29251_29270[(2)] = null);

(statearr_29251_29270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (5))){
var state_29238__$1 = state_29238;
var statearr_29252_29271 = state_29238__$1;
(statearr_29252_29271[(2)] = null);

(statearr_29252_29271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (10))){
var inst_29230 = (state_29238[(2)]);
var state_29238__$1 = state_29238;
var statearr_29253_29272 = state_29238__$1;
(statearr_29253_29272[(2)] = inst_29230);

(statearr_29253_29272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29239 === (8))){
var inst_29220 = (state_29238[(7)]);
var state_29238__$1 = state_29238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29238__$1,(11),out,inst_29220);
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
});})(c__21535__auto___29262,out))
;
return ((function (switch__21473__auto__,c__21535__auto___29262,out){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29257[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29257[(1)] = (1));

return statearr_29257;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_29238){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29258){if((e29258 instanceof Object)){
var ex__21477__auto__ = e29258;
var statearr_29259_29273 = state_29238;
(statearr_29259_29273[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_29238;
state_29238 = G__29274;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_29238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_29238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29262,out))
})();
var state__21537__auto__ = (function (){var statearr_29260 = f__21536__auto__.call(null);
(statearr_29260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29262);

return statearr_29260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29262,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29282 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29282 = (function (ch,f,map_LT_,meta29283){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29283 = meta29283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29282.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29282.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29282.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29282.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29285 = (function (fn1,_,meta29283,map_LT_,f,ch,meta29286){
this.fn1 = fn1;
this._ = _;
this.meta29283 = meta29283;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29286 = meta29286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29275_SHARP_){
return f1.call(null,(((p1__29275_SHARP_ == null))?null:self__.f.call(null,p1__29275_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29287){
var self__ = this;
var _29287__$1 = this;
return self__.meta29286;
});})(___$1))
;

cljs.core.async.t29285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29287,meta29286__$1){
var self__ = this;
var _29287__$1 = this;
return (new cljs.core.async.t29285(self__.fn1,self__._,self__.meta29283,self__.map_LT_,self__.f,self__.ch,meta29286__$1));
});})(___$1))
;

cljs.core.async.t29285.cljs$lang$type = true;

cljs.core.async.t29285.cljs$lang$ctorStr = "cljs.core.async/t29285";

cljs.core.async.t29285.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29285");
});})(___$1))
;

cljs.core.async.__GT_t29285 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29285(fn1__$1,___$2,meta29283__$1,map_LT___$1,f__$1,ch__$1,meta29286){
return (new cljs.core.async.t29285(fn1__$1,___$2,meta29283__$1,map_LT___$1,f__$1,ch__$1,meta29286));
});})(___$1))
;

}

return (new cljs.core.async.t29285(fn1,___$1,self__.meta29283,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18109__auto__ = ret;
if(cljs.core.truth_(and__18109__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18109__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29282.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29282.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29282.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29284){
var self__ = this;
var _29284__$1 = this;
return self__.meta29283;
});

cljs.core.async.t29282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29284,meta29283__$1){
var self__ = this;
var _29284__$1 = this;
return (new cljs.core.async.t29282(self__.ch,self__.f,self__.map_LT_,meta29283__$1));
});

cljs.core.async.t29282.cljs$lang$type = true;

cljs.core.async.t29282.cljs$lang$ctorStr = "cljs.core.async/t29282";

cljs.core.async.t29282.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29282");
});

cljs.core.async.__GT_t29282 = (function cljs$core$async$map_LT__$___GT_t29282(ch__$1,f__$1,map_LT___$1,meta29283){
return (new cljs.core.async.t29282(ch__$1,f__$1,map_LT___$1,meta29283));
});

}

return (new cljs.core.async.t29282(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29291 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29291 = (function (ch,f,map_GT_,meta29292){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29292 = meta29292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29293){
var self__ = this;
var _29293__$1 = this;
return self__.meta29292;
});

cljs.core.async.t29291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29293,meta29292__$1){
var self__ = this;
var _29293__$1 = this;
return (new cljs.core.async.t29291(self__.ch,self__.f,self__.map_GT_,meta29292__$1));
});

cljs.core.async.t29291.cljs$lang$type = true;

cljs.core.async.t29291.cljs$lang$ctorStr = "cljs.core.async/t29291";

cljs.core.async.t29291.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29291");
});

cljs.core.async.__GT_t29291 = (function cljs$core$async$map_GT__$___GT_t29291(ch__$1,f__$1,map_GT___$1,meta29292){
return (new cljs.core.async.t29291(ch__$1,f__$1,map_GT___$1,meta29292));
});

}

return (new cljs.core.async.t29291(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29297 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29297 = (function (ch,p,filter_GT_,meta29298){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29298 = meta29298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29297.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29297.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29297.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29299){
var self__ = this;
var _29299__$1 = this;
return self__.meta29298;
});

cljs.core.async.t29297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29299,meta29298__$1){
var self__ = this;
var _29299__$1 = this;
return (new cljs.core.async.t29297(self__.ch,self__.p,self__.filter_GT_,meta29298__$1));
});

cljs.core.async.t29297.cljs$lang$type = true;

cljs.core.async.t29297.cljs$lang$ctorStr = "cljs.core.async/t29297";

cljs.core.async.t29297.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29297");
});

cljs.core.async.__GT_t29297 = (function cljs$core$async$filter_GT__$___GT_t29297(ch__$1,p__$1,filter_GT___$1,meta29298){
return (new cljs.core.async.t29297(ch__$1,p__$1,filter_GT___$1,meta29298));
});

}

return (new cljs.core.async.t29297(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__29301 = arguments.length;
switch (G__29301) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___29344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29344,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29344,out){
return (function (state_29322){
var state_val_29323 = (state_29322[(1)]);
if((state_val_29323 === (7))){
var inst_29318 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29324_29345 = state_29322__$1;
(statearr_29324_29345[(2)] = inst_29318);

(statearr_29324_29345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (1))){
var state_29322__$1 = state_29322;
var statearr_29325_29346 = state_29322__$1;
(statearr_29325_29346[(2)] = null);

(statearr_29325_29346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (4))){
var inst_29304 = (state_29322[(7)]);
var inst_29304__$1 = (state_29322[(2)]);
var inst_29305 = (inst_29304__$1 == null);
var state_29322__$1 = (function (){var statearr_29326 = state_29322;
(statearr_29326[(7)] = inst_29304__$1);

return statearr_29326;
})();
if(cljs.core.truth_(inst_29305)){
var statearr_29327_29347 = state_29322__$1;
(statearr_29327_29347[(1)] = (5));

} else {
var statearr_29328_29348 = state_29322__$1;
(statearr_29328_29348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (6))){
var inst_29304 = (state_29322[(7)]);
var inst_29309 = p.call(null,inst_29304);
var state_29322__$1 = state_29322;
if(cljs.core.truth_(inst_29309)){
var statearr_29329_29349 = state_29322__$1;
(statearr_29329_29349[(1)] = (8));

} else {
var statearr_29330_29350 = state_29322__$1;
(statearr_29330_29350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (3))){
var inst_29320 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29322__$1,inst_29320);
} else {
if((state_val_29323 === (2))){
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29322__$1,(4),ch);
} else {
if((state_val_29323 === (11))){
var inst_29312 = (state_29322[(2)]);
var state_29322__$1 = state_29322;
var statearr_29331_29351 = state_29322__$1;
(statearr_29331_29351[(2)] = inst_29312);

(statearr_29331_29351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (9))){
var state_29322__$1 = state_29322;
var statearr_29332_29352 = state_29322__$1;
(statearr_29332_29352[(2)] = null);

(statearr_29332_29352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (5))){
var inst_29307 = cljs.core.async.close_BANG_.call(null,out);
var state_29322__$1 = state_29322;
var statearr_29333_29353 = state_29322__$1;
(statearr_29333_29353[(2)] = inst_29307);

(statearr_29333_29353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (10))){
var inst_29315 = (state_29322[(2)]);
var state_29322__$1 = (function (){var statearr_29334 = state_29322;
(statearr_29334[(8)] = inst_29315);

return statearr_29334;
})();
var statearr_29335_29354 = state_29322__$1;
(statearr_29335_29354[(2)] = null);

(statearr_29335_29354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29323 === (8))){
var inst_29304 = (state_29322[(7)]);
var state_29322__$1 = state_29322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29322__$1,(11),out,inst_29304);
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
});})(c__21535__auto___29344,out))
;
return ((function (switch__21473__auto__,c__21535__auto___29344,out){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29339 = [null,null,null,null,null,null,null,null,null];
(statearr_29339[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29339[(1)] = (1));

return statearr_29339;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_29322){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29340){if((e29340 instanceof Object)){
var ex__21477__auto__ = e29340;
var statearr_29341_29355 = state_29322;
(statearr_29341_29355[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29356 = state_29322;
state_29322 = G__29356;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_29322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_29322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29344,out))
})();
var state__21537__auto__ = (function (){var statearr_29342 = f__21536__auto__.call(null);
(statearr_29342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29344);

return statearr_29342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29344,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29358 = arguments.length;
switch (G__29358) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__21535__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto__){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto__){
return (function (state_29525){
var state_val_29526 = (state_29525[(1)]);
if((state_val_29526 === (7))){
var inst_29521 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29527_29568 = state_29525__$1;
(statearr_29527_29568[(2)] = inst_29521);

(statearr_29527_29568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (20))){
var inst_29491 = (state_29525[(7)]);
var inst_29502 = (state_29525[(2)]);
var inst_29503 = cljs.core.next.call(null,inst_29491);
var inst_29477 = inst_29503;
var inst_29478 = null;
var inst_29479 = (0);
var inst_29480 = (0);
var state_29525__$1 = (function (){var statearr_29528 = state_29525;
(statearr_29528[(8)] = inst_29479);

(statearr_29528[(9)] = inst_29502);

(statearr_29528[(10)] = inst_29477);

(statearr_29528[(11)] = inst_29478);

(statearr_29528[(12)] = inst_29480);

return statearr_29528;
})();
var statearr_29529_29569 = state_29525__$1;
(statearr_29529_29569[(2)] = null);

(statearr_29529_29569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (1))){
var state_29525__$1 = state_29525;
var statearr_29530_29570 = state_29525__$1;
(statearr_29530_29570[(2)] = null);

(statearr_29530_29570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (4))){
var inst_29466 = (state_29525[(13)]);
var inst_29466__$1 = (state_29525[(2)]);
var inst_29467 = (inst_29466__$1 == null);
var state_29525__$1 = (function (){var statearr_29531 = state_29525;
(statearr_29531[(13)] = inst_29466__$1);

return statearr_29531;
})();
if(cljs.core.truth_(inst_29467)){
var statearr_29532_29571 = state_29525__$1;
(statearr_29532_29571[(1)] = (5));

} else {
var statearr_29533_29572 = state_29525__$1;
(statearr_29533_29572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (15))){
var state_29525__$1 = state_29525;
var statearr_29537_29573 = state_29525__$1;
(statearr_29537_29573[(2)] = null);

(statearr_29537_29573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (21))){
var state_29525__$1 = state_29525;
var statearr_29538_29574 = state_29525__$1;
(statearr_29538_29574[(2)] = null);

(statearr_29538_29574[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (13))){
var inst_29479 = (state_29525[(8)]);
var inst_29477 = (state_29525[(10)]);
var inst_29478 = (state_29525[(11)]);
var inst_29480 = (state_29525[(12)]);
var inst_29487 = (state_29525[(2)]);
var inst_29488 = (inst_29480 + (1));
var tmp29534 = inst_29479;
var tmp29535 = inst_29477;
var tmp29536 = inst_29478;
var inst_29477__$1 = tmp29535;
var inst_29478__$1 = tmp29536;
var inst_29479__$1 = tmp29534;
var inst_29480__$1 = inst_29488;
var state_29525__$1 = (function (){var statearr_29539 = state_29525;
(statearr_29539[(8)] = inst_29479__$1);

(statearr_29539[(14)] = inst_29487);

(statearr_29539[(10)] = inst_29477__$1);

(statearr_29539[(11)] = inst_29478__$1);

(statearr_29539[(12)] = inst_29480__$1);

return statearr_29539;
})();
var statearr_29540_29575 = state_29525__$1;
(statearr_29540_29575[(2)] = null);

(statearr_29540_29575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (22))){
var state_29525__$1 = state_29525;
var statearr_29541_29576 = state_29525__$1;
(statearr_29541_29576[(2)] = null);

(statearr_29541_29576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (6))){
var inst_29466 = (state_29525[(13)]);
var inst_29475 = f.call(null,inst_29466);
var inst_29476 = cljs.core.seq.call(null,inst_29475);
var inst_29477 = inst_29476;
var inst_29478 = null;
var inst_29479 = (0);
var inst_29480 = (0);
var state_29525__$1 = (function (){var statearr_29542 = state_29525;
(statearr_29542[(8)] = inst_29479);

(statearr_29542[(10)] = inst_29477);

(statearr_29542[(11)] = inst_29478);

(statearr_29542[(12)] = inst_29480);

return statearr_29542;
})();
var statearr_29543_29577 = state_29525__$1;
(statearr_29543_29577[(2)] = null);

(statearr_29543_29577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (17))){
var inst_29491 = (state_29525[(7)]);
var inst_29495 = cljs.core.chunk_first.call(null,inst_29491);
var inst_29496 = cljs.core.chunk_rest.call(null,inst_29491);
var inst_29497 = cljs.core.count.call(null,inst_29495);
var inst_29477 = inst_29496;
var inst_29478 = inst_29495;
var inst_29479 = inst_29497;
var inst_29480 = (0);
var state_29525__$1 = (function (){var statearr_29544 = state_29525;
(statearr_29544[(8)] = inst_29479);

(statearr_29544[(10)] = inst_29477);

(statearr_29544[(11)] = inst_29478);

(statearr_29544[(12)] = inst_29480);

return statearr_29544;
})();
var statearr_29545_29578 = state_29525__$1;
(statearr_29545_29578[(2)] = null);

(statearr_29545_29578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (3))){
var inst_29523 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29525__$1,inst_29523);
} else {
if((state_val_29526 === (12))){
var inst_29511 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29546_29579 = state_29525__$1;
(statearr_29546_29579[(2)] = inst_29511);

(statearr_29546_29579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (2))){
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29525__$1,(4),in$);
} else {
if((state_val_29526 === (23))){
var inst_29519 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29547_29580 = state_29525__$1;
(statearr_29547_29580[(2)] = inst_29519);

(statearr_29547_29580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (19))){
var inst_29506 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29548_29581 = state_29525__$1;
(statearr_29548_29581[(2)] = inst_29506);

(statearr_29548_29581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (11))){
var inst_29491 = (state_29525[(7)]);
var inst_29477 = (state_29525[(10)]);
var inst_29491__$1 = cljs.core.seq.call(null,inst_29477);
var state_29525__$1 = (function (){var statearr_29549 = state_29525;
(statearr_29549[(7)] = inst_29491__$1);

return statearr_29549;
})();
if(inst_29491__$1){
var statearr_29550_29582 = state_29525__$1;
(statearr_29550_29582[(1)] = (14));

} else {
var statearr_29551_29583 = state_29525__$1;
(statearr_29551_29583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (9))){
var inst_29513 = (state_29525[(2)]);
var inst_29514 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29525__$1 = (function (){var statearr_29552 = state_29525;
(statearr_29552[(15)] = inst_29513);

return statearr_29552;
})();
if(cljs.core.truth_(inst_29514)){
var statearr_29553_29584 = state_29525__$1;
(statearr_29553_29584[(1)] = (21));

} else {
var statearr_29554_29585 = state_29525__$1;
(statearr_29554_29585[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (5))){
var inst_29469 = cljs.core.async.close_BANG_.call(null,out);
var state_29525__$1 = state_29525;
var statearr_29555_29586 = state_29525__$1;
(statearr_29555_29586[(2)] = inst_29469);

(statearr_29555_29586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (14))){
var inst_29491 = (state_29525[(7)]);
var inst_29493 = cljs.core.chunked_seq_QMARK_.call(null,inst_29491);
var state_29525__$1 = state_29525;
if(inst_29493){
var statearr_29556_29587 = state_29525__$1;
(statearr_29556_29587[(1)] = (17));

} else {
var statearr_29557_29588 = state_29525__$1;
(statearr_29557_29588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (16))){
var inst_29509 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29558_29589 = state_29525__$1;
(statearr_29558_29589[(2)] = inst_29509);

(statearr_29558_29589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (10))){
var inst_29478 = (state_29525[(11)]);
var inst_29480 = (state_29525[(12)]);
var inst_29485 = cljs.core._nth.call(null,inst_29478,inst_29480);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29525__$1,(13),out,inst_29485);
} else {
if((state_val_29526 === (18))){
var inst_29491 = (state_29525[(7)]);
var inst_29500 = cljs.core.first.call(null,inst_29491);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29525__$1,(20),out,inst_29500);
} else {
if((state_val_29526 === (8))){
var inst_29479 = (state_29525[(8)]);
var inst_29480 = (state_29525[(12)]);
var inst_29482 = (inst_29480 < inst_29479);
var inst_29483 = inst_29482;
var state_29525__$1 = state_29525;
if(cljs.core.truth_(inst_29483)){
var statearr_29559_29590 = state_29525__$1;
(statearr_29559_29590[(1)] = (10));

} else {
var statearr_29560_29591 = state_29525__$1;
(statearr_29560_29591[(1)] = (11));

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
});})(c__21535__auto__))
;
return ((function (switch__21473__auto__,c__21535__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21474__auto____0 = (function (){
var statearr_29564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29564[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21474__auto__);

(statearr_29564[(1)] = (1));

return statearr_29564;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21474__auto____1 = (function (state_29525){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29565){if((e29565 instanceof Object)){
var ex__21477__auto__ = e29565;
var statearr_29566_29592 = state_29525;
(statearr_29566_29592[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29593 = state_29525;
state_29525 = G__29593;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21474__auto__ = function(state_29525){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21474__auto____1.call(this,state_29525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto__))
})();
var state__21537__auto__ = (function (){var statearr_29567 = f__21536__auto__.call(null);
(statearr_29567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto__);

return statearr_29567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto__))
);

return c__21535__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29595 = arguments.length;
switch (G__29595) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__29598 = arguments.length;
switch (G__29598) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__29601 = arguments.length;
switch (G__29601) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___29651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29651,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29651,out){
return (function (state_29625){
var state_val_29626 = (state_29625[(1)]);
if((state_val_29626 === (7))){
var inst_29620 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29627_29652 = state_29625__$1;
(statearr_29627_29652[(2)] = inst_29620);

(statearr_29627_29652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29626 === (1))){
var inst_29602 = null;
var state_29625__$1 = (function (){var statearr_29628 = state_29625;
(statearr_29628[(7)] = inst_29602);

return statearr_29628;
})();
var statearr_29629_29653 = state_29625__$1;
(statearr_29629_29653[(2)] = null);

(statearr_29629_29653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29626 === (4))){
var inst_29605 = (state_29625[(8)]);
var inst_29605__$1 = (state_29625[(2)]);
var inst_29606 = (inst_29605__$1 == null);
var inst_29607 = cljs.core.not.call(null,inst_29606);
var state_29625__$1 = (function (){var statearr_29630 = state_29625;
(statearr_29630[(8)] = inst_29605__$1);

return statearr_29630;
})();
if(inst_29607){
var statearr_29631_29654 = state_29625__$1;
(statearr_29631_29654[(1)] = (5));

} else {
var statearr_29632_29655 = state_29625__$1;
(statearr_29632_29655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29626 === (6))){
var state_29625__$1 = state_29625;
var statearr_29633_29656 = state_29625__$1;
(statearr_29633_29656[(2)] = null);

(statearr_29633_29656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29626 === (3))){
var inst_29622 = (state_29625[(2)]);
var inst_29623 = cljs.core.async.close_BANG_.call(null,out);
var state_29625__$1 = (function (){var statearr_29634 = state_29625;
(statearr_29634[(9)] = inst_29622);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29625__$1,inst_29623);
} else {
if((state_val_29626 === (2))){
var state_29625__$1 = state_29625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29625__$1,(4),ch);
} else {
if((state_val_29626 === (11))){
var inst_29605 = (state_29625[(8)]);
var inst_29614 = (state_29625[(2)]);
var inst_29602 = inst_29605;
var state_29625__$1 = (function (){var statearr_29635 = state_29625;
(statearr_29635[(10)] = inst_29614);

(statearr_29635[(7)] = inst_29602);

return statearr_29635;
})();
var statearr_29636_29657 = state_29625__$1;
(statearr_29636_29657[(2)] = null);

(statearr_29636_29657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29626 === (9))){
var inst_29605 = (state_29625[(8)]);
var state_29625__$1 = state_29625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29625__$1,(11),out,inst_29605);
} else {
if((state_val_29626 === (5))){
var inst_29605 = (state_29625[(8)]);
var inst_29602 = (state_29625[(7)]);
var inst_29609 = cljs.core._EQ_.call(null,inst_29605,inst_29602);
var state_29625__$1 = state_29625;
if(inst_29609){
var statearr_29638_29658 = state_29625__$1;
(statearr_29638_29658[(1)] = (8));

} else {
var statearr_29639_29659 = state_29625__$1;
(statearr_29639_29659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29626 === (10))){
var inst_29617 = (state_29625[(2)]);
var state_29625__$1 = state_29625;
var statearr_29640_29660 = state_29625__$1;
(statearr_29640_29660[(2)] = inst_29617);

(statearr_29640_29660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29626 === (8))){
var inst_29602 = (state_29625[(7)]);
var tmp29637 = inst_29602;
var inst_29602__$1 = tmp29637;
var state_29625__$1 = (function (){var statearr_29641 = state_29625;
(statearr_29641[(7)] = inst_29602__$1);

return statearr_29641;
})();
var statearr_29642_29661 = state_29625__$1;
(statearr_29642_29661[(2)] = null);

(statearr_29642_29661[(1)] = (2));


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
});})(c__21535__auto___29651,out))
;
return ((function (switch__21473__auto__,c__21535__auto___29651,out){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29646[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29646[(1)] = (1));

return statearr_29646;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_29625){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29647){if((e29647 instanceof Object)){
var ex__21477__auto__ = e29647;
var statearr_29648_29662 = state_29625;
(statearr_29648_29662[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29663 = state_29625;
state_29625 = G__29663;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_29625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_29625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29651,out))
})();
var state__21537__auto__ = (function (){var statearr_29649 = f__21536__auto__.call(null);
(statearr_29649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29651);

return statearr_29649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29651,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29665 = arguments.length;
switch (G__29665) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___29734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29734,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29734,out){
return (function (state_29703){
var state_val_29704 = (state_29703[(1)]);
if((state_val_29704 === (7))){
var inst_29699 = (state_29703[(2)]);
var state_29703__$1 = state_29703;
var statearr_29705_29735 = state_29703__$1;
(statearr_29705_29735[(2)] = inst_29699);

(statearr_29705_29735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (1))){
var inst_29666 = (new Array(n));
var inst_29667 = inst_29666;
var inst_29668 = (0);
var state_29703__$1 = (function (){var statearr_29706 = state_29703;
(statearr_29706[(7)] = inst_29667);

(statearr_29706[(8)] = inst_29668);

return statearr_29706;
})();
var statearr_29707_29736 = state_29703__$1;
(statearr_29707_29736[(2)] = null);

(statearr_29707_29736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (4))){
var inst_29671 = (state_29703[(9)]);
var inst_29671__$1 = (state_29703[(2)]);
var inst_29672 = (inst_29671__$1 == null);
var inst_29673 = cljs.core.not.call(null,inst_29672);
var state_29703__$1 = (function (){var statearr_29708 = state_29703;
(statearr_29708[(9)] = inst_29671__$1);

return statearr_29708;
})();
if(inst_29673){
var statearr_29709_29737 = state_29703__$1;
(statearr_29709_29737[(1)] = (5));

} else {
var statearr_29710_29738 = state_29703__$1;
(statearr_29710_29738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (15))){
var inst_29693 = (state_29703[(2)]);
var state_29703__$1 = state_29703;
var statearr_29711_29739 = state_29703__$1;
(statearr_29711_29739[(2)] = inst_29693);

(statearr_29711_29739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (13))){
var state_29703__$1 = state_29703;
var statearr_29712_29740 = state_29703__$1;
(statearr_29712_29740[(2)] = null);

(statearr_29712_29740[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (6))){
var inst_29668 = (state_29703[(8)]);
var inst_29689 = (inst_29668 > (0));
var state_29703__$1 = state_29703;
if(cljs.core.truth_(inst_29689)){
var statearr_29713_29741 = state_29703__$1;
(statearr_29713_29741[(1)] = (12));

} else {
var statearr_29714_29742 = state_29703__$1;
(statearr_29714_29742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (3))){
var inst_29701 = (state_29703[(2)]);
var state_29703__$1 = state_29703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29703__$1,inst_29701);
} else {
if((state_val_29704 === (12))){
var inst_29667 = (state_29703[(7)]);
var inst_29691 = cljs.core.vec.call(null,inst_29667);
var state_29703__$1 = state_29703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29703__$1,(15),out,inst_29691);
} else {
if((state_val_29704 === (2))){
var state_29703__$1 = state_29703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29703__$1,(4),ch);
} else {
if((state_val_29704 === (11))){
var inst_29683 = (state_29703[(2)]);
var inst_29684 = (new Array(n));
var inst_29667 = inst_29684;
var inst_29668 = (0);
var state_29703__$1 = (function (){var statearr_29715 = state_29703;
(statearr_29715[(10)] = inst_29683);

(statearr_29715[(7)] = inst_29667);

(statearr_29715[(8)] = inst_29668);

return statearr_29715;
})();
var statearr_29716_29743 = state_29703__$1;
(statearr_29716_29743[(2)] = null);

(statearr_29716_29743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (9))){
var inst_29667 = (state_29703[(7)]);
var inst_29681 = cljs.core.vec.call(null,inst_29667);
var state_29703__$1 = state_29703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29703__$1,(11),out,inst_29681);
} else {
if((state_val_29704 === (5))){
var inst_29676 = (state_29703[(11)]);
var inst_29667 = (state_29703[(7)]);
var inst_29668 = (state_29703[(8)]);
var inst_29671 = (state_29703[(9)]);
var inst_29675 = (inst_29667[inst_29668] = inst_29671);
var inst_29676__$1 = (inst_29668 + (1));
var inst_29677 = (inst_29676__$1 < n);
var state_29703__$1 = (function (){var statearr_29717 = state_29703;
(statearr_29717[(11)] = inst_29676__$1);

(statearr_29717[(12)] = inst_29675);

return statearr_29717;
})();
if(cljs.core.truth_(inst_29677)){
var statearr_29718_29744 = state_29703__$1;
(statearr_29718_29744[(1)] = (8));

} else {
var statearr_29719_29745 = state_29703__$1;
(statearr_29719_29745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (14))){
var inst_29696 = (state_29703[(2)]);
var inst_29697 = cljs.core.async.close_BANG_.call(null,out);
var state_29703__$1 = (function (){var statearr_29721 = state_29703;
(statearr_29721[(13)] = inst_29696);

return statearr_29721;
})();
var statearr_29722_29746 = state_29703__$1;
(statearr_29722_29746[(2)] = inst_29697);

(statearr_29722_29746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (10))){
var inst_29687 = (state_29703[(2)]);
var state_29703__$1 = state_29703;
var statearr_29723_29747 = state_29703__$1;
(statearr_29723_29747[(2)] = inst_29687);

(statearr_29723_29747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29704 === (8))){
var inst_29676 = (state_29703[(11)]);
var inst_29667 = (state_29703[(7)]);
var tmp29720 = inst_29667;
var inst_29667__$1 = tmp29720;
var inst_29668 = inst_29676;
var state_29703__$1 = (function (){var statearr_29724 = state_29703;
(statearr_29724[(7)] = inst_29667__$1);

(statearr_29724[(8)] = inst_29668);

return statearr_29724;
})();
var statearr_29725_29748 = state_29703__$1;
(statearr_29725_29748[(2)] = null);

(statearr_29725_29748[(1)] = (2));


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
});})(c__21535__auto___29734,out))
;
return ((function (switch__21473__auto__,c__21535__auto___29734,out){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29729[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29729[(1)] = (1));

return statearr_29729;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_29703){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29730){if((e29730 instanceof Object)){
var ex__21477__auto__ = e29730;
var statearr_29731_29749 = state_29703;
(statearr_29731_29749[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29750 = state_29703;
state_29703 = G__29750;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_29703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_29703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29734,out))
})();
var state__21537__auto__ = (function (){var statearr_29732 = f__21536__auto__.call(null);
(statearr_29732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29734);

return statearr_29732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29734,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29752 = arguments.length;
switch (G__29752) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21535__auto___29825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21535__auto___29825,out){
return (function (){
var f__21536__auto__ = (function (){var switch__21473__auto__ = ((function (c__21535__auto___29825,out){
return (function (state_29794){
var state_val_29795 = (state_29794[(1)]);
if((state_val_29795 === (7))){
var inst_29790 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29796_29826 = state_29794__$1;
(statearr_29796_29826[(2)] = inst_29790);

(statearr_29796_29826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (1))){
var inst_29753 = [];
var inst_29754 = inst_29753;
var inst_29755 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29794__$1 = (function (){var statearr_29797 = state_29794;
(statearr_29797[(7)] = inst_29755);

(statearr_29797[(8)] = inst_29754);

return statearr_29797;
})();
var statearr_29798_29827 = state_29794__$1;
(statearr_29798_29827[(2)] = null);

(statearr_29798_29827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (4))){
var inst_29758 = (state_29794[(9)]);
var inst_29758__$1 = (state_29794[(2)]);
var inst_29759 = (inst_29758__$1 == null);
var inst_29760 = cljs.core.not.call(null,inst_29759);
var state_29794__$1 = (function (){var statearr_29799 = state_29794;
(statearr_29799[(9)] = inst_29758__$1);

return statearr_29799;
})();
if(inst_29760){
var statearr_29800_29828 = state_29794__$1;
(statearr_29800_29828[(1)] = (5));

} else {
var statearr_29801_29829 = state_29794__$1;
(statearr_29801_29829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (15))){
var inst_29784 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29802_29830 = state_29794__$1;
(statearr_29802_29830[(2)] = inst_29784);

(statearr_29802_29830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (13))){
var state_29794__$1 = state_29794;
var statearr_29803_29831 = state_29794__$1;
(statearr_29803_29831[(2)] = null);

(statearr_29803_29831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (6))){
var inst_29754 = (state_29794[(8)]);
var inst_29779 = inst_29754.length;
var inst_29780 = (inst_29779 > (0));
var state_29794__$1 = state_29794;
if(cljs.core.truth_(inst_29780)){
var statearr_29804_29832 = state_29794__$1;
(statearr_29804_29832[(1)] = (12));

} else {
var statearr_29805_29833 = state_29794__$1;
(statearr_29805_29833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (3))){
var inst_29792 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29794__$1,inst_29792);
} else {
if((state_val_29795 === (12))){
var inst_29754 = (state_29794[(8)]);
var inst_29782 = cljs.core.vec.call(null,inst_29754);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29794__$1,(15),out,inst_29782);
} else {
if((state_val_29795 === (2))){
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29794__$1,(4),ch);
} else {
if((state_val_29795 === (11))){
var inst_29762 = (state_29794[(10)]);
var inst_29758 = (state_29794[(9)]);
var inst_29772 = (state_29794[(2)]);
var inst_29773 = [];
var inst_29774 = inst_29773.push(inst_29758);
var inst_29754 = inst_29773;
var inst_29755 = inst_29762;
var state_29794__$1 = (function (){var statearr_29806 = state_29794;
(statearr_29806[(7)] = inst_29755);

(statearr_29806[(11)] = inst_29772);

(statearr_29806[(12)] = inst_29774);

(statearr_29806[(8)] = inst_29754);

return statearr_29806;
})();
var statearr_29807_29834 = state_29794__$1;
(statearr_29807_29834[(2)] = null);

(statearr_29807_29834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (9))){
var inst_29754 = (state_29794[(8)]);
var inst_29770 = cljs.core.vec.call(null,inst_29754);
var state_29794__$1 = state_29794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29794__$1,(11),out,inst_29770);
} else {
if((state_val_29795 === (5))){
var inst_29755 = (state_29794[(7)]);
var inst_29762 = (state_29794[(10)]);
var inst_29758 = (state_29794[(9)]);
var inst_29762__$1 = f.call(null,inst_29758);
var inst_29763 = cljs.core._EQ_.call(null,inst_29762__$1,inst_29755);
var inst_29764 = cljs.core.keyword_identical_QMARK_.call(null,inst_29755,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29765 = (inst_29763) || (inst_29764);
var state_29794__$1 = (function (){var statearr_29808 = state_29794;
(statearr_29808[(10)] = inst_29762__$1);

return statearr_29808;
})();
if(cljs.core.truth_(inst_29765)){
var statearr_29809_29835 = state_29794__$1;
(statearr_29809_29835[(1)] = (8));

} else {
var statearr_29810_29836 = state_29794__$1;
(statearr_29810_29836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (14))){
var inst_29787 = (state_29794[(2)]);
var inst_29788 = cljs.core.async.close_BANG_.call(null,out);
var state_29794__$1 = (function (){var statearr_29812 = state_29794;
(statearr_29812[(13)] = inst_29787);

return statearr_29812;
})();
var statearr_29813_29837 = state_29794__$1;
(statearr_29813_29837[(2)] = inst_29788);

(statearr_29813_29837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (10))){
var inst_29777 = (state_29794[(2)]);
var state_29794__$1 = state_29794;
var statearr_29814_29838 = state_29794__$1;
(statearr_29814_29838[(2)] = inst_29777);

(statearr_29814_29838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29795 === (8))){
var inst_29762 = (state_29794[(10)]);
var inst_29758 = (state_29794[(9)]);
var inst_29754 = (state_29794[(8)]);
var inst_29767 = inst_29754.push(inst_29758);
var tmp29811 = inst_29754;
var inst_29754__$1 = tmp29811;
var inst_29755 = inst_29762;
var state_29794__$1 = (function (){var statearr_29815 = state_29794;
(statearr_29815[(7)] = inst_29755);

(statearr_29815[(14)] = inst_29767);

(statearr_29815[(8)] = inst_29754__$1);

return statearr_29815;
})();
var statearr_29816_29839 = state_29794__$1;
(statearr_29816_29839[(2)] = null);

(statearr_29816_29839[(1)] = (2));


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
});})(c__21535__auto___29825,out))
;
return ((function (switch__21473__auto__,c__21535__auto___29825,out){
return (function() {
var cljs$core$async$state_machine__21474__auto__ = null;
var cljs$core$async$state_machine__21474__auto____0 = (function (){
var statearr_29820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29820[(0)] = cljs$core$async$state_machine__21474__auto__);

(statearr_29820[(1)] = (1));

return statearr_29820;
});
var cljs$core$async$state_machine__21474__auto____1 = (function (state_29794){
while(true){
var ret_value__21475__auto__ = (function (){try{while(true){
var result__21476__auto__ = switch__21473__auto__.call(null,state_29794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21476__auto__;
}
break;
}
}catch (e29821){if((e29821 instanceof Object)){
var ex__21477__auto__ = e29821;
var statearr_29822_29840 = state_29794;
(statearr_29822_29840[(5)] = ex__21477__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29841 = state_29794;
state_29794 = G__29841;
continue;
} else {
return ret_value__21475__auto__;
}
break;
}
});
cljs$core$async$state_machine__21474__auto__ = function(state_29794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21474__auto____1.call(this,state_29794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21474__auto____0;
cljs$core$async$state_machine__21474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21474__auto____1;
return cljs$core$async$state_machine__21474__auto__;
})()
;})(switch__21473__auto__,c__21535__auto___29825,out))
})();
var state__21537__auto__ = (function (){var statearr_29823 = f__21536__auto__.call(null);
(statearr_29823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21535__auto___29825);

return statearr_29823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21537__auto__);
});})(c__21535__auto___29825,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440626244568