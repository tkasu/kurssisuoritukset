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
if(typeof cljs.core.async.t27345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27345 = (function (f,fn_handler,meta27346){
this.f = f;
this.fn_handler = fn_handler;
this.meta27346 = meta27346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27347){
var self__ = this;
var _27347__$1 = this;
return self__.meta27346;
});

cljs.core.async.t27345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27347,meta27346__$1){
var self__ = this;
var _27347__$1 = this;
return (new cljs.core.async.t27345(self__.f,self__.fn_handler,meta27346__$1));
});

cljs.core.async.t27345.cljs$lang$type = true;

cljs.core.async.t27345.cljs$lang$ctorStr = "cljs.core.async/t27345";

cljs.core.async.t27345.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27345");
});

cljs.core.async.__GT_t27345 = (function cljs$core$async$fn_handler_$___GT_t27345(f__$1,fn_handler__$1,meta27346){
return (new cljs.core.async.t27345(f__$1,fn_handler__$1,meta27346));
});

}

return (new cljs.core.async.t27345(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27349 = buff;
if(G__27349){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__27349.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27349.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27349);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27349);
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
var G__27351 = arguments.length;
switch (G__27351) {
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
var G__27354 = arguments.length;
switch (G__27354) {
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
var val_27356 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27356);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27356,ret){
return (function (){
return fn1.call(null,val_27356);
});})(val_27356,ret))
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
var G__27358 = arguments.length;
switch (G__27358) {
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
var n__19006__auto___27360 = n;
var x_27361 = (0);
while(true){
if((x_27361 < n__19006__auto___27360)){
(a[x_27361] = (0));

var G__27362 = (x_27361 + (1));
x_27361 = G__27362;
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

var G__27363 = (i + (1));
i = G__27363;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27367 = (function (flag,alt_flag,meta27368){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27368 = meta27368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27367.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27369){
var self__ = this;
var _27369__$1 = this;
return self__.meta27368;
});})(flag))
;

cljs.core.async.t27367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27369,meta27368__$1){
var self__ = this;
var _27369__$1 = this;
return (new cljs.core.async.t27367(self__.flag,self__.alt_flag,meta27368__$1));
});})(flag))
;

cljs.core.async.t27367.cljs$lang$type = true;

cljs.core.async.t27367.cljs$lang$ctorStr = "cljs.core.async/t27367";

cljs.core.async.t27367.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27367");
});})(flag))
;

cljs.core.async.__GT_t27367 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27367(flag__$1,alt_flag__$1,meta27368){
return (new cljs.core.async.t27367(flag__$1,alt_flag__$1,meta27368));
});})(flag))
;

}

return (new cljs.core.async.t27367(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27373 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27373 = (function (cb,flag,alt_handler,meta27374){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27374 = meta27374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27373.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27375){
var self__ = this;
var _27375__$1 = this;
return self__.meta27374;
});

cljs.core.async.t27373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27375,meta27374__$1){
var self__ = this;
var _27375__$1 = this;
return (new cljs.core.async.t27373(self__.cb,self__.flag,self__.alt_handler,meta27374__$1));
});

cljs.core.async.t27373.cljs$lang$type = true;

cljs.core.async.t27373.cljs$lang$ctorStr = "cljs.core.async/t27373";

cljs.core.async.t27373.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27373");
});

cljs.core.async.__GT_t27373 = (function cljs$core$async$alt_handler_$___GT_t27373(cb__$1,flag__$1,alt_handler__$1,meta27374){
return (new cljs.core.async.t27373(cb__$1,flag__$1,alt_handler__$1,meta27374));
});

}

return (new cljs.core.async.t27373(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27376_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27376_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27377_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27377_SHARP_,port], null));
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
var G__27378 = (i + (1));
i = G__27378;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27381){
var map__27382 = p__27381;
var map__27382__$1 = ((cljs.core.seq_QMARK_.call(null,map__27382))?cljs.core.apply.call(null,cljs.core.hash_map,map__27382):map__27382);
var opts = map__27382__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27379){
var G__27380 = cljs.core.first.call(null,seq27379);
var seq27379__$1 = cljs.core.next.call(null,seq27379);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27380,seq27379__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27384 = arguments.length;
switch (G__27384) {
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
var c__21529__auto___27433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___27433){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___27433){
return (function (state_27408){
var state_val_27409 = (state_27408[(1)]);
if((state_val_27409 === (7))){
var inst_27404 = (state_27408[(2)]);
var state_27408__$1 = state_27408;
var statearr_27410_27434 = state_27408__$1;
(statearr_27410_27434[(2)] = inst_27404);

(statearr_27410_27434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (1))){
var state_27408__$1 = state_27408;
var statearr_27411_27435 = state_27408__$1;
(statearr_27411_27435[(2)] = null);

(statearr_27411_27435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (4))){
var inst_27387 = (state_27408[(7)]);
var inst_27387__$1 = (state_27408[(2)]);
var inst_27388 = (inst_27387__$1 == null);
var state_27408__$1 = (function (){var statearr_27412 = state_27408;
(statearr_27412[(7)] = inst_27387__$1);

return statearr_27412;
})();
if(cljs.core.truth_(inst_27388)){
var statearr_27413_27436 = state_27408__$1;
(statearr_27413_27436[(1)] = (5));

} else {
var statearr_27414_27437 = state_27408__$1;
(statearr_27414_27437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (13))){
var state_27408__$1 = state_27408;
var statearr_27415_27438 = state_27408__$1;
(statearr_27415_27438[(2)] = null);

(statearr_27415_27438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (6))){
var inst_27387 = (state_27408[(7)]);
var state_27408__$1 = state_27408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27408__$1,(11),to,inst_27387);
} else {
if((state_val_27409 === (3))){
var inst_27406 = (state_27408[(2)]);
var state_27408__$1 = state_27408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27408__$1,inst_27406);
} else {
if((state_val_27409 === (12))){
var state_27408__$1 = state_27408;
var statearr_27416_27439 = state_27408__$1;
(statearr_27416_27439[(2)] = null);

(statearr_27416_27439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (2))){
var state_27408__$1 = state_27408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27408__$1,(4),from);
} else {
if((state_val_27409 === (11))){
var inst_27397 = (state_27408[(2)]);
var state_27408__$1 = state_27408;
if(cljs.core.truth_(inst_27397)){
var statearr_27417_27440 = state_27408__$1;
(statearr_27417_27440[(1)] = (12));

} else {
var statearr_27418_27441 = state_27408__$1;
(statearr_27418_27441[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (9))){
var state_27408__$1 = state_27408;
var statearr_27419_27442 = state_27408__$1;
(statearr_27419_27442[(2)] = null);

(statearr_27419_27442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (5))){
var state_27408__$1 = state_27408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27420_27443 = state_27408__$1;
(statearr_27420_27443[(1)] = (8));

} else {
var statearr_27421_27444 = state_27408__$1;
(statearr_27421_27444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (14))){
var inst_27402 = (state_27408[(2)]);
var state_27408__$1 = state_27408;
var statearr_27422_27445 = state_27408__$1;
(statearr_27422_27445[(2)] = inst_27402);

(statearr_27422_27445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (10))){
var inst_27394 = (state_27408[(2)]);
var state_27408__$1 = state_27408;
var statearr_27423_27446 = state_27408__$1;
(statearr_27423_27446[(2)] = inst_27394);

(statearr_27423_27446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27409 === (8))){
var inst_27391 = cljs.core.async.close_BANG_.call(null,to);
var state_27408__$1 = state_27408;
var statearr_27424_27447 = state_27408__$1;
(statearr_27424_27447[(2)] = inst_27391);

(statearr_27424_27447[(1)] = (10));


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
});})(c__21529__auto___27433))
;
return ((function (switch__21467__auto__,c__21529__auto___27433){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_27428 = [null,null,null,null,null,null,null,null];
(statearr_27428[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_27428[(1)] = (1));

return statearr_27428;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_27408){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27429){if((e27429 instanceof Object)){
var ex__21471__auto__ = e27429;
var statearr_27430_27448 = state_27408;
(statearr_27430_27448[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27449 = state_27408;
state_27408 = G__27449;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_27408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_27408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___27433))
})();
var state__21531__auto__ = (function (){var statearr_27431 = f__21530__auto__.call(null);
(statearr_27431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___27433);

return statearr_27431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___27433))
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
return (function (p__27633){
var vec__27634 = p__27633;
var v = cljs.core.nth.call(null,vec__27634,(0),null);
var p = cljs.core.nth.call(null,vec__27634,(1),null);
var job = vec__27634;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21529__auto___27816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___27816,res,vec__27634,v,p,job,jobs,results){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___27816,res,vec__27634,v,p,job,jobs,results){
return (function (state_27639){
var state_val_27640 = (state_27639[(1)]);
if((state_val_27640 === (2))){
var inst_27636 = (state_27639[(2)]);
var inst_27637 = cljs.core.async.close_BANG_.call(null,res);
var state_27639__$1 = (function (){var statearr_27641 = state_27639;
(statearr_27641[(7)] = inst_27636);

return statearr_27641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27639__$1,inst_27637);
} else {
if((state_val_27640 === (1))){
var state_27639__$1 = state_27639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27639__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21529__auto___27816,res,vec__27634,v,p,job,jobs,results))
;
return ((function (switch__21467__auto__,c__21529__auto___27816,res,vec__27634,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0 = (function (){
var statearr_27645 = [null,null,null,null,null,null,null,null];
(statearr_27645[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__);

(statearr_27645[(1)] = (1));

return statearr_27645;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1 = (function (state_27639){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27646){if((e27646 instanceof Object)){
var ex__21471__auto__ = e27646;
var statearr_27647_27817 = state_27639;
(statearr_27647_27817[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27818 = state_27639;
state_27639 = G__27818;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = function(state_27639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1.call(this,state_27639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___27816,res,vec__27634,v,p,job,jobs,results))
})();
var state__21531__auto__ = (function (){var statearr_27648 = f__21530__auto__.call(null);
(statearr_27648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___27816);

return statearr_27648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___27816,res,vec__27634,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27649){
var vec__27650 = p__27649;
var v = cljs.core.nth.call(null,vec__27650,(0),null);
var p = cljs.core.nth.call(null,vec__27650,(1),null);
var job = vec__27650;
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
var n__19006__auto___27819 = n;
var __27820 = (0);
while(true){
if((__27820 < n__19006__auto___27819)){
var G__27651_27821 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27651_27821) {
case "async":
var c__21529__auto___27823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27820,c__21529__auto___27823,G__27651_27821,n__19006__auto___27819,jobs,results,process,async){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (__27820,c__21529__auto___27823,G__27651_27821,n__19006__auto___27819,jobs,results,process,async){
return (function (state_27664){
var state_val_27665 = (state_27664[(1)]);
if((state_val_27665 === (7))){
var inst_27660 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
var statearr_27666_27824 = state_27664__$1;
(statearr_27666_27824[(2)] = inst_27660);

(statearr_27666_27824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (6))){
var state_27664__$1 = state_27664;
var statearr_27667_27825 = state_27664__$1;
(statearr_27667_27825[(2)] = null);

(statearr_27667_27825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (5))){
var state_27664__$1 = state_27664;
var statearr_27668_27826 = state_27664__$1;
(statearr_27668_27826[(2)] = null);

(statearr_27668_27826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (4))){
var inst_27654 = (state_27664[(2)]);
var inst_27655 = async.call(null,inst_27654);
var state_27664__$1 = state_27664;
if(cljs.core.truth_(inst_27655)){
var statearr_27669_27827 = state_27664__$1;
(statearr_27669_27827[(1)] = (5));

} else {
var statearr_27670_27828 = state_27664__$1;
(statearr_27670_27828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27665 === (3))){
var inst_27662 = (state_27664[(2)]);
var state_27664__$1 = state_27664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27664__$1,inst_27662);
} else {
if((state_val_27665 === (2))){
var state_27664__$1 = state_27664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27664__$1,(4),jobs);
} else {
if((state_val_27665 === (1))){
var state_27664__$1 = state_27664;
var statearr_27671_27829 = state_27664__$1;
(statearr_27671_27829[(2)] = null);

(statearr_27671_27829[(1)] = (2));


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
});})(__27820,c__21529__auto___27823,G__27651_27821,n__19006__auto___27819,jobs,results,process,async))
;
return ((function (__27820,switch__21467__auto__,c__21529__auto___27823,G__27651_27821,n__19006__auto___27819,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0 = (function (){
var statearr_27675 = [null,null,null,null,null,null,null];
(statearr_27675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__);

(statearr_27675[(1)] = (1));

return statearr_27675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1 = (function (state_27664){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27676){if((e27676 instanceof Object)){
var ex__21471__auto__ = e27676;
var statearr_27677_27830 = state_27664;
(statearr_27677_27830[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27831 = state_27664;
state_27664 = G__27831;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = function(state_27664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1.call(this,state_27664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__;
})()
;})(__27820,switch__21467__auto__,c__21529__auto___27823,G__27651_27821,n__19006__auto___27819,jobs,results,process,async))
})();
var state__21531__auto__ = (function (){var statearr_27678 = f__21530__auto__.call(null);
(statearr_27678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___27823);

return statearr_27678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(__27820,c__21529__auto___27823,G__27651_27821,n__19006__auto___27819,jobs,results,process,async))
);


break;
case "compute":
var c__21529__auto___27832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27820,c__21529__auto___27832,G__27651_27821,n__19006__auto___27819,jobs,results,process,async){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (__27820,c__21529__auto___27832,G__27651_27821,n__19006__auto___27819,jobs,results,process,async){
return (function (state_27691){
var state_val_27692 = (state_27691[(1)]);
if((state_val_27692 === (7))){
var inst_27687 = (state_27691[(2)]);
var state_27691__$1 = state_27691;
var statearr_27693_27833 = state_27691__$1;
(statearr_27693_27833[(2)] = inst_27687);

(statearr_27693_27833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (6))){
var state_27691__$1 = state_27691;
var statearr_27694_27834 = state_27691__$1;
(statearr_27694_27834[(2)] = null);

(statearr_27694_27834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (5))){
var state_27691__$1 = state_27691;
var statearr_27695_27835 = state_27691__$1;
(statearr_27695_27835[(2)] = null);

(statearr_27695_27835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (4))){
var inst_27681 = (state_27691[(2)]);
var inst_27682 = process.call(null,inst_27681);
var state_27691__$1 = state_27691;
if(cljs.core.truth_(inst_27682)){
var statearr_27696_27836 = state_27691__$1;
(statearr_27696_27836[(1)] = (5));

} else {
var statearr_27697_27837 = state_27691__$1;
(statearr_27697_27837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27692 === (3))){
var inst_27689 = (state_27691[(2)]);
var state_27691__$1 = state_27691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27691__$1,inst_27689);
} else {
if((state_val_27692 === (2))){
var state_27691__$1 = state_27691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27691__$1,(4),jobs);
} else {
if((state_val_27692 === (1))){
var state_27691__$1 = state_27691;
var statearr_27698_27838 = state_27691__$1;
(statearr_27698_27838[(2)] = null);

(statearr_27698_27838[(1)] = (2));


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
});})(__27820,c__21529__auto___27832,G__27651_27821,n__19006__auto___27819,jobs,results,process,async))
;
return ((function (__27820,switch__21467__auto__,c__21529__auto___27832,G__27651_27821,n__19006__auto___27819,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0 = (function (){
var statearr_27702 = [null,null,null,null,null,null,null];
(statearr_27702[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__);

(statearr_27702[(1)] = (1));

return statearr_27702;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1 = (function (state_27691){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27703){if((e27703 instanceof Object)){
var ex__21471__auto__ = e27703;
var statearr_27704_27839 = state_27691;
(statearr_27704_27839[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27840 = state_27691;
state_27691 = G__27840;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = function(state_27691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1.call(this,state_27691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__;
})()
;})(__27820,switch__21467__auto__,c__21529__auto___27832,G__27651_27821,n__19006__auto___27819,jobs,results,process,async))
})();
var state__21531__auto__ = (function (){var statearr_27705 = f__21530__auto__.call(null);
(statearr_27705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___27832);

return statearr_27705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(__27820,c__21529__auto___27832,G__27651_27821,n__19006__auto___27819,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27841 = (__27820 + (1));
__27820 = G__27841;
continue;
} else {
}
break;
}

var c__21529__auto___27842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___27842,jobs,results,process,async){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___27842,jobs,results,process,async){
return (function (state_27727){
var state_val_27728 = (state_27727[(1)]);
if((state_val_27728 === (9))){
var inst_27720 = (state_27727[(2)]);
var state_27727__$1 = (function (){var statearr_27729 = state_27727;
(statearr_27729[(7)] = inst_27720);

return statearr_27729;
})();
var statearr_27730_27843 = state_27727__$1;
(statearr_27730_27843[(2)] = null);

(statearr_27730_27843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (8))){
var inst_27713 = (state_27727[(8)]);
var inst_27718 = (state_27727[(2)]);
var state_27727__$1 = (function (){var statearr_27731 = state_27727;
(statearr_27731[(9)] = inst_27718);

return statearr_27731;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27727__$1,(9),results,inst_27713);
} else {
if((state_val_27728 === (7))){
var inst_27723 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
var statearr_27732_27844 = state_27727__$1;
(statearr_27732_27844[(2)] = inst_27723);

(statearr_27732_27844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (6))){
var inst_27713 = (state_27727[(8)]);
var inst_27708 = (state_27727[(10)]);
var inst_27713__$1 = cljs.core.async.chan.call(null,(1));
var inst_27714 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27715 = [inst_27708,inst_27713__$1];
var inst_27716 = (new cljs.core.PersistentVector(null,2,(5),inst_27714,inst_27715,null));
var state_27727__$1 = (function (){var statearr_27733 = state_27727;
(statearr_27733[(8)] = inst_27713__$1);

return statearr_27733;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27727__$1,(8),jobs,inst_27716);
} else {
if((state_val_27728 === (5))){
var inst_27711 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27727__$1 = state_27727;
var statearr_27734_27845 = state_27727__$1;
(statearr_27734_27845[(2)] = inst_27711);

(statearr_27734_27845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (4))){
var inst_27708 = (state_27727[(10)]);
var inst_27708__$1 = (state_27727[(2)]);
var inst_27709 = (inst_27708__$1 == null);
var state_27727__$1 = (function (){var statearr_27735 = state_27727;
(statearr_27735[(10)] = inst_27708__$1);

return statearr_27735;
})();
if(cljs.core.truth_(inst_27709)){
var statearr_27736_27846 = state_27727__$1;
(statearr_27736_27846[(1)] = (5));

} else {
var statearr_27737_27847 = state_27727__$1;
(statearr_27737_27847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27728 === (3))){
var inst_27725 = (state_27727[(2)]);
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27727__$1,inst_27725);
} else {
if((state_val_27728 === (2))){
var state_27727__$1 = state_27727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27727__$1,(4),from);
} else {
if((state_val_27728 === (1))){
var state_27727__$1 = state_27727;
var statearr_27738_27848 = state_27727__$1;
(statearr_27738_27848[(2)] = null);

(statearr_27738_27848[(1)] = (2));


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
});})(c__21529__auto___27842,jobs,results,process,async))
;
return ((function (switch__21467__auto__,c__21529__auto___27842,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0 = (function (){
var statearr_27742 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27742[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__);

(statearr_27742[(1)] = (1));

return statearr_27742;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1 = (function (state_27727){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27743){if((e27743 instanceof Object)){
var ex__21471__auto__ = e27743;
var statearr_27744_27849 = state_27727;
(statearr_27744_27849[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27850 = state_27727;
state_27727 = G__27850;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = function(state_27727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1.call(this,state_27727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___27842,jobs,results,process,async))
})();
var state__21531__auto__ = (function (){var statearr_27745 = f__21530__auto__.call(null);
(statearr_27745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___27842);

return statearr_27745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___27842,jobs,results,process,async))
);


var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__,jobs,results,process,async){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__,jobs,results,process,async){
return (function (state_27783){
var state_val_27784 = (state_27783[(1)]);
if((state_val_27784 === (7))){
var inst_27779 = (state_27783[(2)]);
var state_27783__$1 = state_27783;
var statearr_27785_27851 = state_27783__$1;
(statearr_27785_27851[(2)] = inst_27779);

(statearr_27785_27851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (20))){
var state_27783__$1 = state_27783;
var statearr_27786_27852 = state_27783__$1;
(statearr_27786_27852[(2)] = null);

(statearr_27786_27852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (1))){
var state_27783__$1 = state_27783;
var statearr_27787_27853 = state_27783__$1;
(statearr_27787_27853[(2)] = null);

(statearr_27787_27853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (4))){
var inst_27748 = (state_27783[(7)]);
var inst_27748__$1 = (state_27783[(2)]);
var inst_27749 = (inst_27748__$1 == null);
var state_27783__$1 = (function (){var statearr_27788 = state_27783;
(statearr_27788[(7)] = inst_27748__$1);

return statearr_27788;
})();
if(cljs.core.truth_(inst_27749)){
var statearr_27789_27854 = state_27783__$1;
(statearr_27789_27854[(1)] = (5));

} else {
var statearr_27790_27855 = state_27783__$1;
(statearr_27790_27855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (15))){
var inst_27761 = (state_27783[(8)]);
var state_27783__$1 = state_27783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27783__$1,(18),to,inst_27761);
} else {
if((state_val_27784 === (21))){
var inst_27774 = (state_27783[(2)]);
var state_27783__$1 = state_27783;
var statearr_27791_27856 = state_27783__$1;
(statearr_27791_27856[(2)] = inst_27774);

(statearr_27791_27856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (13))){
var inst_27776 = (state_27783[(2)]);
var state_27783__$1 = (function (){var statearr_27792 = state_27783;
(statearr_27792[(9)] = inst_27776);

return statearr_27792;
})();
var statearr_27793_27857 = state_27783__$1;
(statearr_27793_27857[(2)] = null);

(statearr_27793_27857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (6))){
var inst_27748 = (state_27783[(7)]);
var state_27783__$1 = state_27783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27783__$1,(11),inst_27748);
} else {
if((state_val_27784 === (17))){
var inst_27769 = (state_27783[(2)]);
var state_27783__$1 = state_27783;
if(cljs.core.truth_(inst_27769)){
var statearr_27794_27858 = state_27783__$1;
(statearr_27794_27858[(1)] = (19));

} else {
var statearr_27795_27859 = state_27783__$1;
(statearr_27795_27859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (3))){
var inst_27781 = (state_27783[(2)]);
var state_27783__$1 = state_27783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27783__$1,inst_27781);
} else {
if((state_val_27784 === (12))){
var inst_27758 = (state_27783[(10)]);
var state_27783__$1 = state_27783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27783__$1,(14),inst_27758);
} else {
if((state_val_27784 === (2))){
var state_27783__$1 = state_27783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27783__$1,(4),results);
} else {
if((state_val_27784 === (19))){
var state_27783__$1 = state_27783;
var statearr_27796_27860 = state_27783__$1;
(statearr_27796_27860[(2)] = null);

(statearr_27796_27860[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (11))){
var inst_27758 = (state_27783[(2)]);
var state_27783__$1 = (function (){var statearr_27797 = state_27783;
(statearr_27797[(10)] = inst_27758);

return statearr_27797;
})();
var statearr_27798_27861 = state_27783__$1;
(statearr_27798_27861[(2)] = null);

(statearr_27798_27861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (9))){
var state_27783__$1 = state_27783;
var statearr_27799_27862 = state_27783__$1;
(statearr_27799_27862[(2)] = null);

(statearr_27799_27862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (5))){
var state_27783__$1 = state_27783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27800_27863 = state_27783__$1;
(statearr_27800_27863[(1)] = (8));

} else {
var statearr_27801_27864 = state_27783__$1;
(statearr_27801_27864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (14))){
var inst_27761 = (state_27783[(8)]);
var inst_27763 = (state_27783[(11)]);
var inst_27761__$1 = (state_27783[(2)]);
var inst_27762 = (inst_27761__$1 == null);
var inst_27763__$1 = cljs.core.not.call(null,inst_27762);
var state_27783__$1 = (function (){var statearr_27802 = state_27783;
(statearr_27802[(8)] = inst_27761__$1);

(statearr_27802[(11)] = inst_27763__$1);

return statearr_27802;
})();
if(inst_27763__$1){
var statearr_27803_27865 = state_27783__$1;
(statearr_27803_27865[(1)] = (15));

} else {
var statearr_27804_27866 = state_27783__$1;
(statearr_27804_27866[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (16))){
var inst_27763 = (state_27783[(11)]);
var state_27783__$1 = state_27783;
var statearr_27805_27867 = state_27783__$1;
(statearr_27805_27867[(2)] = inst_27763);

(statearr_27805_27867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (10))){
var inst_27755 = (state_27783[(2)]);
var state_27783__$1 = state_27783;
var statearr_27806_27868 = state_27783__$1;
(statearr_27806_27868[(2)] = inst_27755);

(statearr_27806_27868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (18))){
var inst_27766 = (state_27783[(2)]);
var state_27783__$1 = state_27783;
var statearr_27807_27869 = state_27783__$1;
(statearr_27807_27869[(2)] = inst_27766);

(statearr_27807_27869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27784 === (8))){
var inst_27752 = cljs.core.async.close_BANG_.call(null,to);
var state_27783__$1 = state_27783;
var statearr_27808_27870 = state_27783__$1;
(statearr_27808_27870[(2)] = inst_27752);

(statearr_27808_27870[(1)] = (10));


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
});})(c__21529__auto__,jobs,results,process,async))
;
return ((function (switch__21467__auto__,c__21529__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0 = (function (){
var statearr_27812 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27812[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__);

(statearr_27812[(1)] = (1));

return statearr_27812;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1 = (function (state_27783){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27813){if((e27813 instanceof Object)){
var ex__21471__auto__ = e27813;
var statearr_27814_27871 = state_27783;
(statearr_27814_27871[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27872 = state_27783;
state_27783 = G__27872;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__ = function(state_27783){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1.call(this,state_27783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21468__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__,jobs,results,process,async))
})();
var state__21531__auto__ = (function (){var statearr_27815 = f__21530__auto__.call(null);
(statearr_27815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_27815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__,jobs,results,process,async))
);

return c__21529__auto__;
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
var G__27874 = arguments.length;
switch (G__27874) {
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
var G__27877 = arguments.length;
switch (G__27877) {
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
var G__27880 = arguments.length;
switch (G__27880) {
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
var c__21529__auto___27932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___27932,tc,fc){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___27932,tc,fc){
return (function (state_27906){
var state_val_27907 = (state_27906[(1)]);
if((state_val_27907 === (7))){
var inst_27902 = (state_27906[(2)]);
var state_27906__$1 = state_27906;
var statearr_27908_27933 = state_27906__$1;
(statearr_27908_27933[(2)] = inst_27902);

(statearr_27908_27933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (1))){
var state_27906__$1 = state_27906;
var statearr_27909_27934 = state_27906__$1;
(statearr_27909_27934[(2)] = null);

(statearr_27909_27934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (4))){
var inst_27883 = (state_27906[(7)]);
var inst_27883__$1 = (state_27906[(2)]);
var inst_27884 = (inst_27883__$1 == null);
var state_27906__$1 = (function (){var statearr_27910 = state_27906;
(statearr_27910[(7)] = inst_27883__$1);

return statearr_27910;
})();
if(cljs.core.truth_(inst_27884)){
var statearr_27911_27935 = state_27906__$1;
(statearr_27911_27935[(1)] = (5));

} else {
var statearr_27912_27936 = state_27906__$1;
(statearr_27912_27936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (13))){
var state_27906__$1 = state_27906;
var statearr_27913_27937 = state_27906__$1;
(statearr_27913_27937[(2)] = null);

(statearr_27913_27937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (6))){
var inst_27883 = (state_27906[(7)]);
var inst_27889 = p.call(null,inst_27883);
var state_27906__$1 = state_27906;
if(cljs.core.truth_(inst_27889)){
var statearr_27914_27938 = state_27906__$1;
(statearr_27914_27938[(1)] = (9));

} else {
var statearr_27915_27939 = state_27906__$1;
(statearr_27915_27939[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (3))){
var inst_27904 = (state_27906[(2)]);
var state_27906__$1 = state_27906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27906__$1,inst_27904);
} else {
if((state_val_27907 === (12))){
var state_27906__$1 = state_27906;
var statearr_27916_27940 = state_27906__$1;
(statearr_27916_27940[(2)] = null);

(statearr_27916_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (2))){
var state_27906__$1 = state_27906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27906__$1,(4),ch);
} else {
if((state_val_27907 === (11))){
var inst_27883 = (state_27906[(7)]);
var inst_27893 = (state_27906[(2)]);
var state_27906__$1 = state_27906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27906__$1,(8),inst_27893,inst_27883);
} else {
if((state_val_27907 === (9))){
var state_27906__$1 = state_27906;
var statearr_27917_27941 = state_27906__$1;
(statearr_27917_27941[(2)] = tc);

(statearr_27917_27941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (5))){
var inst_27886 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27887 = cljs.core.async.close_BANG_.call(null,fc);
var state_27906__$1 = (function (){var statearr_27918 = state_27906;
(statearr_27918[(8)] = inst_27886);

return statearr_27918;
})();
var statearr_27919_27942 = state_27906__$1;
(statearr_27919_27942[(2)] = inst_27887);

(statearr_27919_27942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (14))){
var inst_27900 = (state_27906[(2)]);
var state_27906__$1 = state_27906;
var statearr_27920_27943 = state_27906__$1;
(statearr_27920_27943[(2)] = inst_27900);

(statearr_27920_27943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (10))){
var state_27906__$1 = state_27906;
var statearr_27921_27944 = state_27906__$1;
(statearr_27921_27944[(2)] = fc);

(statearr_27921_27944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27907 === (8))){
var inst_27895 = (state_27906[(2)]);
var state_27906__$1 = state_27906;
if(cljs.core.truth_(inst_27895)){
var statearr_27922_27945 = state_27906__$1;
(statearr_27922_27945[(1)] = (12));

} else {
var statearr_27923_27946 = state_27906__$1;
(statearr_27923_27946[(1)] = (13));

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
});})(c__21529__auto___27932,tc,fc))
;
return ((function (switch__21467__auto__,c__21529__auto___27932,tc,fc){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_27927 = [null,null,null,null,null,null,null,null,null];
(statearr_27927[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_27927[(1)] = (1));

return statearr_27927;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_27906){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e27928){if((e27928 instanceof Object)){
var ex__21471__auto__ = e27928;
var statearr_27929_27947 = state_27906;
(statearr_27929_27947[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27948 = state_27906;
state_27906 = G__27948;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_27906){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_27906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___27932,tc,fc))
})();
var state__21531__auto__ = (function (){var statearr_27930 = f__21530__auto__.call(null);
(statearr_27930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___27932);

return statearr_27930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___27932,tc,fc))
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
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__){
return (function (state_27995){
var state_val_27996 = (state_27995[(1)]);
if((state_val_27996 === (7))){
var inst_27991 = (state_27995[(2)]);
var state_27995__$1 = state_27995;
var statearr_27997_28013 = state_27995__$1;
(statearr_27997_28013[(2)] = inst_27991);

(statearr_27997_28013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (6))){
var inst_27984 = (state_27995[(7)]);
var inst_27981 = (state_27995[(8)]);
var inst_27988 = f.call(null,inst_27981,inst_27984);
var inst_27981__$1 = inst_27988;
var state_27995__$1 = (function (){var statearr_27998 = state_27995;
(statearr_27998[(8)] = inst_27981__$1);

return statearr_27998;
})();
var statearr_27999_28014 = state_27995__$1;
(statearr_27999_28014[(2)] = null);

(statearr_27999_28014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (5))){
var inst_27981 = (state_27995[(8)]);
var state_27995__$1 = state_27995;
var statearr_28000_28015 = state_27995__$1;
(statearr_28000_28015[(2)] = inst_27981);

(statearr_28000_28015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (4))){
var inst_27984 = (state_27995[(7)]);
var inst_27984__$1 = (state_27995[(2)]);
var inst_27985 = (inst_27984__$1 == null);
var state_27995__$1 = (function (){var statearr_28001 = state_27995;
(statearr_28001[(7)] = inst_27984__$1);

return statearr_28001;
})();
if(cljs.core.truth_(inst_27985)){
var statearr_28002_28016 = state_27995__$1;
(statearr_28002_28016[(1)] = (5));

} else {
var statearr_28003_28017 = state_27995__$1;
(statearr_28003_28017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27996 === (3))){
var inst_27993 = (state_27995[(2)]);
var state_27995__$1 = state_27995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27995__$1,inst_27993);
} else {
if((state_val_27996 === (2))){
var state_27995__$1 = state_27995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27995__$1,(4),ch);
} else {
if((state_val_27996 === (1))){
var inst_27981 = init;
var state_27995__$1 = (function (){var statearr_28004 = state_27995;
(statearr_28004[(8)] = inst_27981);

return statearr_28004;
})();
var statearr_28005_28018 = state_27995__$1;
(statearr_28005_28018[(2)] = null);

(statearr_28005_28018[(1)] = (2));


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
});})(c__21529__auto__))
;
return ((function (switch__21467__auto__,c__21529__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21468__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21468__auto____0 = (function (){
var statearr_28009 = [null,null,null,null,null,null,null,null,null];
(statearr_28009[(0)] = cljs$core$async$reduce_$_state_machine__21468__auto__);

(statearr_28009[(1)] = (1));

return statearr_28009;
});
var cljs$core$async$reduce_$_state_machine__21468__auto____1 = (function (state_27995){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_27995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e28010){if((e28010 instanceof Object)){
var ex__21471__auto__ = e28010;
var statearr_28011_28019 = state_27995;
(statearr_28011_28019[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28020 = state_27995;
state_27995 = G__28020;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21468__auto__ = function(state_27995){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21468__auto____1.call(this,state_27995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21468__auto____0;
cljs$core$async$reduce_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21468__auto____1;
return cljs$core$async$reduce_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__))
})();
var state__21531__auto__ = (function (){var statearr_28012 = f__21530__auto__.call(null);
(statearr_28012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_28012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__))
);

return c__21529__auto__;
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
var G__28022 = arguments.length;
switch (G__28022) {
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
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__){
return (function (state_28047){
var state_val_28048 = (state_28047[(1)]);
if((state_val_28048 === (7))){
var inst_28029 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
var statearr_28049_28073 = state_28047__$1;
(statearr_28049_28073[(2)] = inst_28029);

(statearr_28049_28073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (1))){
var inst_28023 = cljs.core.seq.call(null,coll);
var inst_28024 = inst_28023;
var state_28047__$1 = (function (){var statearr_28050 = state_28047;
(statearr_28050[(7)] = inst_28024);

return statearr_28050;
})();
var statearr_28051_28074 = state_28047__$1;
(statearr_28051_28074[(2)] = null);

(statearr_28051_28074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (4))){
var inst_28024 = (state_28047[(7)]);
var inst_28027 = cljs.core.first.call(null,inst_28024);
var state_28047__$1 = state_28047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28047__$1,(7),ch,inst_28027);
} else {
if((state_val_28048 === (13))){
var inst_28041 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
var statearr_28052_28075 = state_28047__$1;
(statearr_28052_28075[(2)] = inst_28041);

(statearr_28052_28075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (6))){
var inst_28032 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
if(cljs.core.truth_(inst_28032)){
var statearr_28053_28076 = state_28047__$1;
(statearr_28053_28076[(1)] = (8));

} else {
var statearr_28054_28077 = state_28047__$1;
(statearr_28054_28077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (3))){
var inst_28045 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28047__$1,inst_28045);
} else {
if((state_val_28048 === (12))){
var state_28047__$1 = state_28047;
var statearr_28055_28078 = state_28047__$1;
(statearr_28055_28078[(2)] = null);

(statearr_28055_28078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (2))){
var inst_28024 = (state_28047[(7)]);
var state_28047__$1 = state_28047;
if(cljs.core.truth_(inst_28024)){
var statearr_28056_28079 = state_28047__$1;
(statearr_28056_28079[(1)] = (4));

} else {
var statearr_28057_28080 = state_28047__$1;
(statearr_28057_28080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (11))){
var inst_28038 = cljs.core.async.close_BANG_.call(null,ch);
var state_28047__$1 = state_28047;
var statearr_28058_28081 = state_28047__$1;
(statearr_28058_28081[(2)] = inst_28038);

(statearr_28058_28081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (9))){
var state_28047__$1 = state_28047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28059_28082 = state_28047__$1;
(statearr_28059_28082[(1)] = (11));

} else {
var statearr_28060_28083 = state_28047__$1;
(statearr_28060_28083[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (5))){
var inst_28024 = (state_28047[(7)]);
var state_28047__$1 = state_28047;
var statearr_28061_28084 = state_28047__$1;
(statearr_28061_28084[(2)] = inst_28024);

(statearr_28061_28084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (10))){
var inst_28043 = (state_28047[(2)]);
var state_28047__$1 = state_28047;
var statearr_28062_28085 = state_28047__$1;
(statearr_28062_28085[(2)] = inst_28043);

(statearr_28062_28085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28048 === (8))){
var inst_28024 = (state_28047[(7)]);
var inst_28034 = cljs.core.next.call(null,inst_28024);
var inst_28024__$1 = inst_28034;
var state_28047__$1 = (function (){var statearr_28063 = state_28047;
(statearr_28063[(7)] = inst_28024__$1);

return statearr_28063;
})();
var statearr_28064_28086 = state_28047__$1;
(statearr_28064_28086[(2)] = null);

(statearr_28064_28086[(1)] = (2));


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
});})(c__21529__auto__))
;
return ((function (switch__21467__auto__,c__21529__auto__){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_28068 = [null,null,null,null,null,null,null,null];
(statearr_28068[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_28068[(1)] = (1));

return statearr_28068;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_28047){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_28047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e28069){if((e28069 instanceof Object)){
var ex__21471__auto__ = e28069;
var statearr_28070_28087 = state_28047;
(statearr_28070_28087[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28088 = state_28047;
state_28047 = G__28088;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_28047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_28047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__))
})();
var state__21531__auto__ = (function (){var statearr_28071 = f__21530__auto__.call(null);
(statearr_28071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_28071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__))
);

return c__21529__auto__;
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

cljs.core.async.Mux = (function (){var obj28090 = {};
return obj28090;
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


cljs.core.async.Mult = (function (){var obj28092 = {};
return obj28092;
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
if(typeof cljs.core.async.t28314 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28314 = (function (cs,ch,mult,meta28315){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28315 = meta28315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28314.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28314.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28314.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28314.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28314.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28316){
var self__ = this;
var _28316__$1 = this;
return self__.meta28315;
});})(cs))
;

cljs.core.async.t28314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28316,meta28315__$1){
var self__ = this;
var _28316__$1 = this;
return (new cljs.core.async.t28314(self__.cs,self__.ch,self__.mult,meta28315__$1));
});})(cs))
;

cljs.core.async.t28314.cljs$lang$type = true;

cljs.core.async.t28314.cljs$lang$ctorStr = "cljs.core.async/t28314";

cljs.core.async.t28314.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28314");
});})(cs))
;

cljs.core.async.__GT_t28314 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28314(cs__$1,ch__$1,mult__$1,meta28315){
return (new cljs.core.async.t28314(cs__$1,ch__$1,mult__$1,meta28315));
});})(cs))
;

}

return (new cljs.core.async.t28314(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21529__auto___28535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___28535,cs,m,dchan,dctr,done){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___28535,cs,m,dchan,dctr,done){
return (function (state_28447){
var state_val_28448 = (state_28447[(1)]);
if((state_val_28448 === (7))){
var inst_28443 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28449_28536 = state_28447__$1;
(statearr_28449_28536[(2)] = inst_28443);

(statearr_28449_28536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (20))){
var inst_28348 = (state_28447[(7)]);
var inst_28358 = cljs.core.first.call(null,inst_28348);
var inst_28359 = cljs.core.nth.call(null,inst_28358,(0),null);
var inst_28360 = cljs.core.nth.call(null,inst_28358,(1),null);
var state_28447__$1 = (function (){var statearr_28450 = state_28447;
(statearr_28450[(8)] = inst_28359);

return statearr_28450;
})();
if(cljs.core.truth_(inst_28360)){
var statearr_28451_28537 = state_28447__$1;
(statearr_28451_28537[(1)] = (22));

} else {
var statearr_28452_28538 = state_28447__$1;
(statearr_28452_28538[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (27))){
var inst_28388 = (state_28447[(9)]);
var inst_28395 = (state_28447[(10)]);
var inst_28390 = (state_28447[(11)]);
var inst_28319 = (state_28447[(12)]);
var inst_28395__$1 = cljs.core._nth.call(null,inst_28388,inst_28390);
var inst_28396 = cljs.core.async.put_BANG_.call(null,inst_28395__$1,inst_28319,done);
var state_28447__$1 = (function (){var statearr_28453 = state_28447;
(statearr_28453[(10)] = inst_28395__$1);

return statearr_28453;
})();
if(cljs.core.truth_(inst_28396)){
var statearr_28454_28539 = state_28447__$1;
(statearr_28454_28539[(1)] = (30));

} else {
var statearr_28455_28540 = state_28447__$1;
(statearr_28455_28540[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (1))){
var state_28447__$1 = state_28447;
var statearr_28456_28541 = state_28447__$1;
(statearr_28456_28541[(2)] = null);

(statearr_28456_28541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (24))){
var inst_28348 = (state_28447[(7)]);
var inst_28365 = (state_28447[(2)]);
var inst_28366 = cljs.core.next.call(null,inst_28348);
var inst_28328 = inst_28366;
var inst_28329 = null;
var inst_28330 = (0);
var inst_28331 = (0);
var state_28447__$1 = (function (){var statearr_28457 = state_28447;
(statearr_28457[(13)] = inst_28331);

(statearr_28457[(14)] = inst_28329);

(statearr_28457[(15)] = inst_28365);

(statearr_28457[(16)] = inst_28330);

(statearr_28457[(17)] = inst_28328);

return statearr_28457;
})();
var statearr_28458_28542 = state_28447__$1;
(statearr_28458_28542[(2)] = null);

(statearr_28458_28542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (39))){
var state_28447__$1 = state_28447;
var statearr_28462_28543 = state_28447__$1;
(statearr_28462_28543[(2)] = null);

(statearr_28462_28543[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (4))){
var inst_28319 = (state_28447[(12)]);
var inst_28319__$1 = (state_28447[(2)]);
var inst_28320 = (inst_28319__$1 == null);
var state_28447__$1 = (function (){var statearr_28463 = state_28447;
(statearr_28463[(12)] = inst_28319__$1);

return statearr_28463;
})();
if(cljs.core.truth_(inst_28320)){
var statearr_28464_28544 = state_28447__$1;
(statearr_28464_28544[(1)] = (5));

} else {
var statearr_28465_28545 = state_28447__$1;
(statearr_28465_28545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (15))){
var inst_28331 = (state_28447[(13)]);
var inst_28329 = (state_28447[(14)]);
var inst_28330 = (state_28447[(16)]);
var inst_28328 = (state_28447[(17)]);
var inst_28344 = (state_28447[(2)]);
var inst_28345 = (inst_28331 + (1));
var tmp28459 = inst_28329;
var tmp28460 = inst_28330;
var tmp28461 = inst_28328;
var inst_28328__$1 = tmp28461;
var inst_28329__$1 = tmp28459;
var inst_28330__$1 = tmp28460;
var inst_28331__$1 = inst_28345;
var state_28447__$1 = (function (){var statearr_28466 = state_28447;
(statearr_28466[(18)] = inst_28344);

(statearr_28466[(13)] = inst_28331__$1);

(statearr_28466[(14)] = inst_28329__$1);

(statearr_28466[(16)] = inst_28330__$1);

(statearr_28466[(17)] = inst_28328__$1);

return statearr_28466;
})();
var statearr_28467_28546 = state_28447__$1;
(statearr_28467_28546[(2)] = null);

(statearr_28467_28546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (21))){
var inst_28369 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28471_28547 = state_28447__$1;
(statearr_28471_28547[(2)] = inst_28369);

(statearr_28471_28547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (31))){
var inst_28395 = (state_28447[(10)]);
var inst_28399 = done.call(null,null);
var inst_28400 = cljs.core.async.untap_STAR_.call(null,m,inst_28395);
var state_28447__$1 = (function (){var statearr_28472 = state_28447;
(statearr_28472[(19)] = inst_28399);

return statearr_28472;
})();
var statearr_28473_28548 = state_28447__$1;
(statearr_28473_28548[(2)] = inst_28400);

(statearr_28473_28548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (32))){
var inst_28389 = (state_28447[(20)]);
var inst_28388 = (state_28447[(9)]);
var inst_28387 = (state_28447[(21)]);
var inst_28390 = (state_28447[(11)]);
var inst_28402 = (state_28447[(2)]);
var inst_28403 = (inst_28390 + (1));
var tmp28468 = inst_28389;
var tmp28469 = inst_28388;
var tmp28470 = inst_28387;
var inst_28387__$1 = tmp28470;
var inst_28388__$1 = tmp28469;
var inst_28389__$1 = tmp28468;
var inst_28390__$1 = inst_28403;
var state_28447__$1 = (function (){var statearr_28474 = state_28447;
(statearr_28474[(22)] = inst_28402);

(statearr_28474[(20)] = inst_28389__$1);

(statearr_28474[(9)] = inst_28388__$1);

(statearr_28474[(21)] = inst_28387__$1);

(statearr_28474[(11)] = inst_28390__$1);

return statearr_28474;
})();
var statearr_28475_28549 = state_28447__$1;
(statearr_28475_28549[(2)] = null);

(statearr_28475_28549[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (40))){
var inst_28415 = (state_28447[(23)]);
var inst_28419 = done.call(null,null);
var inst_28420 = cljs.core.async.untap_STAR_.call(null,m,inst_28415);
var state_28447__$1 = (function (){var statearr_28476 = state_28447;
(statearr_28476[(24)] = inst_28419);

return statearr_28476;
})();
var statearr_28477_28550 = state_28447__$1;
(statearr_28477_28550[(2)] = inst_28420);

(statearr_28477_28550[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (33))){
var inst_28406 = (state_28447[(25)]);
var inst_28408 = cljs.core.chunked_seq_QMARK_.call(null,inst_28406);
var state_28447__$1 = state_28447;
if(inst_28408){
var statearr_28478_28551 = state_28447__$1;
(statearr_28478_28551[(1)] = (36));

} else {
var statearr_28479_28552 = state_28447__$1;
(statearr_28479_28552[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (13))){
var inst_28338 = (state_28447[(26)]);
var inst_28341 = cljs.core.async.close_BANG_.call(null,inst_28338);
var state_28447__$1 = state_28447;
var statearr_28480_28553 = state_28447__$1;
(statearr_28480_28553[(2)] = inst_28341);

(statearr_28480_28553[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (22))){
var inst_28359 = (state_28447[(8)]);
var inst_28362 = cljs.core.async.close_BANG_.call(null,inst_28359);
var state_28447__$1 = state_28447;
var statearr_28481_28554 = state_28447__$1;
(statearr_28481_28554[(2)] = inst_28362);

(statearr_28481_28554[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (36))){
var inst_28406 = (state_28447[(25)]);
var inst_28410 = cljs.core.chunk_first.call(null,inst_28406);
var inst_28411 = cljs.core.chunk_rest.call(null,inst_28406);
var inst_28412 = cljs.core.count.call(null,inst_28410);
var inst_28387 = inst_28411;
var inst_28388 = inst_28410;
var inst_28389 = inst_28412;
var inst_28390 = (0);
var state_28447__$1 = (function (){var statearr_28482 = state_28447;
(statearr_28482[(20)] = inst_28389);

(statearr_28482[(9)] = inst_28388);

(statearr_28482[(21)] = inst_28387);

(statearr_28482[(11)] = inst_28390);

return statearr_28482;
})();
var statearr_28483_28555 = state_28447__$1;
(statearr_28483_28555[(2)] = null);

(statearr_28483_28555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (41))){
var inst_28406 = (state_28447[(25)]);
var inst_28422 = (state_28447[(2)]);
var inst_28423 = cljs.core.next.call(null,inst_28406);
var inst_28387 = inst_28423;
var inst_28388 = null;
var inst_28389 = (0);
var inst_28390 = (0);
var state_28447__$1 = (function (){var statearr_28484 = state_28447;
(statearr_28484[(20)] = inst_28389);

(statearr_28484[(9)] = inst_28388);

(statearr_28484[(27)] = inst_28422);

(statearr_28484[(21)] = inst_28387);

(statearr_28484[(11)] = inst_28390);

return statearr_28484;
})();
var statearr_28485_28556 = state_28447__$1;
(statearr_28485_28556[(2)] = null);

(statearr_28485_28556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (43))){
var state_28447__$1 = state_28447;
var statearr_28486_28557 = state_28447__$1;
(statearr_28486_28557[(2)] = null);

(statearr_28486_28557[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (29))){
var inst_28431 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28487_28558 = state_28447__$1;
(statearr_28487_28558[(2)] = inst_28431);

(statearr_28487_28558[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (44))){
var inst_28440 = (state_28447[(2)]);
var state_28447__$1 = (function (){var statearr_28488 = state_28447;
(statearr_28488[(28)] = inst_28440);

return statearr_28488;
})();
var statearr_28489_28559 = state_28447__$1;
(statearr_28489_28559[(2)] = null);

(statearr_28489_28559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (6))){
var inst_28379 = (state_28447[(29)]);
var inst_28378 = cljs.core.deref.call(null,cs);
var inst_28379__$1 = cljs.core.keys.call(null,inst_28378);
var inst_28380 = cljs.core.count.call(null,inst_28379__$1);
var inst_28381 = cljs.core.reset_BANG_.call(null,dctr,inst_28380);
var inst_28386 = cljs.core.seq.call(null,inst_28379__$1);
var inst_28387 = inst_28386;
var inst_28388 = null;
var inst_28389 = (0);
var inst_28390 = (0);
var state_28447__$1 = (function (){var statearr_28490 = state_28447;
(statearr_28490[(20)] = inst_28389);

(statearr_28490[(9)] = inst_28388);

(statearr_28490[(30)] = inst_28381);

(statearr_28490[(21)] = inst_28387);

(statearr_28490[(29)] = inst_28379__$1);

(statearr_28490[(11)] = inst_28390);

return statearr_28490;
})();
var statearr_28491_28560 = state_28447__$1;
(statearr_28491_28560[(2)] = null);

(statearr_28491_28560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (28))){
var inst_28387 = (state_28447[(21)]);
var inst_28406 = (state_28447[(25)]);
var inst_28406__$1 = cljs.core.seq.call(null,inst_28387);
var state_28447__$1 = (function (){var statearr_28492 = state_28447;
(statearr_28492[(25)] = inst_28406__$1);

return statearr_28492;
})();
if(inst_28406__$1){
var statearr_28493_28561 = state_28447__$1;
(statearr_28493_28561[(1)] = (33));

} else {
var statearr_28494_28562 = state_28447__$1;
(statearr_28494_28562[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (25))){
var inst_28389 = (state_28447[(20)]);
var inst_28390 = (state_28447[(11)]);
var inst_28392 = (inst_28390 < inst_28389);
var inst_28393 = inst_28392;
var state_28447__$1 = state_28447;
if(cljs.core.truth_(inst_28393)){
var statearr_28495_28563 = state_28447__$1;
(statearr_28495_28563[(1)] = (27));

} else {
var statearr_28496_28564 = state_28447__$1;
(statearr_28496_28564[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (34))){
var state_28447__$1 = state_28447;
var statearr_28497_28565 = state_28447__$1;
(statearr_28497_28565[(2)] = null);

(statearr_28497_28565[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (17))){
var state_28447__$1 = state_28447;
var statearr_28498_28566 = state_28447__$1;
(statearr_28498_28566[(2)] = null);

(statearr_28498_28566[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (3))){
var inst_28445 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28447__$1,inst_28445);
} else {
if((state_val_28448 === (12))){
var inst_28374 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28499_28567 = state_28447__$1;
(statearr_28499_28567[(2)] = inst_28374);

(statearr_28499_28567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (2))){
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28447__$1,(4),ch);
} else {
if((state_val_28448 === (23))){
var state_28447__$1 = state_28447;
var statearr_28500_28568 = state_28447__$1;
(statearr_28500_28568[(2)] = null);

(statearr_28500_28568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (35))){
var inst_28429 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28501_28569 = state_28447__$1;
(statearr_28501_28569[(2)] = inst_28429);

(statearr_28501_28569[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (19))){
var inst_28348 = (state_28447[(7)]);
var inst_28352 = cljs.core.chunk_first.call(null,inst_28348);
var inst_28353 = cljs.core.chunk_rest.call(null,inst_28348);
var inst_28354 = cljs.core.count.call(null,inst_28352);
var inst_28328 = inst_28353;
var inst_28329 = inst_28352;
var inst_28330 = inst_28354;
var inst_28331 = (0);
var state_28447__$1 = (function (){var statearr_28502 = state_28447;
(statearr_28502[(13)] = inst_28331);

(statearr_28502[(14)] = inst_28329);

(statearr_28502[(16)] = inst_28330);

(statearr_28502[(17)] = inst_28328);

return statearr_28502;
})();
var statearr_28503_28570 = state_28447__$1;
(statearr_28503_28570[(2)] = null);

(statearr_28503_28570[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (11))){
var inst_28348 = (state_28447[(7)]);
var inst_28328 = (state_28447[(17)]);
var inst_28348__$1 = cljs.core.seq.call(null,inst_28328);
var state_28447__$1 = (function (){var statearr_28504 = state_28447;
(statearr_28504[(7)] = inst_28348__$1);

return statearr_28504;
})();
if(inst_28348__$1){
var statearr_28505_28571 = state_28447__$1;
(statearr_28505_28571[(1)] = (16));

} else {
var statearr_28506_28572 = state_28447__$1;
(statearr_28506_28572[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (9))){
var inst_28376 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28507_28573 = state_28447__$1;
(statearr_28507_28573[(2)] = inst_28376);

(statearr_28507_28573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (5))){
var inst_28326 = cljs.core.deref.call(null,cs);
var inst_28327 = cljs.core.seq.call(null,inst_28326);
var inst_28328 = inst_28327;
var inst_28329 = null;
var inst_28330 = (0);
var inst_28331 = (0);
var state_28447__$1 = (function (){var statearr_28508 = state_28447;
(statearr_28508[(13)] = inst_28331);

(statearr_28508[(14)] = inst_28329);

(statearr_28508[(16)] = inst_28330);

(statearr_28508[(17)] = inst_28328);

return statearr_28508;
})();
var statearr_28509_28574 = state_28447__$1;
(statearr_28509_28574[(2)] = null);

(statearr_28509_28574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (14))){
var state_28447__$1 = state_28447;
var statearr_28510_28575 = state_28447__$1;
(statearr_28510_28575[(2)] = null);

(statearr_28510_28575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (45))){
var inst_28437 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28511_28576 = state_28447__$1;
(statearr_28511_28576[(2)] = inst_28437);

(statearr_28511_28576[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (26))){
var inst_28379 = (state_28447[(29)]);
var inst_28433 = (state_28447[(2)]);
var inst_28434 = cljs.core.seq.call(null,inst_28379);
var state_28447__$1 = (function (){var statearr_28512 = state_28447;
(statearr_28512[(31)] = inst_28433);

return statearr_28512;
})();
if(inst_28434){
var statearr_28513_28577 = state_28447__$1;
(statearr_28513_28577[(1)] = (42));

} else {
var statearr_28514_28578 = state_28447__$1;
(statearr_28514_28578[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (16))){
var inst_28348 = (state_28447[(7)]);
var inst_28350 = cljs.core.chunked_seq_QMARK_.call(null,inst_28348);
var state_28447__$1 = state_28447;
if(inst_28350){
var statearr_28515_28579 = state_28447__$1;
(statearr_28515_28579[(1)] = (19));

} else {
var statearr_28516_28580 = state_28447__$1;
(statearr_28516_28580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (38))){
var inst_28426 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28517_28581 = state_28447__$1;
(statearr_28517_28581[(2)] = inst_28426);

(statearr_28517_28581[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (30))){
var state_28447__$1 = state_28447;
var statearr_28518_28582 = state_28447__$1;
(statearr_28518_28582[(2)] = null);

(statearr_28518_28582[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (10))){
var inst_28331 = (state_28447[(13)]);
var inst_28329 = (state_28447[(14)]);
var inst_28337 = cljs.core._nth.call(null,inst_28329,inst_28331);
var inst_28338 = cljs.core.nth.call(null,inst_28337,(0),null);
var inst_28339 = cljs.core.nth.call(null,inst_28337,(1),null);
var state_28447__$1 = (function (){var statearr_28519 = state_28447;
(statearr_28519[(26)] = inst_28338);

return statearr_28519;
})();
if(cljs.core.truth_(inst_28339)){
var statearr_28520_28583 = state_28447__$1;
(statearr_28520_28583[(1)] = (13));

} else {
var statearr_28521_28584 = state_28447__$1;
(statearr_28521_28584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (18))){
var inst_28372 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28522_28585 = state_28447__$1;
(statearr_28522_28585[(2)] = inst_28372);

(statearr_28522_28585[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (42))){
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28447__$1,(45),dchan);
} else {
if((state_val_28448 === (37))){
var inst_28406 = (state_28447[(25)]);
var inst_28415 = (state_28447[(23)]);
var inst_28319 = (state_28447[(12)]);
var inst_28415__$1 = cljs.core.first.call(null,inst_28406);
var inst_28416 = cljs.core.async.put_BANG_.call(null,inst_28415__$1,inst_28319,done);
var state_28447__$1 = (function (){var statearr_28523 = state_28447;
(statearr_28523[(23)] = inst_28415__$1);

return statearr_28523;
})();
if(cljs.core.truth_(inst_28416)){
var statearr_28524_28586 = state_28447__$1;
(statearr_28524_28586[(1)] = (39));

} else {
var statearr_28525_28587 = state_28447__$1;
(statearr_28525_28587[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (8))){
var inst_28331 = (state_28447[(13)]);
var inst_28330 = (state_28447[(16)]);
var inst_28333 = (inst_28331 < inst_28330);
var inst_28334 = inst_28333;
var state_28447__$1 = state_28447;
if(cljs.core.truth_(inst_28334)){
var statearr_28526_28588 = state_28447__$1;
(statearr_28526_28588[(1)] = (10));

} else {
var statearr_28527_28589 = state_28447__$1;
(statearr_28527_28589[(1)] = (11));

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
});})(c__21529__auto___28535,cs,m,dchan,dctr,done))
;
return ((function (switch__21467__auto__,c__21529__auto___28535,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21468__auto__ = null;
var cljs$core$async$mult_$_state_machine__21468__auto____0 = (function (){
var statearr_28531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28531[(0)] = cljs$core$async$mult_$_state_machine__21468__auto__);

(statearr_28531[(1)] = (1));

return statearr_28531;
});
var cljs$core$async$mult_$_state_machine__21468__auto____1 = (function (state_28447){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_28447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e28532){if((e28532 instanceof Object)){
var ex__21471__auto__ = e28532;
var statearr_28533_28590 = state_28447;
(statearr_28533_28590[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28591 = state_28447;
state_28447 = G__28591;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21468__auto__ = function(state_28447){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21468__auto____1.call(this,state_28447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21468__auto____0;
cljs$core$async$mult_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21468__auto____1;
return cljs$core$async$mult_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___28535,cs,m,dchan,dctr,done))
})();
var state__21531__auto__ = (function (){var statearr_28534 = f__21530__auto__.call(null);
(statearr_28534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___28535);

return statearr_28534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___28535,cs,m,dchan,dctr,done))
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
var G__28593 = arguments.length;
switch (G__28593) {
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

cljs.core.async.Mix = (function (){var obj28596 = {};
return obj28596;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28601){
var map__28602 = p__28601;
var map__28602__$1 = ((cljs.core.seq_QMARK_.call(null,map__28602))?cljs.core.apply.call(null,cljs.core.hash_map,map__28602):map__28602);
var opts = map__28602__$1;
var statearr_28603_28606 = state;
(statearr_28603_28606[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28602,map__28602__$1,opts){
return (function (val){
var statearr_28604_28607 = state;
(statearr_28604_28607[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28602,map__28602__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28605_28608 = state;
(statearr_28605_28608[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28597){
var G__28598 = cljs.core.first.call(null,seq28597);
var seq28597__$1 = cljs.core.next.call(null,seq28597);
var G__28599 = cljs.core.first.call(null,seq28597__$1);
var seq28597__$2 = cljs.core.next.call(null,seq28597__$1);
var G__28600 = cljs.core.first.call(null,seq28597__$2);
var seq28597__$3 = cljs.core.next.call(null,seq28597__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28598,G__28599,G__28600,seq28597__$3);
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
if(typeof cljs.core.async.t28728 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28728 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28729){
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
this.meta28729 = meta28729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28728.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28728.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28728.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28728.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28728.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28728.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28728.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28730){
var self__ = this;
var _28730__$1 = this;
return self__.meta28729;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28730,meta28729__$1){
var self__ = this;
var _28730__$1 = this;
return (new cljs.core.async.t28728(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28729__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28728.cljs$lang$type = true;

cljs.core.async.t28728.cljs$lang$ctorStr = "cljs.core.async/t28728";

cljs.core.async.t28728.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28728");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28728 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28728(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28729){
return (new cljs.core.async.t28728(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28729));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28728(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21529__auto___28847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___28847,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___28847,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28800){
var state_val_28801 = (state_28800[(1)]);
if((state_val_28801 === (7))){
var inst_28744 = (state_28800[(7)]);
var inst_28749 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28744);
var state_28800__$1 = state_28800;
var statearr_28802_28848 = state_28800__$1;
(statearr_28802_28848[(2)] = inst_28749);

(statearr_28802_28848[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (20))){
var inst_28759 = (state_28800[(8)]);
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28800__$1,(23),out,inst_28759);
} else {
if((state_val_28801 === (1))){
var inst_28734 = (state_28800[(9)]);
var inst_28734__$1 = calc_state.call(null);
var inst_28735 = cljs.core.seq_QMARK_.call(null,inst_28734__$1);
var state_28800__$1 = (function (){var statearr_28803 = state_28800;
(statearr_28803[(9)] = inst_28734__$1);

return statearr_28803;
})();
if(inst_28735){
var statearr_28804_28849 = state_28800__$1;
(statearr_28804_28849[(1)] = (2));

} else {
var statearr_28805_28850 = state_28800__$1;
(statearr_28805_28850[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (24))){
var inst_28752 = (state_28800[(10)]);
var inst_28744 = inst_28752;
var state_28800__$1 = (function (){var statearr_28806 = state_28800;
(statearr_28806[(7)] = inst_28744);

return statearr_28806;
})();
var statearr_28807_28851 = state_28800__$1;
(statearr_28807_28851[(2)] = null);

(statearr_28807_28851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (4))){
var inst_28734 = (state_28800[(9)]);
var inst_28740 = (state_28800[(2)]);
var inst_28741 = cljs.core.get.call(null,inst_28740,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28742 = cljs.core.get.call(null,inst_28740,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28743 = cljs.core.get.call(null,inst_28740,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28744 = inst_28734;
var state_28800__$1 = (function (){var statearr_28808 = state_28800;
(statearr_28808[(11)] = inst_28741);

(statearr_28808[(12)] = inst_28742);

(statearr_28808[(13)] = inst_28743);

(statearr_28808[(7)] = inst_28744);

return statearr_28808;
})();
var statearr_28809_28852 = state_28800__$1;
(statearr_28809_28852[(2)] = null);

(statearr_28809_28852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (15))){
var state_28800__$1 = state_28800;
var statearr_28810_28853 = state_28800__$1;
(statearr_28810_28853[(2)] = null);

(statearr_28810_28853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (21))){
var inst_28752 = (state_28800[(10)]);
var inst_28744 = inst_28752;
var state_28800__$1 = (function (){var statearr_28811 = state_28800;
(statearr_28811[(7)] = inst_28744);

return statearr_28811;
})();
var statearr_28812_28854 = state_28800__$1;
(statearr_28812_28854[(2)] = null);

(statearr_28812_28854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (13))){
var inst_28796 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28813_28855 = state_28800__$1;
(statearr_28813_28855[(2)] = inst_28796);

(statearr_28813_28855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (22))){
var inst_28794 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28814_28856 = state_28800__$1;
(statearr_28814_28856[(2)] = inst_28794);

(statearr_28814_28856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (6))){
var inst_28798 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28800__$1,inst_28798);
} else {
if((state_val_28801 === (25))){
var state_28800__$1 = state_28800;
var statearr_28815_28857 = state_28800__$1;
(statearr_28815_28857[(2)] = null);

(statearr_28815_28857[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (17))){
var inst_28774 = (state_28800[(14)]);
var state_28800__$1 = state_28800;
var statearr_28816_28858 = state_28800__$1;
(statearr_28816_28858[(2)] = inst_28774);

(statearr_28816_28858[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (3))){
var inst_28734 = (state_28800[(9)]);
var state_28800__$1 = state_28800;
var statearr_28817_28859 = state_28800__$1;
(statearr_28817_28859[(2)] = inst_28734);

(statearr_28817_28859[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (12))){
var inst_28774 = (state_28800[(14)]);
var inst_28760 = (state_28800[(15)]);
var inst_28755 = (state_28800[(16)]);
var inst_28774__$1 = inst_28755.call(null,inst_28760);
var state_28800__$1 = (function (){var statearr_28818 = state_28800;
(statearr_28818[(14)] = inst_28774__$1);

return statearr_28818;
})();
if(cljs.core.truth_(inst_28774__$1)){
var statearr_28819_28860 = state_28800__$1;
(statearr_28819_28860[(1)] = (17));

} else {
var statearr_28820_28861 = state_28800__$1;
(statearr_28820_28861[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (2))){
var inst_28734 = (state_28800[(9)]);
var inst_28737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28734);
var state_28800__$1 = state_28800;
var statearr_28821_28862 = state_28800__$1;
(statearr_28821_28862[(2)] = inst_28737);

(statearr_28821_28862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (23))){
var inst_28785 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
if(cljs.core.truth_(inst_28785)){
var statearr_28822_28863 = state_28800__$1;
(statearr_28822_28863[(1)] = (24));

} else {
var statearr_28823_28864 = state_28800__$1;
(statearr_28823_28864[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (19))){
var inst_28782 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
if(cljs.core.truth_(inst_28782)){
var statearr_28824_28865 = state_28800__$1;
(statearr_28824_28865[(1)] = (20));

} else {
var statearr_28825_28866 = state_28800__$1;
(statearr_28825_28866[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (11))){
var inst_28759 = (state_28800[(8)]);
var inst_28765 = (inst_28759 == null);
var state_28800__$1 = state_28800;
if(cljs.core.truth_(inst_28765)){
var statearr_28826_28867 = state_28800__$1;
(statearr_28826_28867[(1)] = (14));

} else {
var statearr_28827_28868 = state_28800__$1;
(statearr_28827_28868[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (9))){
var inst_28752 = (state_28800[(10)]);
var inst_28752__$1 = (state_28800[(2)]);
var inst_28753 = cljs.core.get.call(null,inst_28752__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28754 = cljs.core.get.call(null,inst_28752__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28755 = cljs.core.get.call(null,inst_28752__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28800__$1 = (function (){var statearr_28828 = state_28800;
(statearr_28828[(17)] = inst_28754);

(statearr_28828[(10)] = inst_28752__$1);

(statearr_28828[(16)] = inst_28755);

return statearr_28828;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28800__$1,(10),inst_28753);
} else {
if((state_val_28801 === (5))){
var inst_28744 = (state_28800[(7)]);
var inst_28747 = cljs.core.seq_QMARK_.call(null,inst_28744);
var state_28800__$1 = state_28800;
if(inst_28747){
var statearr_28829_28869 = state_28800__$1;
(statearr_28829_28869[(1)] = (7));

} else {
var statearr_28830_28870 = state_28800__$1;
(statearr_28830_28870[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (14))){
var inst_28760 = (state_28800[(15)]);
var inst_28767 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28760);
var state_28800__$1 = state_28800;
var statearr_28831_28871 = state_28800__$1;
(statearr_28831_28871[(2)] = inst_28767);

(statearr_28831_28871[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (26))){
var inst_28790 = (state_28800[(2)]);
var state_28800__$1 = state_28800;
var statearr_28832_28872 = state_28800__$1;
(statearr_28832_28872[(2)] = inst_28790);

(statearr_28832_28872[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (16))){
var inst_28770 = (state_28800[(2)]);
var inst_28771 = calc_state.call(null);
var inst_28744 = inst_28771;
var state_28800__$1 = (function (){var statearr_28833 = state_28800;
(statearr_28833[(18)] = inst_28770);

(statearr_28833[(7)] = inst_28744);

return statearr_28833;
})();
var statearr_28834_28873 = state_28800__$1;
(statearr_28834_28873[(2)] = null);

(statearr_28834_28873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (10))){
var inst_28759 = (state_28800[(8)]);
var inst_28760 = (state_28800[(15)]);
var inst_28758 = (state_28800[(2)]);
var inst_28759__$1 = cljs.core.nth.call(null,inst_28758,(0),null);
var inst_28760__$1 = cljs.core.nth.call(null,inst_28758,(1),null);
var inst_28761 = (inst_28759__$1 == null);
var inst_28762 = cljs.core._EQ_.call(null,inst_28760__$1,change);
var inst_28763 = (inst_28761) || (inst_28762);
var state_28800__$1 = (function (){var statearr_28835 = state_28800;
(statearr_28835[(8)] = inst_28759__$1);

(statearr_28835[(15)] = inst_28760__$1);

return statearr_28835;
})();
if(cljs.core.truth_(inst_28763)){
var statearr_28836_28874 = state_28800__$1;
(statearr_28836_28874[(1)] = (11));

} else {
var statearr_28837_28875 = state_28800__$1;
(statearr_28837_28875[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (18))){
var inst_28754 = (state_28800[(17)]);
var inst_28760 = (state_28800[(15)]);
var inst_28755 = (state_28800[(16)]);
var inst_28777 = cljs.core.empty_QMARK_.call(null,inst_28755);
var inst_28778 = inst_28754.call(null,inst_28760);
var inst_28779 = cljs.core.not.call(null,inst_28778);
var inst_28780 = (inst_28777) && (inst_28779);
var state_28800__$1 = state_28800;
var statearr_28838_28876 = state_28800__$1;
(statearr_28838_28876[(2)] = inst_28780);

(statearr_28838_28876[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28801 === (8))){
var inst_28744 = (state_28800[(7)]);
var state_28800__$1 = state_28800;
var statearr_28839_28877 = state_28800__$1;
(statearr_28839_28877[(2)] = inst_28744);

(statearr_28839_28877[(1)] = (9));


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
});})(c__21529__auto___28847,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21467__auto__,c__21529__auto___28847,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21468__auto__ = null;
var cljs$core$async$mix_$_state_machine__21468__auto____0 = (function (){
var statearr_28843 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28843[(0)] = cljs$core$async$mix_$_state_machine__21468__auto__);

(statearr_28843[(1)] = (1));

return statearr_28843;
});
var cljs$core$async$mix_$_state_machine__21468__auto____1 = (function (state_28800){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_28800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e28844){if((e28844 instanceof Object)){
var ex__21471__auto__ = e28844;
var statearr_28845_28878 = state_28800;
(statearr_28845_28878[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28879 = state_28800;
state_28800 = G__28879;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21468__auto__ = function(state_28800){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21468__auto____1.call(this,state_28800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21468__auto____0;
cljs$core$async$mix_$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21468__auto____1;
return cljs$core$async$mix_$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___28847,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21531__auto__ = (function (){var statearr_28846 = f__21530__auto__.call(null);
(statearr_28846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___28847);

return statearr_28846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___28847,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28881 = {};
return obj28881;
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
var G__28883 = arguments.length;
switch (G__28883) {
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
var G__28887 = arguments.length;
switch (G__28887) {
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
return (function (p1__28885_SHARP_){
if(cljs.core.truth_(p1__28885_SHARP_.call(null,topic))){
return p1__28885_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28885_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28888 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28888 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28889){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28889 = meta28889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28888.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28888.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28888.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28888.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28888.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28890){
var self__ = this;
var _28890__$1 = this;
return self__.meta28889;
});})(mults,ensure_mult))
;

cljs.core.async.t28888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28890,meta28889__$1){
var self__ = this;
var _28890__$1 = this;
return (new cljs.core.async.t28888(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28889__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28888.cljs$lang$type = true;

cljs.core.async.t28888.cljs$lang$ctorStr = "cljs.core.async/t28888";

cljs.core.async.t28888.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28888");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28888 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28888(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28889){
return (new cljs.core.async.t28888(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28889));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28888(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21529__auto___29011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29011,mults,ensure_mult,p){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29011,mults,ensure_mult,p){
return (function (state_28962){
var state_val_28963 = (state_28962[(1)]);
if((state_val_28963 === (7))){
var inst_28958 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28964_29012 = state_28962__$1;
(statearr_28964_29012[(2)] = inst_28958);

(statearr_28964_29012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (20))){
var state_28962__$1 = state_28962;
var statearr_28965_29013 = state_28962__$1;
(statearr_28965_29013[(2)] = null);

(statearr_28965_29013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (1))){
var state_28962__$1 = state_28962;
var statearr_28966_29014 = state_28962__$1;
(statearr_28966_29014[(2)] = null);

(statearr_28966_29014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (24))){
var inst_28941 = (state_28962[(7)]);
var inst_28950 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28941);
var state_28962__$1 = state_28962;
var statearr_28967_29015 = state_28962__$1;
(statearr_28967_29015[(2)] = inst_28950);

(statearr_28967_29015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (4))){
var inst_28893 = (state_28962[(8)]);
var inst_28893__$1 = (state_28962[(2)]);
var inst_28894 = (inst_28893__$1 == null);
var state_28962__$1 = (function (){var statearr_28968 = state_28962;
(statearr_28968[(8)] = inst_28893__$1);

return statearr_28968;
})();
if(cljs.core.truth_(inst_28894)){
var statearr_28969_29016 = state_28962__$1;
(statearr_28969_29016[(1)] = (5));

} else {
var statearr_28970_29017 = state_28962__$1;
(statearr_28970_29017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (15))){
var inst_28935 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28971_29018 = state_28962__$1;
(statearr_28971_29018[(2)] = inst_28935);

(statearr_28971_29018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (21))){
var inst_28955 = (state_28962[(2)]);
var state_28962__$1 = (function (){var statearr_28972 = state_28962;
(statearr_28972[(9)] = inst_28955);

return statearr_28972;
})();
var statearr_28973_29019 = state_28962__$1;
(statearr_28973_29019[(2)] = null);

(statearr_28973_29019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (13))){
var inst_28917 = (state_28962[(10)]);
var inst_28919 = cljs.core.chunked_seq_QMARK_.call(null,inst_28917);
var state_28962__$1 = state_28962;
if(inst_28919){
var statearr_28974_29020 = state_28962__$1;
(statearr_28974_29020[(1)] = (16));

} else {
var statearr_28975_29021 = state_28962__$1;
(statearr_28975_29021[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (22))){
var inst_28947 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
if(cljs.core.truth_(inst_28947)){
var statearr_28976_29022 = state_28962__$1;
(statearr_28976_29022[(1)] = (23));

} else {
var statearr_28977_29023 = state_28962__$1;
(statearr_28977_29023[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (6))){
var inst_28941 = (state_28962[(7)]);
var inst_28943 = (state_28962[(11)]);
var inst_28893 = (state_28962[(8)]);
var inst_28941__$1 = topic_fn.call(null,inst_28893);
var inst_28942 = cljs.core.deref.call(null,mults);
var inst_28943__$1 = cljs.core.get.call(null,inst_28942,inst_28941__$1);
var state_28962__$1 = (function (){var statearr_28978 = state_28962;
(statearr_28978[(7)] = inst_28941__$1);

(statearr_28978[(11)] = inst_28943__$1);

return statearr_28978;
})();
if(cljs.core.truth_(inst_28943__$1)){
var statearr_28979_29024 = state_28962__$1;
(statearr_28979_29024[(1)] = (19));

} else {
var statearr_28980_29025 = state_28962__$1;
(statearr_28980_29025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (25))){
var inst_28952 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28981_29026 = state_28962__$1;
(statearr_28981_29026[(2)] = inst_28952);

(statearr_28981_29026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (17))){
var inst_28917 = (state_28962[(10)]);
var inst_28926 = cljs.core.first.call(null,inst_28917);
var inst_28927 = cljs.core.async.muxch_STAR_.call(null,inst_28926);
var inst_28928 = cljs.core.async.close_BANG_.call(null,inst_28927);
var inst_28929 = cljs.core.next.call(null,inst_28917);
var inst_28903 = inst_28929;
var inst_28904 = null;
var inst_28905 = (0);
var inst_28906 = (0);
var state_28962__$1 = (function (){var statearr_28982 = state_28962;
(statearr_28982[(12)] = inst_28903);

(statearr_28982[(13)] = inst_28904);

(statearr_28982[(14)] = inst_28905);

(statearr_28982[(15)] = inst_28928);

(statearr_28982[(16)] = inst_28906);

return statearr_28982;
})();
var statearr_28983_29027 = state_28962__$1;
(statearr_28983_29027[(2)] = null);

(statearr_28983_29027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (3))){
var inst_28960 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28962__$1,inst_28960);
} else {
if((state_val_28963 === (12))){
var inst_28937 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28984_29028 = state_28962__$1;
(statearr_28984_29028[(2)] = inst_28937);

(statearr_28984_29028[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (2))){
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28962__$1,(4),ch);
} else {
if((state_val_28963 === (23))){
var state_28962__$1 = state_28962;
var statearr_28985_29029 = state_28962__$1;
(statearr_28985_29029[(2)] = null);

(statearr_28985_29029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (19))){
var inst_28943 = (state_28962[(11)]);
var inst_28893 = (state_28962[(8)]);
var inst_28945 = cljs.core.async.muxch_STAR_.call(null,inst_28943);
var state_28962__$1 = state_28962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28962__$1,(22),inst_28945,inst_28893);
} else {
if((state_val_28963 === (11))){
var inst_28903 = (state_28962[(12)]);
var inst_28917 = (state_28962[(10)]);
var inst_28917__$1 = cljs.core.seq.call(null,inst_28903);
var state_28962__$1 = (function (){var statearr_28986 = state_28962;
(statearr_28986[(10)] = inst_28917__$1);

return statearr_28986;
})();
if(inst_28917__$1){
var statearr_28987_29030 = state_28962__$1;
(statearr_28987_29030[(1)] = (13));

} else {
var statearr_28988_29031 = state_28962__$1;
(statearr_28988_29031[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (9))){
var inst_28939 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_28989_29032 = state_28962__$1;
(statearr_28989_29032[(2)] = inst_28939);

(statearr_28989_29032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (5))){
var inst_28900 = cljs.core.deref.call(null,mults);
var inst_28901 = cljs.core.vals.call(null,inst_28900);
var inst_28902 = cljs.core.seq.call(null,inst_28901);
var inst_28903 = inst_28902;
var inst_28904 = null;
var inst_28905 = (0);
var inst_28906 = (0);
var state_28962__$1 = (function (){var statearr_28990 = state_28962;
(statearr_28990[(12)] = inst_28903);

(statearr_28990[(13)] = inst_28904);

(statearr_28990[(14)] = inst_28905);

(statearr_28990[(16)] = inst_28906);

return statearr_28990;
})();
var statearr_28991_29033 = state_28962__$1;
(statearr_28991_29033[(2)] = null);

(statearr_28991_29033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (14))){
var state_28962__$1 = state_28962;
var statearr_28995_29034 = state_28962__$1;
(statearr_28995_29034[(2)] = null);

(statearr_28995_29034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (16))){
var inst_28917 = (state_28962[(10)]);
var inst_28921 = cljs.core.chunk_first.call(null,inst_28917);
var inst_28922 = cljs.core.chunk_rest.call(null,inst_28917);
var inst_28923 = cljs.core.count.call(null,inst_28921);
var inst_28903 = inst_28922;
var inst_28904 = inst_28921;
var inst_28905 = inst_28923;
var inst_28906 = (0);
var state_28962__$1 = (function (){var statearr_28996 = state_28962;
(statearr_28996[(12)] = inst_28903);

(statearr_28996[(13)] = inst_28904);

(statearr_28996[(14)] = inst_28905);

(statearr_28996[(16)] = inst_28906);

return statearr_28996;
})();
var statearr_28997_29035 = state_28962__$1;
(statearr_28997_29035[(2)] = null);

(statearr_28997_29035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (10))){
var inst_28903 = (state_28962[(12)]);
var inst_28904 = (state_28962[(13)]);
var inst_28905 = (state_28962[(14)]);
var inst_28906 = (state_28962[(16)]);
var inst_28911 = cljs.core._nth.call(null,inst_28904,inst_28906);
var inst_28912 = cljs.core.async.muxch_STAR_.call(null,inst_28911);
var inst_28913 = cljs.core.async.close_BANG_.call(null,inst_28912);
var inst_28914 = (inst_28906 + (1));
var tmp28992 = inst_28903;
var tmp28993 = inst_28904;
var tmp28994 = inst_28905;
var inst_28903__$1 = tmp28992;
var inst_28904__$1 = tmp28993;
var inst_28905__$1 = tmp28994;
var inst_28906__$1 = inst_28914;
var state_28962__$1 = (function (){var statearr_28998 = state_28962;
(statearr_28998[(17)] = inst_28913);

(statearr_28998[(12)] = inst_28903__$1);

(statearr_28998[(13)] = inst_28904__$1);

(statearr_28998[(14)] = inst_28905__$1);

(statearr_28998[(16)] = inst_28906__$1);

return statearr_28998;
})();
var statearr_28999_29036 = state_28962__$1;
(statearr_28999_29036[(2)] = null);

(statearr_28999_29036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (18))){
var inst_28932 = (state_28962[(2)]);
var state_28962__$1 = state_28962;
var statearr_29000_29037 = state_28962__$1;
(statearr_29000_29037[(2)] = inst_28932);

(statearr_29000_29037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28963 === (8))){
var inst_28905 = (state_28962[(14)]);
var inst_28906 = (state_28962[(16)]);
var inst_28908 = (inst_28906 < inst_28905);
var inst_28909 = inst_28908;
var state_28962__$1 = state_28962;
if(cljs.core.truth_(inst_28909)){
var statearr_29001_29038 = state_28962__$1;
(statearr_29001_29038[(1)] = (10));

} else {
var statearr_29002_29039 = state_28962__$1;
(statearr_29002_29039[(1)] = (11));

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
});})(c__21529__auto___29011,mults,ensure_mult,p))
;
return ((function (switch__21467__auto__,c__21529__auto___29011,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29006[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29006[(1)] = (1));

return statearr_29006;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_28962){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_28962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29007){if((e29007 instanceof Object)){
var ex__21471__auto__ = e29007;
var statearr_29008_29040 = state_28962;
(statearr_29008_29040[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29041 = state_28962;
state_28962 = G__29041;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_28962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_28962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29011,mults,ensure_mult,p))
})();
var state__21531__auto__ = (function (){var statearr_29009 = f__21530__auto__.call(null);
(statearr_29009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29011);

return statearr_29009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29011,mults,ensure_mult,p))
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
var G__29043 = arguments.length;
switch (G__29043) {
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
var G__29046 = arguments.length;
switch (G__29046) {
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
var G__29049 = arguments.length;
switch (G__29049) {
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
var c__21529__auto___29119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29088){
var state_val_29089 = (state_29088[(1)]);
if((state_val_29089 === (7))){
var state_29088__$1 = state_29088;
var statearr_29090_29120 = state_29088__$1;
(statearr_29090_29120[(2)] = null);

(statearr_29090_29120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (1))){
var state_29088__$1 = state_29088;
var statearr_29091_29121 = state_29088__$1;
(statearr_29091_29121[(2)] = null);

(statearr_29091_29121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (4))){
var inst_29052 = (state_29088[(7)]);
var inst_29054 = (inst_29052 < cnt);
var state_29088__$1 = state_29088;
if(cljs.core.truth_(inst_29054)){
var statearr_29092_29122 = state_29088__$1;
(statearr_29092_29122[(1)] = (6));

} else {
var statearr_29093_29123 = state_29088__$1;
(statearr_29093_29123[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (15))){
var inst_29084 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29094_29124 = state_29088__$1;
(statearr_29094_29124[(2)] = inst_29084);

(statearr_29094_29124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (13))){
var inst_29077 = cljs.core.async.close_BANG_.call(null,out);
var state_29088__$1 = state_29088;
var statearr_29095_29125 = state_29088__$1;
(statearr_29095_29125[(2)] = inst_29077);

(statearr_29095_29125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (6))){
var state_29088__$1 = state_29088;
var statearr_29096_29126 = state_29088__$1;
(statearr_29096_29126[(2)] = null);

(statearr_29096_29126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (3))){
var inst_29086 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29088__$1,inst_29086);
} else {
if((state_val_29089 === (12))){
var inst_29074 = (state_29088[(8)]);
var inst_29074__$1 = (state_29088[(2)]);
var inst_29075 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29074__$1);
var state_29088__$1 = (function (){var statearr_29097 = state_29088;
(statearr_29097[(8)] = inst_29074__$1);

return statearr_29097;
})();
if(cljs.core.truth_(inst_29075)){
var statearr_29098_29127 = state_29088__$1;
(statearr_29098_29127[(1)] = (13));

} else {
var statearr_29099_29128 = state_29088__$1;
(statearr_29099_29128[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (2))){
var inst_29051 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29052 = (0);
var state_29088__$1 = (function (){var statearr_29100 = state_29088;
(statearr_29100[(9)] = inst_29051);

(statearr_29100[(7)] = inst_29052);

return statearr_29100;
})();
var statearr_29101_29129 = state_29088__$1;
(statearr_29101_29129[(2)] = null);

(statearr_29101_29129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (11))){
var inst_29052 = (state_29088[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29088,(10),Object,null,(9));
var inst_29061 = chs__$1.call(null,inst_29052);
var inst_29062 = done.call(null,inst_29052);
var inst_29063 = cljs.core.async.take_BANG_.call(null,inst_29061,inst_29062);
var state_29088__$1 = state_29088;
var statearr_29102_29130 = state_29088__$1;
(statearr_29102_29130[(2)] = inst_29063);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (9))){
var inst_29052 = (state_29088[(7)]);
var inst_29065 = (state_29088[(2)]);
var inst_29066 = (inst_29052 + (1));
var inst_29052__$1 = inst_29066;
var state_29088__$1 = (function (){var statearr_29103 = state_29088;
(statearr_29103[(10)] = inst_29065);

(statearr_29103[(7)] = inst_29052__$1);

return statearr_29103;
})();
var statearr_29104_29131 = state_29088__$1;
(statearr_29104_29131[(2)] = null);

(statearr_29104_29131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (5))){
var inst_29072 = (state_29088[(2)]);
var state_29088__$1 = (function (){var statearr_29105 = state_29088;
(statearr_29105[(11)] = inst_29072);

return statearr_29105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29088__$1,(12),dchan);
} else {
if((state_val_29089 === (14))){
var inst_29074 = (state_29088[(8)]);
var inst_29079 = cljs.core.apply.call(null,f,inst_29074);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29088__$1,(16),out,inst_29079);
} else {
if((state_val_29089 === (16))){
var inst_29081 = (state_29088[(2)]);
var state_29088__$1 = (function (){var statearr_29106 = state_29088;
(statearr_29106[(12)] = inst_29081);

return statearr_29106;
})();
var statearr_29107_29132 = state_29088__$1;
(statearr_29107_29132[(2)] = null);

(statearr_29107_29132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (10))){
var inst_29056 = (state_29088[(2)]);
var inst_29057 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29088__$1 = (function (){var statearr_29108 = state_29088;
(statearr_29108[(13)] = inst_29056);

return statearr_29108;
})();
var statearr_29109_29133 = state_29088__$1;
(statearr_29109_29133[(2)] = inst_29057);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (8))){
var inst_29070 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29110_29134 = state_29088__$1;
(statearr_29110_29134[(2)] = inst_29070);

(statearr_29110_29134[(1)] = (5));


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
});})(c__21529__auto___29119,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21467__auto__,c__21529__auto___29119,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29114[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29114[(1)] = (1));

return statearr_29114;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_29088){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29115){if((e29115 instanceof Object)){
var ex__21471__auto__ = e29115;
var statearr_29116_29135 = state_29088;
(statearr_29116_29135[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29136 = state_29088;
state_29088 = G__29136;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_29088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_29088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29119,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21531__auto__ = (function (){var statearr_29117 = f__21530__auto__.call(null);
(statearr_29117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29119);

return statearr_29117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29119,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29139 = arguments.length;
switch (G__29139) {
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
var c__21529__auto___29194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29194,out){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29194,out){
return (function (state_29169){
var state_val_29170 = (state_29169[(1)]);
if((state_val_29170 === (7))){
var inst_29148 = (state_29169[(7)]);
var inst_29149 = (state_29169[(8)]);
var inst_29148__$1 = (state_29169[(2)]);
var inst_29149__$1 = cljs.core.nth.call(null,inst_29148__$1,(0),null);
var inst_29150 = cljs.core.nth.call(null,inst_29148__$1,(1),null);
var inst_29151 = (inst_29149__$1 == null);
var state_29169__$1 = (function (){var statearr_29171 = state_29169;
(statearr_29171[(7)] = inst_29148__$1);

(statearr_29171[(8)] = inst_29149__$1);

(statearr_29171[(9)] = inst_29150);

return statearr_29171;
})();
if(cljs.core.truth_(inst_29151)){
var statearr_29172_29195 = state_29169__$1;
(statearr_29172_29195[(1)] = (8));

} else {
var statearr_29173_29196 = state_29169__$1;
(statearr_29173_29196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (1))){
var inst_29140 = cljs.core.vec.call(null,chs);
var inst_29141 = inst_29140;
var state_29169__$1 = (function (){var statearr_29174 = state_29169;
(statearr_29174[(10)] = inst_29141);

return statearr_29174;
})();
var statearr_29175_29197 = state_29169__$1;
(statearr_29175_29197[(2)] = null);

(statearr_29175_29197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (4))){
var inst_29141 = (state_29169[(10)]);
var state_29169__$1 = state_29169;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29169__$1,(7),inst_29141);
} else {
if((state_val_29170 === (6))){
var inst_29165 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29176_29198 = state_29169__$1;
(statearr_29176_29198[(2)] = inst_29165);

(statearr_29176_29198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (3))){
var inst_29167 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29169__$1,inst_29167);
} else {
if((state_val_29170 === (2))){
var inst_29141 = (state_29169[(10)]);
var inst_29143 = cljs.core.count.call(null,inst_29141);
var inst_29144 = (inst_29143 > (0));
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29144)){
var statearr_29178_29199 = state_29169__$1;
(statearr_29178_29199[(1)] = (4));

} else {
var statearr_29179_29200 = state_29169__$1;
(statearr_29179_29200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (11))){
var inst_29141 = (state_29169[(10)]);
var inst_29158 = (state_29169[(2)]);
var tmp29177 = inst_29141;
var inst_29141__$1 = tmp29177;
var state_29169__$1 = (function (){var statearr_29180 = state_29169;
(statearr_29180[(10)] = inst_29141__$1);

(statearr_29180[(11)] = inst_29158);

return statearr_29180;
})();
var statearr_29181_29201 = state_29169__$1;
(statearr_29181_29201[(2)] = null);

(statearr_29181_29201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (9))){
var inst_29149 = (state_29169[(8)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29169__$1,(11),out,inst_29149);
} else {
if((state_val_29170 === (5))){
var inst_29163 = cljs.core.async.close_BANG_.call(null,out);
var state_29169__$1 = state_29169;
var statearr_29182_29202 = state_29169__$1;
(statearr_29182_29202[(2)] = inst_29163);

(statearr_29182_29202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (10))){
var inst_29161 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29183_29203 = state_29169__$1;
(statearr_29183_29203[(2)] = inst_29161);

(statearr_29183_29203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (8))){
var inst_29141 = (state_29169[(10)]);
var inst_29148 = (state_29169[(7)]);
var inst_29149 = (state_29169[(8)]);
var inst_29150 = (state_29169[(9)]);
var inst_29153 = (function (){var c = inst_29150;
var v = inst_29149;
var vec__29146 = inst_29148;
var cs = inst_29141;
return ((function (c,v,vec__29146,cs,inst_29141,inst_29148,inst_29149,inst_29150,state_val_29170,c__21529__auto___29194,out){
return (function (p1__29137_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29137_SHARP_);
});
;})(c,v,vec__29146,cs,inst_29141,inst_29148,inst_29149,inst_29150,state_val_29170,c__21529__auto___29194,out))
})();
var inst_29154 = cljs.core.filterv.call(null,inst_29153,inst_29141);
var inst_29141__$1 = inst_29154;
var state_29169__$1 = (function (){var statearr_29184 = state_29169;
(statearr_29184[(10)] = inst_29141__$1);

return statearr_29184;
})();
var statearr_29185_29204 = state_29169__$1;
(statearr_29185_29204[(2)] = null);

(statearr_29185_29204[(1)] = (2));


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
});})(c__21529__auto___29194,out))
;
return ((function (switch__21467__auto__,c__21529__auto___29194,out){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29189 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29189[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29189[(1)] = (1));

return statearr_29189;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_29169){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29190){if((e29190 instanceof Object)){
var ex__21471__auto__ = e29190;
var statearr_29191_29205 = state_29169;
(statearr_29191_29205[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29206 = state_29169;
state_29169 = G__29206;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_29169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_29169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29194,out))
})();
var state__21531__auto__ = (function (){var statearr_29192 = f__21530__auto__.call(null);
(statearr_29192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29194);

return statearr_29192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29194,out))
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
var G__29208 = arguments.length;
switch (G__29208) {
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
var c__21529__auto___29256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29256,out){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29256,out){
return (function (state_29232){
var state_val_29233 = (state_29232[(1)]);
if((state_val_29233 === (7))){
var inst_29214 = (state_29232[(7)]);
var inst_29214__$1 = (state_29232[(2)]);
var inst_29215 = (inst_29214__$1 == null);
var inst_29216 = cljs.core.not.call(null,inst_29215);
var state_29232__$1 = (function (){var statearr_29234 = state_29232;
(statearr_29234[(7)] = inst_29214__$1);

return statearr_29234;
})();
if(inst_29216){
var statearr_29235_29257 = state_29232__$1;
(statearr_29235_29257[(1)] = (8));

} else {
var statearr_29236_29258 = state_29232__$1;
(statearr_29236_29258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (1))){
var inst_29209 = (0);
var state_29232__$1 = (function (){var statearr_29237 = state_29232;
(statearr_29237[(8)] = inst_29209);

return statearr_29237;
})();
var statearr_29238_29259 = state_29232__$1;
(statearr_29238_29259[(2)] = null);

(statearr_29238_29259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (4))){
var state_29232__$1 = state_29232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29232__$1,(7),ch);
} else {
if((state_val_29233 === (6))){
var inst_29227 = (state_29232[(2)]);
var state_29232__$1 = state_29232;
var statearr_29239_29260 = state_29232__$1;
(statearr_29239_29260[(2)] = inst_29227);

(statearr_29239_29260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (3))){
var inst_29229 = (state_29232[(2)]);
var inst_29230 = cljs.core.async.close_BANG_.call(null,out);
var state_29232__$1 = (function (){var statearr_29240 = state_29232;
(statearr_29240[(9)] = inst_29229);

return statearr_29240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29232__$1,inst_29230);
} else {
if((state_val_29233 === (2))){
var inst_29209 = (state_29232[(8)]);
var inst_29211 = (inst_29209 < n);
var state_29232__$1 = state_29232;
if(cljs.core.truth_(inst_29211)){
var statearr_29241_29261 = state_29232__$1;
(statearr_29241_29261[(1)] = (4));

} else {
var statearr_29242_29262 = state_29232__$1;
(statearr_29242_29262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (11))){
var inst_29209 = (state_29232[(8)]);
var inst_29219 = (state_29232[(2)]);
var inst_29220 = (inst_29209 + (1));
var inst_29209__$1 = inst_29220;
var state_29232__$1 = (function (){var statearr_29243 = state_29232;
(statearr_29243[(10)] = inst_29219);

(statearr_29243[(8)] = inst_29209__$1);

return statearr_29243;
})();
var statearr_29244_29263 = state_29232__$1;
(statearr_29244_29263[(2)] = null);

(statearr_29244_29263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (9))){
var state_29232__$1 = state_29232;
var statearr_29245_29264 = state_29232__$1;
(statearr_29245_29264[(2)] = null);

(statearr_29245_29264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (5))){
var state_29232__$1 = state_29232;
var statearr_29246_29265 = state_29232__$1;
(statearr_29246_29265[(2)] = null);

(statearr_29246_29265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (10))){
var inst_29224 = (state_29232[(2)]);
var state_29232__$1 = state_29232;
var statearr_29247_29266 = state_29232__$1;
(statearr_29247_29266[(2)] = inst_29224);

(statearr_29247_29266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29233 === (8))){
var inst_29214 = (state_29232[(7)]);
var state_29232__$1 = state_29232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29232__$1,(11),out,inst_29214);
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
});})(c__21529__auto___29256,out))
;
return ((function (switch__21467__auto__,c__21529__auto___29256,out){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29251[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29251[(1)] = (1));

return statearr_29251;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_29232){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29252){if((e29252 instanceof Object)){
var ex__21471__auto__ = e29252;
var statearr_29253_29267 = state_29232;
(statearr_29253_29267[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29268 = state_29232;
state_29232 = G__29268;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_29232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_29232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29256,out))
})();
var state__21531__auto__ = (function (){var statearr_29254 = f__21530__auto__.call(null);
(statearr_29254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29256);

return statearr_29254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29256,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29276 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29276 = (function (ch,f,map_LT_,meta29277){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29277 = meta29277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29279 = (function (fn1,_,meta29277,map_LT_,f,ch,meta29280){
this.fn1 = fn1;
this._ = _;
this.meta29277 = meta29277;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29280 = meta29280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29279.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29269_SHARP_){
return f1.call(null,(((p1__29269_SHARP_ == null))?null:self__.f.call(null,p1__29269_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29281){
var self__ = this;
var _29281__$1 = this;
return self__.meta29280;
});})(___$1))
;

cljs.core.async.t29279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29281,meta29280__$1){
var self__ = this;
var _29281__$1 = this;
return (new cljs.core.async.t29279(self__.fn1,self__._,self__.meta29277,self__.map_LT_,self__.f,self__.ch,meta29280__$1));
});})(___$1))
;

cljs.core.async.t29279.cljs$lang$type = true;

cljs.core.async.t29279.cljs$lang$ctorStr = "cljs.core.async/t29279";

cljs.core.async.t29279.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29279");
});})(___$1))
;

cljs.core.async.__GT_t29279 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29279(fn1__$1,___$2,meta29277__$1,map_LT___$1,f__$1,ch__$1,meta29280){
return (new cljs.core.async.t29279(fn1__$1,___$2,meta29277__$1,map_LT___$1,f__$1,ch__$1,meta29280));
});})(___$1))
;

}

return (new cljs.core.async.t29279(fn1,___$1,self__.meta29277,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t29276.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29278){
var self__ = this;
var _29278__$1 = this;
return self__.meta29277;
});

cljs.core.async.t29276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29278,meta29277__$1){
var self__ = this;
var _29278__$1 = this;
return (new cljs.core.async.t29276(self__.ch,self__.f,self__.map_LT_,meta29277__$1));
});

cljs.core.async.t29276.cljs$lang$type = true;

cljs.core.async.t29276.cljs$lang$ctorStr = "cljs.core.async/t29276";

cljs.core.async.t29276.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29276");
});

cljs.core.async.__GT_t29276 = (function cljs$core$async$map_LT__$___GT_t29276(ch__$1,f__$1,map_LT___$1,meta29277){
return (new cljs.core.async.t29276(ch__$1,f__$1,map_LT___$1,meta29277));
});

}

return (new cljs.core.async.t29276(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29285 = (function (ch,f,map_GT_,meta29286){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29286 = meta29286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29287){
var self__ = this;
var _29287__$1 = this;
return self__.meta29286;
});

cljs.core.async.t29285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29287,meta29286__$1){
var self__ = this;
var _29287__$1 = this;
return (new cljs.core.async.t29285(self__.ch,self__.f,self__.map_GT_,meta29286__$1));
});

cljs.core.async.t29285.cljs$lang$type = true;

cljs.core.async.t29285.cljs$lang$ctorStr = "cljs.core.async/t29285";

cljs.core.async.t29285.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29285");
});

cljs.core.async.__GT_t29285 = (function cljs$core$async$map_GT__$___GT_t29285(ch__$1,f__$1,map_GT___$1,meta29286){
return (new cljs.core.async.t29285(ch__$1,f__$1,map_GT___$1,meta29286));
});

}

return (new cljs.core.async.t29285(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29291 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29291 = (function (ch,p,filter_GT_,meta29292){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29292 = meta29292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
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

cljs.core.async.t29291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29293){
var self__ = this;
var _29293__$1 = this;
return self__.meta29292;
});

cljs.core.async.t29291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29293,meta29292__$1){
var self__ = this;
var _29293__$1 = this;
return (new cljs.core.async.t29291(self__.ch,self__.p,self__.filter_GT_,meta29292__$1));
});

cljs.core.async.t29291.cljs$lang$type = true;

cljs.core.async.t29291.cljs$lang$ctorStr = "cljs.core.async/t29291";

cljs.core.async.t29291.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t29291");
});

cljs.core.async.__GT_t29291 = (function cljs$core$async$filter_GT__$___GT_t29291(ch__$1,p__$1,filter_GT___$1,meta29292){
return (new cljs.core.async.t29291(ch__$1,p__$1,filter_GT___$1,meta29292));
});

}

return (new cljs.core.async.t29291(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29295 = arguments.length;
switch (G__29295) {
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
var c__21529__auto___29338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29338,out){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29338,out){
return (function (state_29316){
var state_val_29317 = (state_29316[(1)]);
if((state_val_29317 === (7))){
var inst_29312 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29318_29339 = state_29316__$1;
(statearr_29318_29339[(2)] = inst_29312);

(statearr_29318_29339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (1))){
var state_29316__$1 = state_29316;
var statearr_29319_29340 = state_29316__$1;
(statearr_29319_29340[(2)] = null);

(statearr_29319_29340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (4))){
var inst_29298 = (state_29316[(7)]);
var inst_29298__$1 = (state_29316[(2)]);
var inst_29299 = (inst_29298__$1 == null);
var state_29316__$1 = (function (){var statearr_29320 = state_29316;
(statearr_29320[(7)] = inst_29298__$1);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29299)){
var statearr_29321_29341 = state_29316__$1;
(statearr_29321_29341[(1)] = (5));

} else {
var statearr_29322_29342 = state_29316__$1;
(statearr_29322_29342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (6))){
var inst_29298 = (state_29316[(7)]);
var inst_29303 = p.call(null,inst_29298);
var state_29316__$1 = state_29316;
if(cljs.core.truth_(inst_29303)){
var statearr_29323_29343 = state_29316__$1;
(statearr_29323_29343[(1)] = (8));

} else {
var statearr_29324_29344 = state_29316__$1;
(statearr_29324_29344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (3))){
var inst_29314 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29316__$1,inst_29314);
} else {
if((state_val_29317 === (2))){
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29316__$1,(4),ch);
} else {
if((state_val_29317 === (11))){
var inst_29306 = (state_29316[(2)]);
var state_29316__$1 = state_29316;
var statearr_29325_29345 = state_29316__$1;
(statearr_29325_29345[(2)] = inst_29306);

(statearr_29325_29345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (9))){
var state_29316__$1 = state_29316;
var statearr_29326_29346 = state_29316__$1;
(statearr_29326_29346[(2)] = null);

(statearr_29326_29346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (5))){
var inst_29301 = cljs.core.async.close_BANG_.call(null,out);
var state_29316__$1 = state_29316;
var statearr_29327_29347 = state_29316__$1;
(statearr_29327_29347[(2)] = inst_29301);

(statearr_29327_29347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (10))){
var inst_29309 = (state_29316[(2)]);
var state_29316__$1 = (function (){var statearr_29328 = state_29316;
(statearr_29328[(8)] = inst_29309);

return statearr_29328;
})();
var statearr_29329_29348 = state_29316__$1;
(statearr_29329_29348[(2)] = null);

(statearr_29329_29348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29317 === (8))){
var inst_29298 = (state_29316[(7)]);
var state_29316__$1 = state_29316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29316__$1,(11),out,inst_29298);
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
});})(c__21529__auto___29338,out))
;
return ((function (switch__21467__auto__,c__21529__auto___29338,out){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29333 = [null,null,null,null,null,null,null,null,null];
(statearr_29333[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29333[(1)] = (1));

return statearr_29333;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_29316){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29334){if((e29334 instanceof Object)){
var ex__21471__auto__ = e29334;
var statearr_29335_29349 = state_29316;
(statearr_29335_29349[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29350 = state_29316;
state_29316 = G__29350;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_29316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_29316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29338,out))
})();
var state__21531__auto__ = (function (){var statearr_29336 = f__21530__auto__.call(null);
(statearr_29336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29338);

return statearr_29336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29338,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29352 = arguments.length;
switch (G__29352) {
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
var c__21529__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto__){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto__){
return (function (state_29519){
var state_val_29520 = (state_29519[(1)]);
if((state_val_29520 === (7))){
var inst_29515 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29521_29562 = state_29519__$1;
(statearr_29521_29562[(2)] = inst_29515);

(statearr_29521_29562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (20))){
var inst_29485 = (state_29519[(7)]);
var inst_29496 = (state_29519[(2)]);
var inst_29497 = cljs.core.next.call(null,inst_29485);
var inst_29471 = inst_29497;
var inst_29472 = null;
var inst_29473 = (0);
var inst_29474 = (0);
var state_29519__$1 = (function (){var statearr_29522 = state_29519;
(statearr_29522[(8)] = inst_29474);

(statearr_29522[(9)] = inst_29473);

(statearr_29522[(10)] = inst_29496);

(statearr_29522[(11)] = inst_29471);

(statearr_29522[(12)] = inst_29472);

return statearr_29522;
})();
var statearr_29523_29563 = state_29519__$1;
(statearr_29523_29563[(2)] = null);

(statearr_29523_29563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (1))){
var state_29519__$1 = state_29519;
var statearr_29524_29564 = state_29519__$1;
(statearr_29524_29564[(2)] = null);

(statearr_29524_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (4))){
var inst_29460 = (state_29519[(13)]);
var inst_29460__$1 = (state_29519[(2)]);
var inst_29461 = (inst_29460__$1 == null);
var state_29519__$1 = (function (){var statearr_29525 = state_29519;
(statearr_29525[(13)] = inst_29460__$1);

return statearr_29525;
})();
if(cljs.core.truth_(inst_29461)){
var statearr_29526_29565 = state_29519__$1;
(statearr_29526_29565[(1)] = (5));

} else {
var statearr_29527_29566 = state_29519__$1;
(statearr_29527_29566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (15))){
var state_29519__$1 = state_29519;
var statearr_29531_29567 = state_29519__$1;
(statearr_29531_29567[(2)] = null);

(statearr_29531_29567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (21))){
var state_29519__$1 = state_29519;
var statearr_29532_29568 = state_29519__$1;
(statearr_29532_29568[(2)] = null);

(statearr_29532_29568[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (13))){
var inst_29474 = (state_29519[(8)]);
var inst_29473 = (state_29519[(9)]);
var inst_29471 = (state_29519[(11)]);
var inst_29472 = (state_29519[(12)]);
var inst_29481 = (state_29519[(2)]);
var inst_29482 = (inst_29474 + (1));
var tmp29528 = inst_29473;
var tmp29529 = inst_29471;
var tmp29530 = inst_29472;
var inst_29471__$1 = tmp29529;
var inst_29472__$1 = tmp29530;
var inst_29473__$1 = tmp29528;
var inst_29474__$1 = inst_29482;
var state_29519__$1 = (function (){var statearr_29533 = state_29519;
(statearr_29533[(8)] = inst_29474__$1);

(statearr_29533[(9)] = inst_29473__$1);

(statearr_29533[(11)] = inst_29471__$1);

(statearr_29533[(14)] = inst_29481);

(statearr_29533[(12)] = inst_29472__$1);

return statearr_29533;
})();
var statearr_29534_29569 = state_29519__$1;
(statearr_29534_29569[(2)] = null);

(statearr_29534_29569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (22))){
var state_29519__$1 = state_29519;
var statearr_29535_29570 = state_29519__$1;
(statearr_29535_29570[(2)] = null);

(statearr_29535_29570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (6))){
var inst_29460 = (state_29519[(13)]);
var inst_29469 = f.call(null,inst_29460);
var inst_29470 = cljs.core.seq.call(null,inst_29469);
var inst_29471 = inst_29470;
var inst_29472 = null;
var inst_29473 = (0);
var inst_29474 = (0);
var state_29519__$1 = (function (){var statearr_29536 = state_29519;
(statearr_29536[(8)] = inst_29474);

(statearr_29536[(9)] = inst_29473);

(statearr_29536[(11)] = inst_29471);

(statearr_29536[(12)] = inst_29472);

return statearr_29536;
})();
var statearr_29537_29571 = state_29519__$1;
(statearr_29537_29571[(2)] = null);

(statearr_29537_29571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (17))){
var inst_29485 = (state_29519[(7)]);
var inst_29489 = cljs.core.chunk_first.call(null,inst_29485);
var inst_29490 = cljs.core.chunk_rest.call(null,inst_29485);
var inst_29491 = cljs.core.count.call(null,inst_29489);
var inst_29471 = inst_29490;
var inst_29472 = inst_29489;
var inst_29473 = inst_29491;
var inst_29474 = (0);
var state_29519__$1 = (function (){var statearr_29538 = state_29519;
(statearr_29538[(8)] = inst_29474);

(statearr_29538[(9)] = inst_29473);

(statearr_29538[(11)] = inst_29471);

(statearr_29538[(12)] = inst_29472);

return statearr_29538;
})();
var statearr_29539_29572 = state_29519__$1;
(statearr_29539_29572[(2)] = null);

(statearr_29539_29572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (3))){
var inst_29517 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29519__$1,inst_29517);
} else {
if((state_val_29520 === (12))){
var inst_29505 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29540_29573 = state_29519__$1;
(statearr_29540_29573[(2)] = inst_29505);

(statearr_29540_29573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (2))){
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29519__$1,(4),in$);
} else {
if((state_val_29520 === (23))){
var inst_29513 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29541_29574 = state_29519__$1;
(statearr_29541_29574[(2)] = inst_29513);

(statearr_29541_29574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (19))){
var inst_29500 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29542_29575 = state_29519__$1;
(statearr_29542_29575[(2)] = inst_29500);

(statearr_29542_29575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (11))){
var inst_29485 = (state_29519[(7)]);
var inst_29471 = (state_29519[(11)]);
var inst_29485__$1 = cljs.core.seq.call(null,inst_29471);
var state_29519__$1 = (function (){var statearr_29543 = state_29519;
(statearr_29543[(7)] = inst_29485__$1);

return statearr_29543;
})();
if(inst_29485__$1){
var statearr_29544_29576 = state_29519__$1;
(statearr_29544_29576[(1)] = (14));

} else {
var statearr_29545_29577 = state_29519__$1;
(statearr_29545_29577[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (9))){
var inst_29507 = (state_29519[(2)]);
var inst_29508 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29519__$1 = (function (){var statearr_29546 = state_29519;
(statearr_29546[(15)] = inst_29507);

return statearr_29546;
})();
if(cljs.core.truth_(inst_29508)){
var statearr_29547_29578 = state_29519__$1;
(statearr_29547_29578[(1)] = (21));

} else {
var statearr_29548_29579 = state_29519__$1;
(statearr_29548_29579[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (5))){
var inst_29463 = cljs.core.async.close_BANG_.call(null,out);
var state_29519__$1 = state_29519;
var statearr_29549_29580 = state_29519__$1;
(statearr_29549_29580[(2)] = inst_29463);

(statearr_29549_29580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (14))){
var inst_29485 = (state_29519[(7)]);
var inst_29487 = cljs.core.chunked_seq_QMARK_.call(null,inst_29485);
var state_29519__$1 = state_29519;
if(inst_29487){
var statearr_29550_29581 = state_29519__$1;
(statearr_29550_29581[(1)] = (17));

} else {
var statearr_29551_29582 = state_29519__$1;
(statearr_29551_29582[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (16))){
var inst_29503 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29552_29583 = state_29519__$1;
(statearr_29552_29583[(2)] = inst_29503);

(statearr_29552_29583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (10))){
var inst_29474 = (state_29519[(8)]);
var inst_29472 = (state_29519[(12)]);
var inst_29479 = cljs.core._nth.call(null,inst_29472,inst_29474);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29519__$1,(13),out,inst_29479);
} else {
if((state_val_29520 === (18))){
var inst_29485 = (state_29519[(7)]);
var inst_29494 = cljs.core.first.call(null,inst_29485);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29519__$1,(20),out,inst_29494);
} else {
if((state_val_29520 === (8))){
var inst_29474 = (state_29519[(8)]);
var inst_29473 = (state_29519[(9)]);
var inst_29476 = (inst_29474 < inst_29473);
var inst_29477 = inst_29476;
var state_29519__$1 = state_29519;
if(cljs.core.truth_(inst_29477)){
var statearr_29553_29584 = state_29519__$1;
(statearr_29553_29584[(1)] = (10));

} else {
var statearr_29554_29585 = state_29519__$1;
(statearr_29554_29585[(1)] = (11));

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
});})(c__21529__auto__))
;
return ((function (switch__21467__auto__,c__21529__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21468__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21468__auto____0 = (function (){
var statearr_29558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29558[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21468__auto__);

(statearr_29558[(1)] = (1));

return statearr_29558;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21468__auto____1 = (function (state_29519){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29559){if((e29559 instanceof Object)){
var ex__21471__auto__ = e29559;
var statearr_29560_29586 = state_29519;
(statearr_29560_29586[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29587 = state_29519;
state_29519 = G__29587;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21468__auto__ = function(state_29519){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21468__auto____1.call(this,state_29519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21468__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21468__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto__))
})();
var state__21531__auto__ = (function (){var statearr_29561 = f__21530__auto__.call(null);
(statearr_29561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto__);

return statearr_29561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto__))
);

return c__21529__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29589 = arguments.length;
switch (G__29589) {
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
var G__29592 = arguments.length;
switch (G__29592) {
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
var G__29595 = arguments.length;
switch (G__29595) {
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
var c__21529__auto___29645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29645,out){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29645,out){
return (function (state_29619){
var state_val_29620 = (state_29619[(1)]);
if((state_val_29620 === (7))){
var inst_29614 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29621_29646 = state_29619__$1;
(statearr_29621_29646[(2)] = inst_29614);

(statearr_29621_29646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (1))){
var inst_29596 = null;
var state_29619__$1 = (function (){var statearr_29622 = state_29619;
(statearr_29622[(7)] = inst_29596);

return statearr_29622;
})();
var statearr_29623_29647 = state_29619__$1;
(statearr_29623_29647[(2)] = null);

(statearr_29623_29647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (4))){
var inst_29599 = (state_29619[(8)]);
var inst_29599__$1 = (state_29619[(2)]);
var inst_29600 = (inst_29599__$1 == null);
var inst_29601 = cljs.core.not.call(null,inst_29600);
var state_29619__$1 = (function (){var statearr_29624 = state_29619;
(statearr_29624[(8)] = inst_29599__$1);

return statearr_29624;
})();
if(inst_29601){
var statearr_29625_29648 = state_29619__$1;
(statearr_29625_29648[(1)] = (5));

} else {
var statearr_29626_29649 = state_29619__$1;
(statearr_29626_29649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (6))){
var state_29619__$1 = state_29619;
var statearr_29627_29650 = state_29619__$1;
(statearr_29627_29650[(2)] = null);

(statearr_29627_29650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (3))){
var inst_29616 = (state_29619[(2)]);
var inst_29617 = cljs.core.async.close_BANG_.call(null,out);
var state_29619__$1 = (function (){var statearr_29628 = state_29619;
(statearr_29628[(9)] = inst_29616);

return statearr_29628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29619__$1,inst_29617);
} else {
if((state_val_29620 === (2))){
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29619__$1,(4),ch);
} else {
if((state_val_29620 === (11))){
var inst_29599 = (state_29619[(8)]);
var inst_29608 = (state_29619[(2)]);
var inst_29596 = inst_29599;
var state_29619__$1 = (function (){var statearr_29629 = state_29619;
(statearr_29629[(7)] = inst_29596);

(statearr_29629[(10)] = inst_29608);

return statearr_29629;
})();
var statearr_29630_29651 = state_29619__$1;
(statearr_29630_29651[(2)] = null);

(statearr_29630_29651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (9))){
var inst_29599 = (state_29619[(8)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29619__$1,(11),out,inst_29599);
} else {
if((state_val_29620 === (5))){
var inst_29599 = (state_29619[(8)]);
var inst_29596 = (state_29619[(7)]);
var inst_29603 = cljs.core._EQ_.call(null,inst_29599,inst_29596);
var state_29619__$1 = state_29619;
if(inst_29603){
var statearr_29632_29652 = state_29619__$1;
(statearr_29632_29652[(1)] = (8));

} else {
var statearr_29633_29653 = state_29619__$1;
(statearr_29633_29653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (10))){
var inst_29611 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29634_29654 = state_29619__$1;
(statearr_29634_29654[(2)] = inst_29611);

(statearr_29634_29654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (8))){
var inst_29596 = (state_29619[(7)]);
var tmp29631 = inst_29596;
var inst_29596__$1 = tmp29631;
var state_29619__$1 = (function (){var statearr_29635 = state_29619;
(statearr_29635[(7)] = inst_29596__$1);

return statearr_29635;
})();
var statearr_29636_29655 = state_29619__$1;
(statearr_29636_29655[(2)] = null);

(statearr_29636_29655[(1)] = (2));


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
});})(c__21529__auto___29645,out))
;
return ((function (switch__21467__auto__,c__21529__auto___29645,out){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29640[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29640[(1)] = (1));

return statearr_29640;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_29619){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29641){if((e29641 instanceof Object)){
var ex__21471__auto__ = e29641;
var statearr_29642_29656 = state_29619;
(statearr_29642_29656[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29657 = state_29619;
state_29619 = G__29657;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_29619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_29619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29645,out))
})();
var state__21531__auto__ = (function (){var statearr_29643 = f__21530__auto__.call(null);
(statearr_29643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29645);

return statearr_29643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29645,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29659 = arguments.length;
switch (G__29659) {
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
var c__21529__auto___29728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29728,out){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29728,out){
return (function (state_29697){
var state_val_29698 = (state_29697[(1)]);
if((state_val_29698 === (7))){
var inst_29693 = (state_29697[(2)]);
var state_29697__$1 = state_29697;
var statearr_29699_29729 = state_29697__$1;
(statearr_29699_29729[(2)] = inst_29693);

(statearr_29699_29729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (1))){
var inst_29660 = (new Array(n));
var inst_29661 = inst_29660;
var inst_29662 = (0);
var state_29697__$1 = (function (){var statearr_29700 = state_29697;
(statearr_29700[(7)] = inst_29661);

(statearr_29700[(8)] = inst_29662);

return statearr_29700;
})();
var statearr_29701_29730 = state_29697__$1;
(statearr_29701_29730[(2)] = null);

(statearr_29701_29730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (4))){
var inst_29665 = (state_29697[(9)]);
var inst_29665__$1 = (state_29697[(2)]);
var inst_29666 = (inst_29665__$1 == null);
var inst_29667 = cljs.core.not.call(null,inst_29666);
var state_29697__$1 = (function (){var statearr_29702 = state_29697;
(statearr_29702[(9)] = inst_29665__$1);

return statearr_29702;
})();
if(inst_29667){
var statearr_29703_29731 = state_29697__$1;
(statearr_29703_29731[(1)] = (5));

} else {
var statearr_29704_29732 = state_29697__$1;
(statearr_29704_29732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (15))){
var inst_29687 = (state_29697[(2)]);
var state_29697__$1 = state_29697;
var statearr_29705_29733 = state_29697__$1;
(statearr_29705_29733[(2)] = inst_29687);

(statearr_29705_29733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (13))){
var state_29697__$1 = state_29697;
var statearr_29706_29734 = state_29697__$1;
(statearr_29706_29734[(2)] = null);

(statearr_29706_29734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (6))){
var inst_29662 = (state_29697[(8)]);
var inst_29683 = (inst_29662 > (0));
var state_29697__$1 = state_29697;
if(cljs.core.truth_(inst_29683)){
var statearr_29707_29735 = state_29697__$1;
(statearr_29707_29735[(1)] = (12));

} else {
var statearr_29708_29736 = state_29697__$1;
(statearr_29708_29736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (3))){
var inst_29695 = (state_29697[(2)]);
var state_29697__$1 = state_29697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29697__$1,inst_29695);
} else {
if((state_val_29698 === (12))){
var inst_29661 = (state_29697[(7)]);
var inst_29685 = cljs.core.vec.call(null,inst_29661);
var state_29697__$1 = state_29697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29697__$1,(15),out,inst_29685);
} else {
if((state_val_29698 === (2))){
var state_29697__$1 = state_29697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29697__$1,(4),ch);
} else {
if((state_val_29698 === (11))){
var inst_29677 = (state_29697[(2)]);
var inst_29678 = (new Array(n));
var inst_29661 = inst_29678;
var inst_29662 = (0);
var state_29697__$1 = (function (){var statearr_29709 = state_29697;
(statearr_29709[(7)] = inst_29661);

(statearr_29709[(10)] = inst_29677);

(statearr_29709[(8)] = inst_29662);

return statearr_29709;
})();
var statearr_29710_29737 = state_29697__$1;
(statearr_29710_29737[(2)] = null);

(statearr_29710_29737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (9))){
var inst_29661 = (state_29697[(7)]);
var inst_29675 = cljs.core.vec.call(null,inst_29661);
var state_29697__$1 = state_29697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29697__$1,(11),out,inst_29675);
} else {
if((state_val_29698 === (5))){
var inst_29661 = (state_29697[(7)]);
var inst_29665 = (state_29697[(9)]);
var inst_29670 = (state_29697[(11)]);
var inst_29662 = (state_29697[(8)]);
var inst_29669 = (inst_29661[inst_29662] = inst_29665);
var inst_29670__$1 = (inst_29662 + (1));
var inst_29671 = (inst_29670__$1 < n);
var state_29697__$1 = (function (){var statearr_29711 = state_29697;
(statearr_29711[(12)] = inst_29669);

(statearr_29711[(11)] = inst_29670__$1);

return statearr_29711;
})();
if(cljs.core.truth_(inst_29671)){
var statearr_29712_29738 = state_29697__$1;
(statearr_29712_29738[(1)] = (8));

} else {
var statearr_29713_29739 = state_29697__$1;
(statearr_29713_29739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (14))){
var inst_29690 = (state_29697[(2)]);
var inst_29691 = cljs.core.async.close_BANG_.call(null,out);
var state_29697__$1 = (function (){var statearr_29715 = state_29697;
(statearr_29715[(13)] = inst_29690);

return statearr_29715;
})();
var statearr_29716_29740 = state_29697__$1;
(statearr_29716_29740[(2)] = inst_29691);

(statearr_29716_29740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (10))){
var inst_29681 = (state_29697[(2)]);
var state_29697__$1 = state_29697;
var statearr_29717_29741 = state_29697__$1;
(statearr_29717_29741[(2)] = inst_29681);

(statearr_29717_29741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29698 === (8))){
var inst_29661 = (state_29697[(7)]);
var inst_29670 = (state_29697[(11)]);
var tmp29714 = inst_29661;
var inst_29661__$1 = tmp29714;
var inst_29662 = inst_29670;
var state_29697__$1 = (function (){var statearr_29718 = state_29697;
(statearr_29718[(7)] = inst_29661__$1);

(statearr_29718[(8)] = inst_29662);

return statearr_29718;
})();
var statearr_29719_29742 = state_29697__$1;
(statearr_29719_29742[(2)] = null);

(statearr_29719_29742[(1)] = (2));


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
});})(c__21529__auto___29728,out))
;
return ((function (switch__21467__auto__,c__21529__auto___29728,out){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29723[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29723[(1)] = (1));

return statearr_29723;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_29697){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29724){if((e29724 instanceof Object)){
var ex__21471__auto__ = e29724;
var statearr_29725_29743 = state_29697;
(statearr_29725_29743[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29744 = state_29697;
state_29697 = G__29744;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_29697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_29697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29728,out))
})();
var state__21531__auto__ = (function (){var statearr_29726 = f__21530__auto__.call(null);
(statearr_29726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29728);

return statearr_29726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29728,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29746 = arguments.length;
switch (G__29746) {
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
var c__21529__auto___29819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21529__auto___29819,out){
return (function (){
var f__21530__auto__ = (function (){var switch__21467__auto__ = ((function (c__21529__auto___29819,out){
return (function (state_29788){
var state_val_29789 = (state_29788[(1)]);
if((state_val_29789 === (7))){
var inst_29784 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29790_29820 = state_29788__$1;
(statearr_29790_29820[(2)] = inst_29784);

(statearr_29790_29820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (1))){
var inst_29747 = [];
var inst_29748 = inst_29747;
var inst_29749 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29788__$1 = (function (){var statearr_29791 = state_29788;
(statearr_29791[(7)] = inst_29749);

(statearr_29791[(8)] = inst_29748);

return statearr_29791;
})();
var statearr_29792_29821 = state_29788__$1;
(statearr_29792_29821[(2)] = null);

(statearr_29792_29821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (4))){
var inst_29752 = (state_29788[(9)]);
var inst_29752__$1 = (state_29788[(2)]);
var inst_29753 = (inst_29752__$1 == null);
var inst_29754 = cljs.core.not.call(null,inst_29753);
var state_29788__$1 = (function (){var statearr_29793 = state_29788;
(statearr_29793[(9)] = inst_29752__$1);

return statearr_29793;
})();
if(inst_29754){
var statearr_29794_29822 = state_29788__$1;
(statearr_29794_29822[(1)] = (5));

} else {
var statearr_29795_29823 = state_29788__$1;
(statearr_29795_29823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (15))){
var inst_29778 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29796_29824 = state_29788__$1;
(statearr_29796_29824[(2)] = inst_29778);

(statearr_29796_29824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (13))){
var state_29788__$1 = state_29788;
var statearr_29797_29825 = state_29788__$1;
(statearr_29797_29825[(2)] = null);

(statearr_29797_29825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (6))){
var inst_29748 = (state_29788[(8)]);
var inst_29773 = inst_29748.length;
var inst_29774 = (inst_29773 > (0));
var state_29788__$1 = state_29788;
if(cljs.core.truth_(inst_29774)){
var statearr_29798_29826 = state_29788__$1;
(statearr_29798_29826[(1)] = (12));

} else {
var statearr_29799_29827 = state_29788__$1;
(statearr_29799_29827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (3))){
var inst_29786 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29788__$1,inst_29786);
} else {
if((state_val_29789 === (12))){
var inst_29748 = (state_29788[(8)]);
var inst_29776 = cljs.core.vec.call(null,inst_29748);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29788__$1,(15),out,inst_29776);
} else {
if((state_val_29789 === (2))){
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29788__$1,(4),ch);
} else {
if((state_val_29789 === (11))){
var inst_29752 = (state_29788[(9)]);
var inst_29756 = (state_29788[(10)]);
var inst_29766 = (state_29788[(2)]);
var inst_29767 = [];
var inst_29768 = inst_29767.push(inst_29752);
var inst_29748 = inst_29767;
var inst_29749 = inst_29756;
var state_29788__$1 = (function (){var statearr_29800 = state_29788;
(statearr_29800[(11)] = inst_29768);

(statearr_29800[(7)] = inst_29749);

(statearr_29800[(8)] = inst_29748);

(statearr_29800[(12)] = inst_29766);

return statearr_29800;
})();
var statearr_29801_29828 = state_29788__$1;
(statearr_29801_29828[(2)] = null);

(statearr_29801_29828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (9))){
var inst_29748 = (state_29788[(8)]);
var inst_29764 = cljs.core.vec.call(null,inst_29748);
var state_29788__$1 = state_29788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29788__$1,(11),out,inst_29764);
} else {
if((state_val_29789 === (5))){
var inst_29752 = (state_29788[(9)]);
var inst_29749 = (state_29788[(7)]);
var inst_29756 = (state_29788[(10)]);
var inst_29756__$1 = f.call(null,inst_29752);
var inst_29757 = cljs.core._EQ_.call(null,inst_29756__$1,inst_29749);
var inst_29758 = cljs.core.keyword_identical_QMARK_.call(null,inst_29749,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29759 = (inst_29757) || (inst_29758);
var state_29788__$1 = (function (){var statearr_29802 = state_29788;
(statearr_29802[(10)] = inst_29756__$1);

return statearr_29802;
})();
if(cljs.core.truth_(inst_29759)){
var statearr_29803_29829 = state_29788__$1;
(statearr_29803_29829[(1)] = (8));

} else {
var statearr_29804_29830 = state_29788__$1;
(statearr_29804_29830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (14))){
var inst_29781 = (state_29788[(2)]);
var inst_29782 = cljs.core.async.close_BANG_.call(null,out);
var state_29788__$1 = (function (){var statearr_29806 = state_29788;
(statearr_29806[(13)] = inst_29781);

return statearr_29806;
})();
var statearr_29807_29831 = state_29788__$1;
(statearr_29807_29831[(2)] = inst_29782);

(statearr_29807_29831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (10))){
var inst_29771 = (state_29788[(2)]);
var state_29788__$1 = state_29788;
var statearr_29808_29832 = state_29788__$1;
(statearr_29808_29832[(2)] = inst_29771);

(statearr_29808_29832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29789 === (8))){
var inst_29752 = (state_29788[(9)]);
var inst_29748 = (state_29788[(8)]);
var inst_29756 = (state_29788[(10)]);
var inst_29761 = inst_29748.push(inst_29752);
var tmp29805 = inst_29748;
var inst_29748__$1 = tmp29805;
var inst_29749 = inst_29756;
var state_29788__$1 = (function (){var statearr_29809 = state_29788;
(statearr_29809[(7)] = inst_29749);

(statearr_29809[(8)] = inst_29748__$1);

(statearr_29809[(14)] = inst_29761);

return statearr_29809;
})();
var statearr_29810_29833 = state_29788__$1;
(statearr_29810_29833[(2)] = null);

(statearr_29810_29833[(1)] = (2));


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
});})(c__21529__auto___29819,out))
;
return ((function (switch__21467__auto__,c__21529__auto___29819,out){
return (function() {
var cljs$core$async$state_machine__21468__auto__ = null;
var cljs$core$async$state_machine__21468__auto____0 = (function (){
var statearr_29814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29814[(0)] = cljs$core$async$state_machine__21468__auto__);

(statearr_29814[(1)] = (1));

return statearr_29814;
});
var cljs$core$async$state_machine__21468__auto____1 = (function (state_29788){
while(true){
var ret_value__21469__auto__ = (function (){try{while(true){
var result__21470__auto__ = switch__21467__auto__.call(null,state_29788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21470__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21470__auto__;
}
break;
}
}catch (e29815){if((e29815 instanceof Object)){
var ex__21471__auto__ = e29815;
var statearr_29816_29834 = state_29788;
(statearr_29816_29834[(5)] = ex__21471__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21469__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29835 = state_29788;
state_29788 = G__29835;
continue;
} else {
return ret_value__21469__auto__;
}
break;
}
});
cljs$core$async$state_machine__21468__auto__ = function(state_29788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21468__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21468__auto____1.call(this,state_29788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21468__auto____0;
cljs$core$async$state_machine__21468__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21468__auto____1;
return cljs$core$async$state_machine__21468__auto__;
})()
;})(switch__21467__auto__,c__21529__auto___29819,out))
})();
var state__21531__auto__ = (function (){var statearr_29817 = f__21530__auto__.call(null);
(statearr_29817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21529__auto___29819);

return statearr_29817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21531__auto__);
});})(c__21529__auto___29819,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440697841439