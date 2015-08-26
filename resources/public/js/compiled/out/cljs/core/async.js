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
if(typeof cljs.core.async.t27032 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27032 = (function (f,fn_handler,meta27033){
this.f = f;
this.fn_handler = fn_handler;
this.meta27033 = meta27033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27032.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27034){
var self__ = this;
var _27034__$1 = this;
return self__.meta27033;
});

cljs.core.async.t27032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27034,meta27033__$1){
var self__ = this;
var _27034__$1 = this;
return (new cljs.core.async.t27032(self__.f,self__.fn_handler,meta27033__$1));
});

cljs.core.async.t27032.cljs$lang$type = true;

cljs.core.async.t27032.cljs$lang$ctorStr = "cljs.core.async/t27032";

cljs.core.async.t27032.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27032");
});

cljs.core.async.__GT_t27032 = (function cljs$core$async$fn_handler_$___GT_t27032(f__$1,fn_handler__$1,meta27033){
return (new cljs.core.async.t27032(f__$1,fn_handler__$1,meta27033));
});

}

return (new cljs.core.async.t27032(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27036 = buff;
if(G__27036){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__27036.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27036.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27036);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27036);
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
var G__27038 = arguments.length;
switch (G__27038) {
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
var G__27041 = arguments.length;
switch (G__27041) {
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
var val_27043 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27043);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27043,ret){
return (function (){
return fn1.call(null,val_27043);
});})(val_27043,ret))
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
var G__27045 = arguments.length;
switch (G__27045) {
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
var n__19006__auto___27047 = n;
var x_27048 = (0);
while(true){
if((x_27048 < n__19006__auto___27047)){
(a[x_27048] = (0));

var G__27049 = (x_27048 + (1));
x_27048 = G__27049;
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

var G__27050 = (i + (1));
i = G__27050;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27054 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27054 = (function (flag,alt_flag,meta27055){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27055 = meta27055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27056){
var self__ = this;
var _27056__$1 = this;
return self__.meta27055;
});})(flag))
;

cljs.core.async.t27054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27056,meta27055__$1){
var self__ = this;
var _27056__$1 = this;
return (new cljs.core.async.t27054(self__.flag,self__.alt_flag,meta27055__$1));
});})(flag))
;

cljs.core.async.t27054.cljs$lang$type = true;

cljs.core.async.t27054.cljs$lang$ctorStr = "cljs.core.async/t27054";

cljs.core.async.t27054.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27054");
});})(flag))
;

cljs.core.async.__GT_t27054 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27054(flag__$1,alt_flag__$1,meta27055){
return (new cljs.core.async.t27054(flag__$1,alt_flag__$1,meta27055));
});})(flag))
;

}

return (new cljs.core.async.t27054(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27060 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27060 = (function (cb,flag,alt_handler,meta27061){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27061 = meta27061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27062){
var self__ = this;
var _27062__$1 = this;
return self__.meta27061;
});

cljs.core.async.t27060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27062,meta27061__$1){
var self__ = this;
var _27062__$1 = this;
return (new cljs.core.async.t27060(self__.cb,self__.flag,self__.alt_handler,meta27061__$1));
});

cljs.core.async.t27060.cljs$lang$type = true;

cljs.core.async.t27060.cljs$lang$ctorStr = "cljs.core.async/t27060";

cljs.core.async.t27060.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27060");
});

cljs.core.async.__GT_t27060 = (function cljs$core$async$alt_handler_$___GT_t27060(cb__$1,flag__$1,alt_handler__$1,meta27061){
return (new cljs.core.async.t27060(cb__$1,flag__$1,alt_handler__$1,meta27061));
});

}

return (new cljs.core.async.t27060(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27063_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27063_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27064_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27064_SHARP_,port], null));
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
var G__27065 = (i + (1));
i = G__27065;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27068){
var map__27069 = p__27068;
var map__27069__$1 = ((cljs.core.seq_QMARK_.call(null,map__27069))?cljs.core.apply.call(null,cljs.core.hash_map,map__27069):map__27069);
var opts = map__27069__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27066){
var G__27067 = cljs.core.first.call(null,seq27066);
var seq27066__$1 = cljs.core.next.call(null,seq27066);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27067,seq27066__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27071 = arguments.length;
switch (G__27071) {
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
var c__21347__auto___27120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27120){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27120){
return (function (state_27095){
var state_val_27096 = (state_27095[(1)]);
if((state_val_27096 === (7))){
var inst_27091 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27097_27121 = state_27095__$1;
(statearr_27097_27121[(2)] = inst_27091);

(statearr_27097_27121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (1))){
var state_27095__$1 = state_27095;
var statearr_27098_27122 = state_27095__$1;
(statearr_27098_27122[(2)] = null);

(statearr_27098_27122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (4))){
var inst_27074 = (state_27095[(7)]);
var inst_27074__$1 = (state_27095[(2)]);
var inst_27075 = (inst_27074__$1 == null);
var state_27095__$1 = (function (){var statearr_27099 = state_27095;
(statearr_27099[(7)] = inst_27074__$1);

return statearr_27099;
})();
if(cljs.core.truth_(inst_27075)){
var statearr_27100_27123 = state_27095__$1;
(statearr_27100_27123[(1)] = (5));

} else {
var statearr_27101_27124 = state_27095__$1;
(statearr_27101_27124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (13))){
var state_27095__$1 = state_27095;
var statearr_27102_27125 = state_27095__$1;
(statearr_27102_27125[(2)] = null);

(statearr_27102_27125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (6))){
var inst_27074 = (state_27095[(7)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27095__$1,(11),to,inst_27074);
} else {
if((state_val_27096 === (3))){
var inst_27093 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27095__$1,inst_27093);
} else {
if((state_val_27096 === (12))){
var state_27095__$1 = state_27095;
var statearr_27103_27126 = state_27095__$1;
(statearr_27103_27126[(2)] = null);

(statearr_27103_27126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (2))){
var state_27095__$1 = state_27095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27095__$1,(4),from);
} else {
if((state_val_27096 === (11))){
var inst_27084 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
if(cljs.core.truth_(inst_27084)){
var statearr_27104_27127 = state_27095__$1;
(statearr_27104_27127[(1)] = (12));

} else {
var statearr_27105_27128 = state_27095__$1;
(statearr_27105_27128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (9))){
var state_27095__$1 = state_27095;
var statearr_27106_27129 = state_27095__$1;
(statearr_27106_27129[(2)] = null);

(statearr_27106_27129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (5))){
var state_27095__$1 = state_27095;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27107_27130 = state_27095__$1;
(statearr_27107_27130[(1)] = (8));

} else {
var statearr_27108_27131 = state_27095__$1;
(statearr_27108_27131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (14))){
var inst_27089 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27109_27132 = state_27095__$1;
(statearr_27109_27132[(2)] = inst_27089);

(statearr_27109_27132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (10))){
var inst_27081 = (state_27095[(2)]);
var state_27095__$1 = state_27095;
var statearr_27110_27133 = state_27095__$1;
(statearr_27110_27133[(2)] = inst_27081);

(statearr_27110_27133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27096 === (8))){
var inst_27078 = cljs.core.async.close_BANG_.call(null,to);
var state_27095__$1 = state_27095;
var statearr_27111_27134 = state_27095__$1;
(statearr_27111_27134[(2)] = inst_27078);

(statearr_27111_27134[(1)] = (10));


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
});})(c__21347__auto___27120))
;
return ((function (switch__21285__auto__,c__21347__auto___27120){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27115 = [null,null,null,null,null,null,null,null];
(statearr_27115[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27115[(1)] = (1));

return statearr_27115;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27095){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27116){if((e27116 instanceof Object)){
var ex__21289__auto__ = e27116;
var statearr_27117_27135 = state_27095;
(statearr_27117_27135[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27136 = state_27095;
state_27095 = G__27136;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27120))
})();
var state__21349__auto__ = (function (){var statearr_27118 = f__21348__auto__.call(null);
(statearr_27118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27120);

return statearr_27118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27120))
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
return (function (p__27320){
var vec__27321 = p__27320;
var v = cljs.core.nth.call(null,vec__27321,(0),null);
var p = cljs.core.nth.call(null,vec__27321,(1),null);
var job = vec__27321;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21347__auto___27503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27503,res,vec__27321,v,p,job,jobs,results){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27503,res,vec__27321,v,p,job,jobs,results){
return (function (state_27326){
var state_val_27327 = (state_27326[(1)]);
if((state_val_27327 === (2))){
var inst_27323 = (state_27326[(2)]);
var inst_27324 = cljs.core.async.close_BANG_.call(null,res);
var state_27326__$1 = (function (){var statearr_27328 = state_27326;
(statearr_27328[(7)] = inst_27323);

return statearr_27328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27326__$1,inst_27324);
} else {
if((state_val_27327 === (1))){
var state_27326__$1 = state_27326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27326__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21347__auto___27503,res,vec__27321,v,p,job,jobs,results))
;
return ((function (switch__21285__auto__,c__21347__auto___27503,res,vec__27321,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_27332 = [null,null,null,null,null,null,null,null];
(statearr_27332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_27332[(1)] = (1));

return statearr_27332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_27326){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27333){if((e27333 instanceof Object)){
var ex__21289__auto__ = e27333;
var statearr_27334_27504 = state_27326;
(statearr_27334_27504[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27505 = state_27326;
state_27326 = G__27505;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_27326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_27326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27503,res,vec__27321,v,p,job,jobs,results))
})();
var state__21349__auto__ = (function (){var statearr_27335 = f__21348__auto__.call(null);
(statearr_27335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27503);

return statearr_27335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27503,res,vec__27321,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27336){
var vec__27337 = p__27336;
var v = cljs.core.nth.call(null,vec__27337,(0),null);
var p = cljs.core.nth.call(null,vec__27337,(1),null);
var job = vec__27337;
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
var n__19006__auto___27506 = n;
var __27507 = (0);
while(true){
if((__27507 < n__19006__auto___27506)){
var G__27338_27508 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27338_27508) {
case "async":
var c__21347__auto___27510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27507,c__21347__auto___27510,G__27338_27508,n__19006__auto___27506,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (__27507,c__21347__auto___27510,G__27338_27508,n__19006__auto___27506,jobs,results,process,async){
return (function (state_27351){
var state_val_27352 = (state_27351[(1)]);
if((state_val_27352 === (7))){
var inst_27347 = (state_27351[(2)]);
var state_27351__$1 = state_27351;
var statearr_27353_27511 = state_27351__$1;
(statearr_27353_27511[(2)] = inst_27347);

(statearr_27353_27511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27352 === (6))){
var state_27351__$1 = state_27351;
var statearr_27354_27512 = state_27351__$1;
(statearr_27354_27512[(2)] = null);

(statearr_27354_27512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27352 === (5))){
var state_27351__$1 = state_27351;
var statearr_27355_27513 = state_27351__$1;
(statearr_27355_27513[(2)] = null);

(statearr_27355_27513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27352 === (4))){
var inst_27341 = (state_27351[(2)]);
var inst_27342 = async.call(null,inst_27341);
var state_27351__$1 = state_27351;
if(cljs.core.truth_(inst_27342)){
var statearr_27356_27514 = state_27351__$1;
(statearr_27356_27514[(1)] = (5));

} else {
var statearr_27357_27515 = state_27351__$1;
(statearr_27357_27515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27352 === (3))){
var inst_27349 = (state_27351[(2)]);
var state_27351__$1 = state_27351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27351__$1,inst_27349);
} else {
if((state_val_27352 === (2))){
var state_27351__$1 = state_27351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27351__$1,(4),jobs);
} else {
if((state_val_27352 === (1))){
var state_27351__$1 = state_27351;
var statearr_27358_27516 = state_27351__$1;
(statearr_27358_27516[(2)] = null);

(statearr_27358_27516[(1)] = (2));


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
});})(__27507,c__21347__auto___27510,G__27338_27508,n__19006__auto___27506,jobs,results,process,async))
;
return ((function (__27507,switch__21285__auto__,c__21347__auto___27510,G__27338_27508,n__19006__auto___27506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_27362 = [null,null,null,null,null,null,null];
(statearr_27362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_27362[(1)] = (1));

return statearr_27362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_27351){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27363){if((e27363 instanceof Object)){
var ex__21289__auto__ = e27363;
var statearr_27364_27517 = state_27351;
(statearr_27364_27517[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27518 = state_27351;
state_27351 = G__27518;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_27351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_27351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(__27507,switch__21285__auto__,c__21347__auto___27510,G__27338_27508,n__19006__auto___27506,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_27365 = f__21348__auto__.call(null);
(statearr_27365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27510);

return statearr_27365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(__27507,c__21347__auto___27510,G__27338_27508,n__19006__auto___27506,jobs,results,process,async))
);


break;
case "compute":
var c__21347__auto___27519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27507,c__21347__auto___27519,G__27338_27508,n__19006__auto___27506,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (__27507,c__21347__auto___27519,G__27338_27508,n__19006__auto___27506,jobs,results,process,async){
return (function (state_27378){
var state_val_27379 = (state_27378[(1)]);
if((state_val_27379 === (7))){
var inst_27374 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
var statearr_27380_27520 = state_27378__$1;
(statearr_27380_27520[(2)] = inst_27374);

(statearr_27380_27520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (6))){
var state_27378__$1 = state_27378;
var statearr_27381_27521 = state_27378__$1;
(statearr_27381_27521[(2)] = null);

(statearr_27381_27521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (5))){
var state_27378__$1 = state_27378;
var statearr_27382_27522 = state_27378__$1;
(statearr_27382_27522[(2)] = null);

(statearr_27382_27522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (4))){
var inst_27368 = (state_27378[(2)]);
var inst_27369 = process.call(null,inst_27368);
var state_27378__$1 = state_27378;
if(cljs.core.truth_(inst_27369)){
var statearr_27383_27523 = state_27378__$1;
(statearr_27383_27523[(1)] = (5));

} else {
var statearr_27384_27524 = state_27378__$1;
(statearr_27384_27524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (3))){
var inst_27376 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27378__$1,inst_27376);
} else {
if((state_val_27379 === (2))){
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27378__$1,(4),jobs);
} else {
if((state_val_27379 === (1))){
var state_27378__$1 = state_27378;
var statearr_27385_27525 = state_27378__$1;
(statearr_27385_27525[(2)] = null);

(statearr_27385_27525[(1)] = (2));


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
});})(__27507,c__21347__auto___27519,G__27338_27508,n__19006__auto___27506,jobs,results,process,async))
;
return ((function (__27507,switch__21285__auto__,c__21347__auto___27519,G__27338_27508,n__19006__auto___27506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_27389 = [null,null,null,null,null,null,null];
(statearr_27389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_27389[(1)] = (1));

return statearr_27389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_27378){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object)){
var ex__21289__auto__ = e27390;
var statearr_27391_27526 = state_27378;
(statearr_27391_27526[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27527 = state_27378;
state_27378 = G__27527;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_27378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_27378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(__27507,switch__21285__auto__,c__21347__auto___27519,G__27338_27508,n__19006__auto___27506,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_27392 = f__21348__auto__.call(null);
(statearr_27392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27519);

return statearr_27392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(__27507,c__21347__auto___27519,G__27338_27508,n__19006__auto___27506,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27528 = (__27507 + (1));
__27507 = G__27528;
continue;
} else {
}
break;
}

var c__21347__auto___27529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27529,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27529,jobs,results,process,async){
return (function (state_27414){
var state_val_27415 = (state_27414[(1)]);
if((state_val_27415 === (9))){
var inst_27407 = (state_27414[(2)]);
var state_27414__$1 = (function (){var statearr_27416 = state_27414;
(statearr_27416[(7)] = inst_27407);

return statearr_27416;
})();
var statearr_27417_27530 = state_27414__$1;
(statearr_27417_27530[(2)] = null);

(statearr_27417_27530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (8))){
var inst_27400 = (state_27414[(8)]);
var inst_27405 = (state_27414[(2)]);
var state_27414__$1 = (function (){var statearr_27418 = state_27414;
(statearr_27418[(9)] = inst_27405);

return statearr_27418;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27414__$1,(9),results,inst_27400);
} else {
if((state_val_27415 === (7))){
var inst_27410 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27419_27531 = state_27414__$1;
(statearr_27419_27531[(2)] = inst_27410);

(statearr_27419_27531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (6))){
var inst_27395 = (state_27414[(10)]);
var inst_27400 = (state_27414[(8)]);
var inst_27400__$1 = cljs.core.async.chan.call(null,(1));
var inst_27401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27402 = [inst_27395,inst_27400__$1];
var inst_27403 = (new cljs.core.PersistentVector(null,2,(5),inst_27401,inst_27402,null));
var state_27414__$1 = (function (){var statearr_27420 = state_27414;
(statearr_27420[(8)] = inst_27400__$1);

return statearr_27420;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27414__$1,(8),jobs,inst_27403);
} else {
if((state_val_27415 === (5))){
var inst_27398 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27414__$1 = state_27414;
var statearr_27421_27532 = state_27414__$1;
(statearr_27421_27532[(2)] = inst_27398);

(statearr_27421_27532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (4))){
var inst_27395 = (state_27414[(10)]);
var inst_27395__$1 = (state_27414[(2)]);
var inst_27396 = (inst_27395__$1 == null);
var state_27414__$1 = (function (){var statearr_27422 = state_27414;
(statearr_27422[(10)] = inst_27395__$1);

return statearr_27422;
})();
if(cljs.core.truth_(inst_27396)){
var statearr_27423_27533 = state_27414__$1;
(statearr_27423_27533[(1)] = (5));

} else {
var statearr_27424_27534 = state_27414__$1;
(statearr_27424_27534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (3))){
var inst_27412 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27414__$1,inst_27412);
} else {
if((state_val_27415 === (2))){
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27414__$1,(4),from);
} else {
if((state_val_27415 === (1))){
var state_27414__$1 = state_27414;
var statearr_27425_27535 = state_27414__$1;
(statearr_27425_27535[(2)] = null);

(statearr_27425_27535[(1)] = (2));


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
});})(c__21347__auto___27529,jobs,results,process,async))
;
return ((function (switch__21285__auto__,c__21347__auto___27529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_27429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_27429[(1)] = (1));

return statearr_27429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_27414){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27430){if((e27430 instanceof Object)){
var ex__21289__auto__ = e27430;
var statearr_27431_27536 = state_27414;
(statearr_27431_27536[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27537 = state_27414;
state_27414 = G__27537;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_27414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_27414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27529,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_27432 = f__21348__auto__.call(null);
(statearr_27432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27529);

return statearr_27432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27529,jobs,results,process,async))
);


var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__,jobs,results,process,async){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__,jobs,results,process,async){
return (function (state_27470){
var state_val_27471 = (state_27470[(1)]);
if((state_val_27471 === (7))){
var inst_27466 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
var statearr_27472_27538 = state_27470__$1;
(statearr_27472_27538[(2)] = inst_27466);

(statearr_27472_27538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (20))){
var state_27470__$1 = state_27470;
var statearr_27473_27539 = state_27470__$1;
(statearr_27473_27539[(2)] = null);

(statearr_27473_27539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (1))){
var state_27470__$1 = state_27470;
var statearr_27474_27540 = state_27470__$1;
(statearr_27474_27540[(2)] = null);

(statearr_27474_27540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (4))){
var inst_27435 = (state_27470[(7)]);
var inst_27435__$1 = (state_27470[(2)]);
var inst_27436 = (inst_27435__$1 == null);
var state_27470__$1 = (function (){var statearr_27475 = state_27470;
(statearr_27475[(7)] = inst_27435__$1);

return statearr_27475;
})();
if(cljs.core.truth_(inst_27436)){
var statearr_27476_27541 = state_27470__$1;
(statearr_27476_27541[(1)] = (5));

} else {
var statearr_27477_27542 = state_27470__$1;
(statearr_27477_27542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (15))){
var inst_27448 = (state_27470[(8)]);
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27470__$1,(18),to,inst_27448);
} else {
if((state_val_27471 === (21))){
var inst_27461 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
var statearr_27478_27543 = state_27470__$1;
(statearr_27478_27543[(2)] = inst_27461);

(statearr_27478_27543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (13))){
var inst_27463 = (state_27470[(2)]);
var state_27470__$1 = (function (){var statearr_27479 = state_27470;
(statearr_27479[(9)] = inst_27463);

return statearr_27479;
})();
var statearr_27480_27544 = state_27470__$1;
(statearr_27480_27544[(2)] = null);

(statearr_27480_27544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (6))){
var inst_27435 = (state_27470[(7)]);
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27470__$1,(11),inst_27435);
} else {
if((state_val_27471 === (17))){
var inst_27456 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
if(cljs.core.truth_(inst_27456)){
var statearr_27481_27545 = state_27470__$1;
(statearr_27481_27545[(1)] = (19));

} else {
var statearr_27482_27546 = state_27470__$1;
(statearr_27482_27546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (3))){
var inst_27468 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27470__$1,inst_27468);
} else {
if((state_val_27471 === (12))){
var inst_27445 = (state_27470[(10)]);
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27470__$1,(14),inst_27445);
} else {
if((state_val_27471 === (2))){
var state_27470__$1 = state_27470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27470__$1,(4),results);
} else {
if((state_val_27471 === (19))){
var state_27470__$1 = state_27470;
var statearr_27483_27547 = state_27470__$1;
(statearr_27483_27547[(2)] = null);

(statearr_27483_27547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (11))){
var inst_27445 = (state_27470[(2)]);
var state_27470__$1 = (function (){var statearr_27484 = state_27470;
(statearr_27484[(10)] = inst_27445);

return statearr_27484;
})();
var statearr_27485_27548 = state_27470__$1;
(statearr_27485_27548[(2)] = null);

(statearr_27485_27548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (9))){
var state_27470__$1 = state_27470;
var statearr_27486_27549 = state_27470__$1;
(statearr_27486_27549[(2)] = null);

(statearr_27486_27549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (5))){
var state_27470__$1 = state_27470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27487_27550 = state_27470__$1;
(statearr_27487_27550[(1)] = (8));

} else {
var statearr_27488_27551 = state_27470__$1;
(statearr_27488_27551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (14))){
var inst_27450 = (state_27470[(11)]);
var inst_27448 = (state_27470[(8)]);
var inst_27448__$1 = (state_27470[(2)]);
var inst_27449 = (inst_27448__$1 == null);
var inst_27450__$1 = cljs.core.not.call(null,inst_27449);
var state_27470__$1 = (function (){var statearr_27489 = state_27470;
(statearr_27489[(11)] = inst_27450__$1);

(statearr_27489[(8)] = inst_27448__$1);

return statearr_27489;
})();
if(inst_27450__$1){
var statearr_27490_27552 = state_27470__$1;
(statearr_27490_27552[(1)] = (15));

} else {
var statearr_27491_27553 = state_27470__$1;
(statearr_27491_27553[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (16))){
var inst_27450 = (state_27470[(11)]);
var state_27470__$1 = state_27470;
var statearr_27492_27554 = state_27470__$1;
(statearr_27492_27554[(2)] = inst_27450);

(statearr_27492_27554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (10))){
var inst_27442 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
var statearr_27493_27555 = state_27470__$1;
(statearr_27493_27555[(2)] = inst_27442);

(statearr_27493_27555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (18))){
var inst_27453 = (state_27470[(2)]);
var state_27470__$1 = state_27470;
var statearr_27494_27556 = state_27470__$1;
(statearr_27494_27556[(2)] = inst_27453);

(statearr_27494_27556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27471 === (8))){
var inst_27439 = cljs.core.async.close_BANG_.call(null,to);
var state_27470__$1 = state_27470;
var statearr_27495_27557 = state_27470__$1;
(statearr_27495_27557[(2)] = inst_27439);

(statearr_27495_27557[(1)] = (10));


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
});})(c__21347__auto__,jobs,results,process,async))
;
return ((function (switch__21285__auto__,c__21347__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_27499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__);

(statearr_27499[(1)] = (1));

return statearr_27499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1 = (function (state_27470){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27500){if((e27500 instanceof Object)){
var ex__21289__auto__ = e27500;
var statearr_27501_27558 = state_27470;
(statearr_27501_27558[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27559 = state_27470;
state_27470 = G__27559;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__ = function(state_27470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1.call(this,state_27470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__,jobs,results,process,async))
})();
var state__21349__auto__ = (function (){var statearr_27502 = f__21348__auto__.call(null);
(statearr_27502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_27502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__,jobs,results,process,async))
);

return c__21347__auto__;
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
var G__27561 = arguments.length;
switch (G__27561) {
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
var G__27564 = arguments.length;
switch (G__27564) {
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
var G__27567 = arguments.length;
switch (G__27567) {
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
var c__21347__auto___27619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___27619,tc,fc){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___27619,tc,fc){
return (function (state_27593){
var state_val_27594 = (state_27593[(1)]);
if((state_val_27594 === (7))){
var inst_27589 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27595_27620 = state_27593__$1;
(statearr_27595_27620[(2)] = inst_27589);

(statearr_27595_27620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (1))){
var state_27593__$1 = state_27593;
var statearr_27596_27621 = state_27593__$1;
(statearr_27596_27621[(2)] = null);

(statearr_27596_27621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (4))){
var inst_27570 = (state_27593[(7)]);
var inst_27570__$1 = (state_27593[(2)]);
var inst_27571 = (inst_27570__$1 == null);
var state_27593__$1 = (function (){var statearr_27597 = state_27593;
(statearr_27597[(7)] = inst_27570__$1);

return statearr_27597;
})();
if(cljs.core.truth_(inst_27571)){
var statearr_27598_27622 = state_27593__$1;
(statearr_27598_27622[(1)] = (5));

} else {
var statearr_27599_27623 = state_27593__$1;
(statearr_27599_27623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (13))){
var state_27593__$1 = state_27593;
var statearr_27600_27624 = state_27593__$1;
(statearr_27600_27624[(2)] = null);

(statearr_27600_27624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (6))){
var inst_27570 = (state_27593[(7)]);
var inst_27576 = p.call(null,inst_27570);
var state_27593__$1 = state_27593;
if(cljs.core.truth_(inst_27576)){
var statearr_27601_27625 = state_27593__$1;
(statearr_27601_27625[(1)] = (9));

} else {
var statearr_27602_27626 = state_27593__$1;
(statearr_27602_27626[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (3))){
var inst_27591 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27593__$1,inst_27591);
} else {
if((state_val_27594 === (12))){
var state_27593__$1 = state_27593;
var statearr_27603_27627 = state_27593__$1;
(statearr_27603_27627[(2)] = null);

(statearr_27603_27627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (2))){
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27593__$1,(4),ch);
} else {
if((state_val_27594 === (11))){
var inst_27570 = (state_27593[(7)]);
var inst_27580 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27593__$1,(8),inst_27580,inst_27570);
} else {
if((state_val_27594 === (9))){
var state_27593__$1 = state_27593;
var statearr_27604_27628 = state_27593__$1;
(statearr_27604_27628[(2)] = tc);

(statearr_27604_27628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (5))){
var inst_27573 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27574 = cljs.core.async.close_BANG_.call(null,fc);
var state_27593__$1 = (function (){var statearr_27605 = state_27593;
(statearr_27605[(8)] = inst_27573);

return statearr_27605;
})();
var statearr_27606_27629 = state_27593__$1;
(statearr_27606_27629[(2)] = inst_27574);

(statearr_27606_27629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (14))){
var inst_27587 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
var statearr_27607_27630 = state_27593__$1;
(statearr_27607_27630[(2)] = inst_27587);

(statearr_27607_27630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (10))){
var state_27593__$1 = state_27593;
var statearr_27608_27631 = state_27593__$1;
(statearr_27608_27631[(2)] = fc);

(statearr_27608_27631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27594 === (8))){
var inst_27582 = (state_27593[(2)]);
var state_27593__$1 = state_27593;
if(cljs.core.truth_(inst_27582)){
var statearr_27609_27632 = state_27593__$1;
(statearr_27609_27632[(1)] = (12));

} else {
var statearr_27610_27633 = state_27593__$1;
(statearr_27610_27633[(1)] = (13));

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
});})(c__21347__auto___27619,tc,fc))
;
return ((function (switch__21285__auto__,c__21347__auto___27619,tc,fc){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27614 = [null,null,null,null,null,null,null,null,null];
(statearr_27614[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27614[(1)] = (1));

return statearr_27614;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27593){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27615){if((e27615 instanceof Object)){
var ex__21289__auto__ = e27615;
var statearr_27616_27634 = state_27593;
(statearr_27616_27634[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27635 = state_27593;
state_27593 = G__27635;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___27619,tc,fc))
})();
var state__21349__auto__ = (function (){var statearr_27617 = f__21348__auto__.call(null);
(statearr_27617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___27619);

return statearr_27617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___27619,tc,fc))
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
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_27682){
var state_val_27683 = (state_27682[(1)]);
if((state_val_27683 === (7))){
var inst_27678 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
var statearr_27684_27700 = state_27682__$1;
(statearr_27684_27700[(2)] = inst_27678);

(statearr_27684_27700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (6))){
var inst_27668 = (state_27682[(7)]);
var inst_27671 = (state_27682[(8)]);
var inst_27675 = f.call(null,inst_27668,inst_27671);
var inst_27668__$1 = inst_27675;
var state_27682__$1 = (function (){var statearr_27685 = state_27682;
(statearr_27685[(7)] = inst_27668__$1);

return statearr_27685;
})();
var statearr_27686_27701 = state_27682__$1;
(statearr_27686_27701[(2)] = null);

(statearr_27686_27701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (5))){
var inst_27668 = (state_27682[(7)]);
var state_27682__$1 = state_27682;
var statearr_27687_27702 = state_27682__$1;
(statearr_27687_27702[(2)] = inst_27668);

(statearr_27687_27702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (4))){
var inst_27671 = (state_27682[(8)]);
var inst_27671__$1 = (state_27682[(2)]);
var inst_27672 = (inst_27671__$1 == null);
var state_27682__$1 = (function (){var statearr_27688 = state_27682;
(statearr_27688[(8)] = inst_27671__$1);

return statearr_27688;
})();
if(cljs.core.truth_(inst_27672)){
var statearr_27689_27703 = state_27682__$1;
(statearr_27689_27703[(1)] = (5));

} else {
var statearr_27690_27704 = state_27682__$1;
(statearr_27690_27704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27683 === (3))){
var inst_27680 = (state_27682[(2)]);
var state_27682__$1 = state_27682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27682__$1,inst_27680);
} else {
if((state_val_27683 === (2))){
var state_27682__$1 = state_27682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27682__$1,(4),ch);
} else {
if((state_val_27683 === (1))){
var inst_27668 = init;
var state_27682__$1 = (function (){var statearr_27691 = state_27682;
(statearr_27691[(7)] = inst_27668);

return statearr_27691;
})();
var statearr_27692_27705 = state_27682__$1;
(statearr_27692_27705[(2)] = null);

(statearr_27692_27705[(1)] = (2));


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
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21286__auto____0 = (function (){
var statearr_27696 = [null,null,null,null,null,null,null,null,null];
(statearr_27696[(0)] = cljs$core$async$reduce_$_state_machine__21286__auto__);

(statearr_27696[(1)] = (1));

return statearr_27696;
});
var cljs$core$async$reduce_$_state_machine__21286__auto____1 = (function (state_27682){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27697){if((e27697 instanceof Object)){
var ex__21289__auto__ = e27697;
var statearr_27698_27706 = state_27682;
(statearr_27698_27706[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27707 = state_27682;
state_27682 = G__27707;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21286__auto__ = function(state_27682){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21286__auto____1.call(this,state_27682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21286__auto____0;
cljs$core$async$reduce_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21286__auto____1;
return cljs$core$async$reduce_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_27699 = f__21348__auto__.call(null);
(statearr_27699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_27699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
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
var G__27709 = arguments.length;
switch (G__27709) {
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
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_27734){
var state_val_27735 = (state_27734[(1)]);
if((state_val_27735 === (7))){
var inst_27716 = (state_27734[(2)]);
var state_27734__$1 = state_27734;
var statearr_27736_27760 = state_27734__$1;
(statearr_27736_27760[(2)] = inst_27716);

(statearr_27736_27760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (1))){
var inst_27710 = cljs.core.seq.call(null,coll);
var inst_27711 = inst_27710;
var state_27734__$1 = (function (){var statearr_27737 = state_27734;
(statearr_27737[(7)] = inst_27711);

return statearr_27737;
})();
var statearr_27738_27761 = state_27734__$1;
(statearr_27738_27761[(2)] = null);

(statearr_27738_27761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (4))){
var inst_27711 = (state_27734[(7)]);
var inst_27714 = cljs.core.first.call(null,inst_27711);
var state_27734__$1 = state_27734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27734__$1,(7),ch,inst_27714);
} else {
if((state_val_27735 === (13))){
var inst_27728 = (state_27734[(2)]);
var state_27734__$1 = state_27734;
var statearr_27739_27762 = state_27734__$1;
(statearr_27739_27762[(2)] = inst_27728);

(statearr_27739_27762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (6))){
var inst_27719 = (state_27734[(2)]);
var state_27734__$1 = state_27734;
if(cljs.core.truth_(inst_27719)){
var statearr_27740_27763 = state_27734__$1;
(statearr_27740_27763[(1)] = (8));

} else {
var statearr_27741_27764 = state_27734__$1;
(statearr_27741_27764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (3))){
var inst_27732 = (state_27734[(2)]);
var state_27734__$1 = state_27734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27734__$1,inst_27732);
} else {
if((state_val_27735 === (12))){
var state_27734__$1 = state_27734;
var statearr_27742_27765 = state_27734__$1;
(statearr_27742_27765[(2)] = null);

(statearr_27742_27765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (2))){
var inst_27711 = (state_27734[(7)]);
var state_27734__$1 = state_27734;
if(cljs.core.truth_(inst_27711)){
var statearr_27743_27766 = state_27734__$1;
(statearr_27743_27766[(1)] = (4));

} else {
var statearr_27744_27767 = state_27734__$1;
(statearr_27744_27767[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (11))){
var inst_27725 = cljs.core.async.close_BANG_.call(null,ch);
var state_27734__$1 = state_27734;
var statearr_27745_27768 = state_27734__$1;
(statearr_27745_27768[(2)] = inst_27725);

(statearr_27745_27768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (9))){
var state_27734__$1 = state_27734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27746_27769 = state_27734__$1;
(statearr_27746_27769[(1)] = (11));

} else {
var statearr_27747_27770 = state_27734__$1;
(statearr_27747_27770[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (5))){
var inst_27711 = (state_27734[(7)]);
var state_27734__$1 = state_27734;
var statearr_27748_27771 = state_27734__$1;
(statearr_27748_27771[(2)] = inst_27711);

(statearr_27748_27771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (10))){
var inst_27730 = (state_27734[(2)]);
var state_27734__$1 = state_27734;
var statearr_27749_27772 = state_27734__$1;
(statearr_27749_27772[(2)] = inst_27730);

(statearr_27749_27772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27735 === (8))){
var inst_27711 = (state_27734[(7)]);
var inst_27721 = cljs.core.next.call(null,inst_27711);
var inst_27711__$1 = inst_27721;
var state_27734__$1 = (function (){var statearr_27750 = state_27734;
(statearr_27750[(7)] = inst_27711__$1);

return statearr_27750;
})();
var statearr_27751_27773 = state_27734__$1;
(statearr_27751_27773[(2)] = null);

(statearr_27751_27773[(1)] = (2));


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
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_27755 = [null,null,null,null,null,null,null,null];
(statearr_27755[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_27755[(1)] = (1));

return statearr_27755;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_27734){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_27734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e27756){if((e27756 instanceof Object)){
var ex__21289__auto__ = e27756;
var statearr_27757_27774 = state_27734;
(statearr_27757_27774[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27775 = state_27734;
state_27734 = G__27775;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_27734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_27734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_27758 = f__21348__auto__.call(null);
(statearr_27758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
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

cljs.core.async.Mux = (function (){var obj27777 = {};
return obj27777;
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


cljs.core.async.Mult = (function (){var obj27779 = {};
return obj27779;
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
if(typeof cljs.core.async.t28001 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28001 = (function (cs,ch,mult,meta28002){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28002 = meta28002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28001.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28001.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28001.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28001.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28001.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28003){
var self__ = this;
var _28003__$1 = this;
return self__.meta28002;
});})(cs))
;

cljs.core.async.t28001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28003,meta28002__$1){
var self__ = this;
var _28003__$1 = this;
return (new cljs.core.async.t28001(self__.cs,self__.ch,self__.mult,meta28002__$1));
});})(cs))
;

cljs.core.async.t28001.cljs$lang$type = true;

cljs.core.async.t28001.cljs$lang$ctorStr = "cljs.core.async/t28001";

cljs.core.async.t28001.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28001");
});})(cs))
;

cljs.core.async.__GT_t28001 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28001(cs__$1,ch__$1,mult__$1,meta28002){
return (new cljs.core.async.t28001(cs__$1,ch__$1,mult__$1,meta28002));
});})(cs))
;

}

return (new cljs.core.async.t28001(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21347__auto___28222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28222,cs,m,dchan,dctr,done){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28222,cs,m,dchan,dctr,done){
return (function (state_28134){
var state_val_28135 = (state_28134[(1)]);
if((state_val_28135 === (7))){
var inst_28130 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28136_28223 = state_28134__$1;
(statearr_28136_28223[(2)] = inst_28130);

(statearr_28136_28223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (20))){
var inst_28035 = (state_28134[(7)]);
var inst_28045 = cljs.core.first.call(null,inst_28035);
var inst_28046 = cljs.core.nth.call(null,inst_28045,(0),null);
var inst_28047 = cljs.core.nth.call(null,inst_28045,(1),null);
var state_28134__$1 = (function (){var statearr_28137 = state_28134;
(statearr_28137[(8)] = inst_28046);

return statearr_28137;
})();
if(cljs.core.truth_(inst_28047)){
var statearr_28138_28224 = state_28134__$1;
(statearr_28138_28224[(1)] = (22));

} else {
var statearr_28139_28225 = state_28134__$1;
(statearr_28139_28225[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (27))){
var inst_28006 = (state_28134[(9)]);
var inst_28075 = (state_28134[(10)]);
var inst_28077 = (state_28134[(11)]);
var inst_28082 = (state_28134[(12)]);
var inst_28082__$1 = cljs.core._nth.call(null,inst_28075,inst_28077);
var inst_28083 = cljs.core.async.put_BANG_.call(null,inst_28082__$1,inst_28006,done);
var state_28134__$1 = (function (){var statearr_28140 = state_28134;
(statearr_28140[(12)] = inst_28082__$1);

return statearr_28140;
})();
if(cljs.core.truth_(inst_28083)){
var statearr_28141_28226 = state_28134__$1;
(statearr_28141_28226[(1)] = (30));

} else {
var statearr_28142_28227 = state_28134__$1;
(statearr_28142_28227[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (1))){
var state_28134__$1 = state_28134;
var statearr_28143_28228 = state_28134__$1;
(statearr_28143_28228[(2)] = null);

(statearr_28143_28228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (24))){
var inst_28035 = (state_28134[(7)]);
var inst_28052 = (state_28134[(2)]);
var inst_28053 = cljs.core.next.call(null,inst_28035);
var inst_28015 = inst_28053;
var inst_28016 = null;
var inst_28017 = (0);
var inst_28018 = (0);
var state_28134__$1 = (function (){var statearr_28144 = state_28134;
(statearr_28144[(13)] = inst_28018);

(statearr_28144[(14)] = inst_28052);

(statearr_28144[(15)] = inst_28017);

(statearr_28144[(16)] = inst_28015);

(statearr_28144[(17)] = inst_28016);

return statearr_28144;
})();
var statearr_28145_28229 = state_28134__$1;
(statearr_28145_28229[(2)] = null);

(statearr_28145_28229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (39))){
var state_28134__$1 = state_28134;
var statearr_28149_28230 = state_28134__$1;
(statearr_28149_28230[(2)] = null);

(statearr_28149_28230[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (4))){
var inst_28006 = (state_28134[(9)]);
var inst_28006__$1 = (state_28134[(2)]);
var inst_28007 = (inst_28006__$1 == null);
var state_28134__$1 = (function (){var statearr_28150 = state_28134;
(statearr_28150[(9)] = inst_28006__$1);

return statearr_28150;
})();
if(cljs.core.truth_(inst_28007)){
var statearr_28151_28231 = state_28134__$1;
(statearr_28151_28231[(1)] = (5));

} else {
var statearr_28152_28232 = state_28134__$1;
(statearr_28152_28232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (15))){
var inst_28018 = (state_28134[(13)]);
var inst_28017 = (state_28134[(15)]);
var inst_28015 = (state_28134[(16)]);
var inst_28016 = (state_28134[(17)]);
var inst_28031 = (state_28134[(2)]);
var inst_28032 = (inst_28018 + (1));
var tmp28146 = inst_28017;
var tmp28147 = inst_28015;
var tmp28148 = inst_28016;
var inst_28015__$1 = tmp28147;
var inst_28016__$1 = tmp28148;
var inst_28017__$1 = tmp28146;
var inst_28018__$1 = inst_28032;
var state_28134__$1 = (function (){var statearr_28153 = state_28134;
(statearr_28153[(13)] = inst_28018__$1);

(statearr_28153[(15)] = inst_28017__$1);

(statearr_28153[(16)] = inst_28015__$1);

(statearr_28153[(18)] = inst_28031);

(statearr_28153[(17)] = inst_28016__$1);

return statearr_28153;
})();
var statearr_28154_28233 = state_28134__$1;
(statearr_28154_28233[(2)] = null);

(statearr_28154_28233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (21))){
var inst_28056 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28158_28234 = state_28134__$1;
(statearr_28158_28234[(2)] = inst_28056);

(statearr_28158_28234[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (31))){
var inst_28082 = (state_28134[(12)]);
var inst_28086 = done.call(null,null);
var inst_28087 = cljs.core.async.untap_STAR_.call(null,m,inst_28082);
var state_28134__$1 = (function (){var statearr_28159 = state_28134;
(statearr_28159[(19)] = inst_28086);

return statearr_28159;
})();
var statearr_28160_28235 = state_28134__$1;
(statearr_28160_28235[(2)] = inst_28087);

(statearr_28160_28235[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (32))){
var inst_28074 = (state_28134[(20)]);
var inst_28076 = (state_28134[(21)]);
var inst_28075 = (state_28134[(10)]);
var inst_28077 = (state_28134[(11)]);
var inst_28089 = (state_28134[(2)]);
var inst_28090 = (inst_28077 + (1));
var tmp28155 = inst_28074;
var tmp28156 = inst_28076;
var tmp28157 = inst_28075;
var inst_28074__$1 = tmp28155;
var inst_28075__$1 = tmp28157;
var inst_28076__$1 = tmp28156;
var inst_28077__$1 = inst_28090;
var state_28134__$1 = (function (){var statearr_28161 = state_28134;
(statearr_28161[(22)] = inst_28089);

(statearr_28161[(20)] = inst_28074__$1);

(statearr_28161[(21)] = inst_28076__$1);

(statearr_28161[(10)] = inst_28075__$1);

(statearr_28161[(11)] = inst_28077__$1);

return statearr_28161;
})();
var statearr_28162_28236 = state_28134__$1;
(statearr_28162_28236[(2)] = null);

(statearr_28162_28236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (40))){
var inst_28102 = (state_28134[(23)]);
var inst_28106 = done.call(null,null);
var inst_28107 = cljs.core.async.untap_STAR_.call(null,m,inst_28102);
var state_28134__$1 = (function (){var statearr_28163 = state_28134;
(statearr_28163[(24)] = inst_28106);

return statearr_28163;
})();
var statearr_28164_28237 = state_28134__$1;
(statearr_28164_28237[(2)] = inst_28107);

(statearr_28164_28237[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (33))){
var inst_28093 = (state_28134[(25)]);
var inst_28095 = cljs.core.chunked_seq_QMARK_.call(null,inst_28093);
var state_28134__$1 = state_28134;
if(inst_28095){
var statearr_28165_28238 = state_28134__$1;
(statearr_28165_28238[(1)] = (36));

} else {
var statearr_28166_28239 = state_28134__$1;
(statearr_28166_28239[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (13))){
var inst_28025 = (state_28134[(26)]);
var inst_28028 = cljs.core.async.close_BANG_.call(null,inst_28025);
var state_28134__$1 = state_28134;
var statearr_28167_28240 = state_28134__$1;
(statearr_28167_28240[(2)] = inst_28028);

(statearr_28167_28240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (22))){
var inst_28046 = (state_28134[(8)]);
var inst_28049 = cljs.core.async.close_BANG_.call(null,inst_28046);
var state_28134__$1 = state_28134;
var statearr_28168_28241 = state_28134__$1;
(statearr_28168_28241[(2)] = inst_28049);

(statearr_28168_28241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (36))){
var inst_28093 = (state_28134[(25)]);
var inst_28097 = cljs.core.chunk_first.call(null,inst_28093);
var inst_28098 = cljs.core.chunk_rest.call(null,inst_28093);
var inst_28099 = cljs.core.count.call(null,inst_28097);
var inst_28074 = inst_28098;
var inst_28075 = inst_28097;
var inst_28076 = inst_28099;
var inst_28077 = (0);
var state_28134__$1 = (function (){var statearr_28169 = state_28134;
(statearr_28169[(20)] = inst_28074);

(statearr_28169[(21)] = inst_28076);

(statearr_28169[(10)] = inst_28075);

(statearr_28169[(11)] = inst_28077);

return statearr_28169;
})();
var statearr_28170_28242 = state_28134__$1;
(statearr_28170_28242[(2)] = null);

(statearr_28170_28242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (41))){
var inst_28093 = (state_28134[(25)]);
var inst_28109 = (state_28134[(2)]);
var inst_28110 = cljs.core.next.call(null,inst_28093);
var inst_28074 = inst_28110;
var inst_28075 = null;
var inst_28076 = (0);
var inst_28077 = (0);
var state_28134__$1 = (function (){var statearr_28171 = state_28134;
(statearr_28171[(20)] = inst_28074);

(statearr_28171[(21)] = inst_28076);

(statearr_28171[(10)] = inst_28075);

(statearr_28171[(11)] = inst_28077);

(statearr_28171[(27)] = inst_28109);

return statearr_28171;
})();
var statearr_28172_28243 = state_28134__$1;
(statearr_28172_28243[(2)] = null);

(statearr_28172_28243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (43))){
var state_28134__$1 = state_28134;
var statearr_28173_28244 = state_28134__$1;
(statearr_28173_28244[(2)] = null);

(statearr_28173_28244[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (29))){
var inst_28118 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28174_28245 = state_28134__$1;
(statearr_28174_28245[(2)] = inst_28118);

(statearr_28174_28245[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (44))){
var inst_28127 = (state_28134[(2)]);
var state_28134__$1 = (function (){var statearr_28175 = state_28134;
(statearr_28175[(28)] = inst_28127);

return statearr_28175;
})();
var statearr_28176_28246 = state_28134__$1;
(statearr_28176_28246[(2)] = null);

(statearr_28176_28246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (6))){
var inst_28066 = (state_28134[(29)]);
var inst_28065 = cljs.core.deref.call(null,cs);
var inst_28066__$1 = cljs.core.keys.call(null,inst_28065);
var inst_28067 = cljs.core.count.call(null,inst_28066__$1);
var inst_28068 = cljs.core.reset_BANG_.call(null,dctr,inst_28067);
var inst_28073 = cljs.core.seq.call(null,inst_28066__$1);
var inst_28074 = inst_28073;
var inst_28075 = null;
var inst_28076 = (0);
var inst_28077 = (0);
var state_28134__$1 = (function (){var statearr_28177 = state_28134;
(statearr_28177[(20)] = inst_28074);

(statearr_28177[(21)] = inst_28076);

(statearr_28177[(10)] = inst_28075);

(statearr_28177[(29)] = inst_28066__$1);

(statearr_28177[(30)] = inst_28068);

(statearr_28177[(11)] = inst_28077);

return statearr_28177;
})();
var statearr_28178_28247 = state_28134__$1;
(statearr_28178_28247[(2)] = null);

(statearr_28178_28247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (28))){
var inst_28074 = (state_28134[(20)]);
var inst_28093 = (state_28134[(25)]);
var inst_28093__$1 = cljs.core.seq.call(null,inst_28074);
var state_28134__$1 = (function (){var statearr_28179 = state_28134;
(statearr_28179[(25)] = inst_28093__$1);

return statearr_28179;
})();
if(inst_28093__$1){
var statearr_28180_28248 = state_28134__$1;
(statearr_28180_28248[(1)] = (33));

} else {
var statearr_28181_28249 = state_28134__$1;
(statearr_28181_28249[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (25))){
var inst_28076 = (state_28134[(21)]);
var inst_28077 = (state_28134[(11)]);
var inst_28079 = (inst_28077 < inst_28076);
var inst_28080 = inst_28079;
var state_28134__$1 = state_28134;
if(cljs.core.truth_(inst_28080)){
var statearr_28182_28250 = state_28134__$1;
(statearr_28182_28250[(1)] = (27));

} else {
var statearr_28183_28251 = state_28134__$1;
(statearr_28183_28251[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (34))){
var state_28134__$1 = state_28134;
var statearr_28184_28252 = state_28134__$1;
(statearr_28184_28252[(2)] = null);

(statearr_28184_28252[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (17))){
var state_28134__$1 = state_28134;
var statearr_28185_28253 = state_28134__$1;
(statearr_28185_28253[(2)] = null);

(statearr_28185_28253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (3))){
var inst_28132 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28134__$1,inst_28132);
} else {
if((state_val_28135 === (12))){
var inst_28061 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28186_28254 = state_28134__$1;
(statearr_28186_28254[(2)] = inst_28061);

(statearr_28186_28254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (2))){
var state_28134__$1 = state_28134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28134__$1,(4),ch);
} else {
if((state_val_28135 === (23))){
var state_28134__$1 = state_28134;
var statearr_28187_28255 = state_28134__$1;
(statearr_28187_28255[(2)] = null);

(statearr_28187_28255[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (35))){
var inst_28116 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28188_28256 = state_28134__$1;
(statearr_28188_28256[(2)] = inst_28116);

(statearr_28188_28256[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (19))){
var inst_28035 = (state_28134[(7)]);
var inst_28039 = cljs.core.chunk_first.call(null,inst_28035);
var inst_28040 = cljs.core.chunk_rest.call(null,inst_28035);
var inst_28041 = cljs.core.count.call(null,inst_28039);
var inst_28015 = inst_28040;
var inst_28016 = inst_28039;
var inst_28017 = inst_28041;
var inst_28018 = (0);
var state_28134__$1 = (function (){var statearr_28189 = state_28134;
(statearr_28189[(13)] = inst_28018);

(statearr_28189[(15)] = inst_28017);

(statearr_28189[(16)] = inst_28015);

(statearr_28189[(17)] = inst_28016);

return statearr_28189;
})();
var statearr_28190_28257 = state_28134__$1;
(statearr_28190_28257[(2)] = null);

(statearr_28190_28257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (11))){
var inst_28015 = (state_28134[(16)]);
var inst_28035 = (state_28134[(7)]);
var inst_28035__$1 = cljs.core.seq.call(null,inst_28015);
var state_28134__$1 = (function (){var statearr_28191 = state_28134;
(statearr_28191[(7)] = inst_28035__$1);

return statearr_28191;
})();
if(inst_28035__$1){
var statearr_28192_28258 = state_28134__$1;
(statearr_28192_28258[(1)] = (16));

} else {
var statearr_28193_28259 = state_28134__$1;
(statearr_28193_28259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (9))){
var inst_28063 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28194_28260 = state_28134__$1;
(statearr_28194_28260[(2)] = inst_28063);

(statearr_28194_28260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (5))){
var inst_28013 = cljs.core.deref.call(null,cs);
var inst_28014 = cljs.core.seq.call(null,inst_28013);
var inst_28015 = inst_28014;
var inst_28016 = null;
var inst_28017 = (0);
var inst_28018 = (0);
var state_28134__$1 = (function (){var statearr_28195 = state_28134;
(statearr_28195[(13)] = inst_28018);

(statearr_28195[(15)] = inst_28017);

(statearr_28195[(16)] = inst_28015);

(statearr_28195[(17)] = inst_28016);

return statearr_28195;
})();
var statearr_28196_28261 = state_28134__$1;
(statearr_28196_28261[(2)] = null);

(statearr_28196_28261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (14))){
var state_28134__$1 = state_28134;
var statearr_28197_28262 = state_28134__$1;
(statearr_28197_28262[(2)] = null);

(statearr_28197_28262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (45))){
var inst_28124 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28198_28263 = state_28134__$1;
(statearr_28198_28263[(2)] = inst_28124);

(statearr_28198_28263[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (26))){
var inst_28066 = (state_28134[(29)]);
var inst_28120 = (state_28134[(2)]);
var inst_28121 = cljs.core.seq.call(null,inst_28066);
var state_28134__$1 = (function (){var statearr_28199 = state_28134;
(statearr_28199[(31)] = inst_28120);

return statearr_28199;
})();
if(inst_28121){
var statearr_28200_28264 = state_28134__$1;
(statearr_28200_28264[(1)] = (42));

} else {
var statearr_28201_28265 = state_28134__$1;
(statearr_28201_28265[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (16))){
var inst_28035 = (state_28134[(7)]);
var inst_28037 = cljs.core.chunked_seq_QMARK_.call(null,inst_28035);
var state_28134__$1 = state_28134;
if(inst_28037){
var statearr_28202_28266 = state_28134__$1;
(statearr_28202_28266[(1)] = (19));

} else {
var statearr_28203_28267 = state_28134__$1;
(statearr_28203_28267[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (38))){
var inst_28113 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28204_28268 = state_28134__$1;
(statearr_28204_28268[(2)] = inst_28113);

(statearr_28204_28268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (30))){
var state_28134__$1 = state_28134;
var statearr_28205_28269 = state_28134__$1;
(statearr_28205_28269[(2)] = null);

(statearr_28205_28269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (10))){
var inst_28018 = (state_28134[(13)]);
var inst_28016 = (state_28134[(17)]);
var inst_28024 = cljs.core._nth.call(null,inst_28016,inst_28018);
var inst_28025 = cljs.core.nth.call(null,inst_28024,(0),null);
var inst_28026 = cljs.core.nth.call(null,inst_28024,(1),null);
var state_28134__$1 = (function (){var statearr_28206 = state_28134;
(statearr_28206[(26)] = inst_28025);

return statearr_28206;
})();
if(cljs.core.truth_(inst_28026)){
var statearr_28207_28270 = state_28134__$1;
(statearr_28207_28270[(1)] = (13));

} else {
var statearr_28208_28271 = state_28134__$1;
(statearr_28208_28271[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (18))){
var inst_28059 = (state_28134[(2)]);
var state_28134__$1 = state_28134;
var statearr_28209_28272 = state_28134__$1;
(statearr_28209_28272[(2)] = inst_28059);

(statearr_28209_28272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (42))){
var state_28134__$1 = state_28134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28134__$1,(45),dchan);
} else {
if((state_val_28135 === (37))){
var inst_28102 = (state_28134[(23)]);
var inst_28006 = (state_28134[(9)]);
var inst_28093 = (state_28134[(25)]);
var inst_28102__$1 = cljs.core.first.call(null,inst_28093);
var inst_28103 = cljs.core.async.put_BANG_.call(null,inst_28102__$1,inst_28006,done);
var state_28134__$1 = (function (){var statearr_28210 = state_28134;
(statearr_28210[(23)] = inst_28102__$1);

return statearr_28210;
})();
if(cljs.core.truth_(inst_28103)){
var statearr_28211_28273 = state_28134__$1;
(statearr_28211_28273[(1)] = (39));

} else {
var statearr_28212_28274 = state_28134__$1;
(statearr_28212_28274[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28135 === (8))){
var inst_28018 = (state_28134[(13)]);
var inst_28017 = (state_28134[(15)]);
var inst_28020 = (inst_28018 < inst_28017);
var inst_28021 = inst_28020;
var state_28134__$1 = state_28134;
if(cljs.core.truth_(inst_28021)){
var statearr_28213_28275 = state_28134__$1;
(statearr_28213_28275[(1)] = (10));

} else {
var statearr_28214_28276 = state_28134__$1;
(statearr_28214_28276[(1)] = (11));

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
});})(c__21347__auto___28222,cs,m,dchan,dctr,done))
;
return ((function (switch__21285__auto__,c__21347__auto___28222,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21286__auto__ = null;
var cljs$core$async$mult_$_state_machine__21286__auto____0 = (function (){
var statearr_28218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28218[(0)] = cljs$core$async$mult_$_state_machine__21286__auto__);

(statearr_28218[(1)] = (1));

return statearr_28218;
});
var cljs$core$async$mult_$_state_machine__21286__auto____1 = (function (state_28134){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28219){if((e28219 instanceof Object)){
var ex__21289__auto__ = e28219;
var statearr_28220_28277 = state_28134;
(statearr_28220_28277[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28278 = state_28134;
state_28134 = G__28278;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21286__auto__ = function(state_28134){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21286__auto____1.call(this,state_28134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21286__auto____0;
cljs$core$async$mult_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21286__auto____1;
return cljs$core$async$mult_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28222,cs,m,dchan,dctr,done))
})();
var state__21349__auto__ = (function (){var statearr_28221 = f__21348__auto__.call(null);
(statearr_28221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28222);

return statearr_28221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28222,cs,m,dchan,dctr,done))
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
var G__28280 = arguments.length;
switch (G__28280) {
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

cljs.core.async.Mix = (function (){var obj28283 = {};
return obj28283;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28288){
var map__28289 = p__28288;
var map__28289__$1 = ((cljs.core.seq_QMARK_.call(null,map__28289))?cljs.core.apply.call(null,cljs.core.hash_map,map__28289):map__28289);
var opts = map__28289__$1;
var statearr_28290_28293 = state;
(statearr_28290_28293[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28289,map__28289__$1,opts){
return (function (val){
var statearr_28291_28294 = state;
(statearr_28291_28294[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28289,map__28289__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28292_28295 = state;
(statearr_28292_28295[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28284){
var G__28285 = cljs.core.first.call(null,seq28284);
var seq28284__$1 = cljs.core.next.call(null,seq28284);
var G__28286 = cljs.core.first.call(null,seq28284__$1);
var seq28284__$2 = cljs.core.next.call(null,seq28284__$1);
var G__28287 = cljs.core.first.call(null,seq28284__$2);
var seq28284__$3 = cljs.core.next.call(null,seq28284__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28285,G__28286,G__28287,seq28284__$3);
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
if(typeof cljs.core.async.t28415 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28415 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28416){
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
this.meta28416 = meta28416;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28415.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t28415.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28415.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28415.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28415.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28415.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t28415.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28415.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28415.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28417){
var self__ = this;
var _28417__$1 = this;
return self__.meta28416;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28417,meta28416__$1){
var self__ = this;
var _28417__$1 = this;
return (new cljs.core.async.t28415(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28416__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t28415.cljs$lang$type = true;

cljs.core.async.t28415.cljs$lang$ctorStr = "cljs.core.async/t28415";

cljs.core.async.t28415.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28415");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t28415 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t28415(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28416){
return (new cljs.core.async.t28415(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28416));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t28415(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21347__auto___28534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28487){
var state_val_28488 = (state_28487[(1)]);
if((state_val_28488 === (7))){
var inst_28431 = (state_28487[(7)]);
var inst_28436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28431);
var state_28487__$1 = state_28487;
var statearr_28489_28535 = state_28487__$1;
(statearr_28489_28535[(2)] = inst_28436);

(statearr_28489_28535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (20))){
var inst_28446 = (state_28487[(8)]);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28487__$1,(23),out,inst_28446);
} else {
if((state_val_28488 === (1))){
var inst_28421 = (state_28487[(9)]);
var inst_28421__$1 = calc_state.call(null);
var inst_28422 = cljs.core.seq_QMARK_.call(null,inst_28421__$1);
var state_28487__$1 = (function (){var statearr_28490 = state_28487;
(statearr_28490[(9)] = inst_28421__$1);

return statearr_28490;
})();
if(inst_28422){
var statearr_28491_28536 = state_28487__$1;
(statearr_28491_28536[(1)] = (2));

} else {
var statearr_28492_28537 = state_28487__$1;
(statearr_28492_28537[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (24))){
var inst_28439 = (state_28487[(10)]);
var inst_28431 = inst_28439;
var state_28487__$1 = (function (){var statearr_28493 = state_28487;
(statearr_28493[(7)] = inst_28431);

return statearr_28493;
})();
var statearr_28494_28538 = state_28487__$1;
(statearr_28494_28538[(2)] = null);

(statearr_28494_28538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (4))){
var inst_28421 = (state_28487[(9)]);
var inst_28427 = (state_28487[(2)]);
var inst_28428 = cljs.core.get.call(null,inst_28427,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28429 = cljs.core.get.call(null,inst_28427,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28430 = cljs.core.get.call(null,inst_28427,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28431 = inst_28421;
var state_28487__$1 = (function (){var statearr_28495 = state_28487;
(statearr_28495[(11)] = inst_28428);

(statearr_28495[(12)] = inst_28429);

(statearr_28495[(13)] = inst_28430);

(statearr_28495[(7)] = inst_28431);

return statearr_28495;
})();
var statearr_28496_28539 = state_28487__$1;
(statearr_28496_28539[(2)] = null);

(statearr_28496_28539[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (15))){
var state_28487__$1 = state_28487;
var statearr_28497_28540 = state_28487__$1;
(statearr_28497_28540[(2)] = null);

(statearr_28497_28540[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (21))){
var inst_28439 = (state_28487[(10)]);
var inst_28431 = inst_28439;
var state_28487__$1 = (function (){var statearr_28498 = state_28487;
(statearr_28498[(7)] = inst_28431);

return statearr_28498;
})();
var statearr_28499_28541 = state_28487__$1;
(statearr_28499_28541[(2)] = null);

(statearr_28499_28541[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (13))){
var inst_28483 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28500_28542 = state_28487__$1;
(statearr_28500_28542[(2)] = inst_28483);

(statearr_28500_28542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (22))){
var inst_28481 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28501_28543 = state_28487__$1;
(statearr_28501_28543[(2)] = inst_28481);

(statearr_28501_28543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (6))){
var inst_28485 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28487__$1,inst_28485);
} else {
if((state_val_28488 === (25))){
var state_28487__$1 = state_28487;
var statearr_28502_28544 = state_28487__$1;
(statearr_28502_28544[(2)] = null);

(statearr_28502_28544[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (17))){
var inst_28461 = (state_28487[(14)]);
var state_28487__$1 = state_28487;
var statearr_28503_28545 = state_28487__$1;
(statearr_28503_28545[(2)] = inst_28461);

(statearr_28503_28545[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (3))){
var inst_28421 = (state_28487[(9)]);
var state_28487__$1 = state_28487;
var statearr_28504_28546 = state_28487__$1;
(statearr_28504_28546[(2)] = inst_28421);

(statearr_28504_28546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (12))){
var inst_28461 = (state_28487[(14)]);
var inst_28447 = (state_28487[(15)]);
var inst_28442 = (state_28487[(16)]);
var inst_28461__$1 = inst_28442.call(null,inst_28447);
var state_28487__$1 = (function (){var statearr_28505 = state_28487;
(statearr_28505[(14)] = inst_28461__$1);

return statearr_28505;
})();
if(cljs.core.truth_(inst_28461__$1)){
var statearr_28506_28547 = state_28487__$1;
(statearr_28506_28547[(1)] = (17));

} else {
var statearr_28507_28548 = state_28487__$1;
(statearr_28507_28548[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (2))){
var inst_28421 = (state_28487[(9)]);
var inst_28424 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28421);
var state_28487__$1 = state_28487;
var statearr_28508_28549 = state_28487__$1;
(statearr_28508_28549[(2)] = inst_28424);

(statearr_28508_28549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (23))){
var inst_28472 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
if(cljs.core.truth_(inst_28472)){
var statearr_28509_28550 = state_28487__$1;
(statearr_28509_28550[(1)] = (24));

} else {
var statearr_28510_28551 = state_28487__$1;
(statearr_28510_28551[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (19))){
var inst_28469 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
if(cljs.core.truth_(inst_28469)){
var statearr_28511_28552 = state_28487__$1;
(statearr_28511_28552[(1)] = (20));

} else {
var statearr_28512_28553 = state_28487__$1;
(statearr_28512_28553[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (11))){
var inst_28446 = (state_28487[(8)]);
var inst_28452 = (inst_28446 == null);
var state_28487__$1 = state_28487;
if(cljs.core.truth_(inst_28452)){
var statearr_28513_28554 = state_28487__$1;
(statearr_28513_28554[(1)] = (14));

} else {
var statearr_28514_28555 = state_28487__$1;
(statearr_28514_28555[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (9))){
var inst_28439 = (state_28487[(10)]);
var inst_28439__$1 = (state_28487[(2)]);
var inst_28440 = cljs.core.get.call(null,inst_28439__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28441 = cljs.core.get.call(null,inst_28439__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28442 = cljs.core.get.call(null,inst_28439__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28487__$1 = (function (){var statearr_28515 = state_28487;
(statearr_28515[(10)] = inst_28439__$1);

(statearr_28515[(17)] = inst_28441);

(statearr_28515[(16)] = inst_28442);

return statearr_28515;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28487__$1,(10),inst_28440);
} else {
if((state_val_28488 === (5))){
var inst_28431 = (state_28487[(7)]);
var inst_28434 = cljs.core.seq_QMARK_.call(null,inst_28431);
var state_28487__$1 = state_28487;
if(inst_28434){
var statearr_28516_28556 = state_28487__$1;
(statearr_28516_28556[(1)] = (7));

} else {
var statearr_28517_28557 = state_28487__$1;
(statearr_28517_28557[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (14))){
var inst_28447 = (state_28487[(15)]);
var inst_28454 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28447);
var state_28487__$1 = state_28487;
var statearr_28518_28558 = state_28487__$1;
(statearr_28518_28558[(2)] = inst_28454);

(statearr_28518_28558[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (26))){
var inst_28477 = (state_28487[(2)]);
var state_28487__$1 = state_28487;
var statearr_28519_28559 = state_28487__$1;
(statearr_28519_28559[(2)] = inst_28477);

(statearr_28519_28559[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (16))){
var inst_28457 = (state_28487[(2)]);
var inst_28458 = calc_state.call(null);
var inst_28431 = inst_28458;
var state_28487__$1 = (function (){var statearr_28520 = state_28487;
(statearr_28520[(18)] = inst_28457);

(statearr_28520[(7)] = inst_28431);

return statearr_28520;
})();
var statearr_28521_28560 = state_28487__$1;
(statearr_28521_28560[(2)] = null);

(statearr_28521_28560[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (10))){
var inst_28446 = (state_28487[(8)]);
var inst_28447 = (state_28487[(15)]);
var inst_28445 = (state_28487[(2)]);
var inst_28446__$1 = cljs.core.nth.call(null,inst_28445,(0),null);
var inst_28447__$1 = cljs.core.nth.call(null,inst_28445,(1),null);
var inst_28448 = (inst_28446__$1 == null);
var inst_28449 = cljs.core._EQ_.call(null,inst_28447__$1,change);
var inst_28450 = (inst_28448) || (inst_28449);
var state_28487__$1 = (function (){var statearr_28522 = state_28487;
(statearr_28522[(8)] = inst_28446__$1);

(statearr_28522[(15)] = inst_28447__$1);

return statearr_28522;
})();
if(cljs.core.truth_(inst_28450)){
var statearr_28523_28561 = state_28487__$1;
(statearr_28523_28561[(1)] = (11));

} else {
var statearr_28524_28562 = state_28487__$1;
(statearr_28524_28562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (18))){
var inst_28441 = (state_28487[(17)]);
var inst_28447 = (state_28487[(15)]);
var inst_28442 = (state_28487[(16)]);
var inst_28464 = cljs.core.empty_QMARK_.call(null,inst_28442);
var inst_28465 = inst_28441.call(null,inst_28447);
var inst_28466 = cljs.core.not.call(null,inst_28465);
var inst_28467 = (inst_28464) && (inst_28466);
var state_28487__$1 = state_28487;
var statearr_28525_28563 = state_28487__$1;
(statearr_28525_28563[(2)] = inst_28467);

(statearr_28525_28563[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28488 === (8))){
var inst_28431 = (state_28487[(7)]);
var state_28487__$1 = state_28487;
var statearr_28526_28564 = state_28487__$1;
(statearr_28526_28564[(2)] = inst_28431);

(statearr_28526_28564[(1)] = (9));


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
});})(c__21347__auto___28534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21285__auto__,c__21347__auto___28534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21286__auto__ = null;
var cljs$core$async$mix_$_state_machine__21286__auto____0 = (function (){
var statearr_28530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28530[(0)] = cljs$core$async$mix_$_state_machine__21286__auto__);

(statearr_28530[(1)] = (1));

return statearr_28530;
});
var cljs$core$async$mix_$_state_machine__21286__auto____1 = (function (state_28487){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28531){if((e28531 instanceof Object)){
var ex__21289__auto__ = e28531;
var statearr_28532_28565 = state_28487;
(statearr_28532_28565[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28566 = state_28487;
state_28487 = G__28566;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21286__auto__ = function(state_28487){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21286__auto____1.call(this,state_28487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21286__auto____0;
cljs$core$async$mix_$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21286__auto____1;
return cljs$core$async$mix_$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21349__auto__ = (function (){var statearr_28533 = f__21348__auto__.call(null);
(statearr_28533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28534);

return statearr_28533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj28568 = {};
return obj28568;
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
var G__28570 = arguments.length;
switch (G__28570) {
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
var G__28574 = arguments.length;
switch (G__28574) {
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
return (function (p1__28572_SHARP_){
if(cljs.core.truth_(p1__28572_SHARP_.call(null,topic))){
return p1__28572_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28572_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28575 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28575 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28576){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28576 = meta28576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28575.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28575.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28575.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t28575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28575.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28575.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28577){
var self__ = this;
var _28577__$1 = this;
return self__.meta28576;
});})(mults,ensure_mult))
;

cljs.core.async.t28575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28577,meta28576__$1){
var self__ = this;
var _28577__$1 = this;
return (new cljs.core.async.t28575(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28576__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28575.cljs$lang$type = true;

cljs.core.async.t28575.cljs$lang$ctorStr = "cljs.core.async/t28575";

cljs.core.async.t28575.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28575");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28575 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28575(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28576){
return (new cljs.core.async.t28575(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28576));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28575(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21347__auto___28698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28698,mults,ensure_mult,p){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28698,mults,ensure_mult,p){
return (function (state_28649){
var state_val_28650 = (state_28649[(1)]);
if((state_val_28650 === (7))){
var inst_28645 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28651_28699 = state_28649__$1;
(statearr_28651_28699[(2)] = inst_28645);

(statearr_28651_28699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (20))){
var state_28649__$1 = state_28649;
var statearr_28652_28700 = state_28649__$1;
(statearr_28652_28700[(2)] = null);

(statearr_28652_28700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (1))){
var state_28649__$1 = state_28649;
var statearr_28653_28701 = state_28649__$1;
(statearr_28653_28701[(2)] = null);

(statearr_28653_28701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (24))){
var inst_28628 = (state_28649[(7)]);
var inst_28637 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28628);
var state_28649__$1 = state_28649;
var statearr_28654_28702 = state_28649__$1;
(statearr_28654_28702[(2)] = inst_28637);

(statearr_28654_28702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (4))){
var inst_28580 = (state_28649[(8)]);
var inst_28580__$1 = (state_28649[(2)]);
var inst_28581 = (inst_28580__$1 == null);
var state_28649__$1 = (function (){var statearr_28655 = state_28649;
(statearr_28655[(8)] = inst_28580__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28581)){
var statearr_28656_28703 = state_28649__$1;
(statearr_28656_28703[(1)] = (5));

} else {
var statearr_28657_28704 = state_28649__$1;
(statearr_28657_28704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (15))){
var inst_28622 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28658_28705 = state_28649__$1;
(statearr_28658_28705[(2)] = inst_28622);

(statearr_28658_28705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (21))){
var inst_28642 = (state_28649[(2)]);
var state_28649__$1 = (function (){var statearr_28659 = state_28649;
(statearr_28659[(9)] = inst_28642);

return statearr_28659;
})();
var statearr_28660_28706 = state_28649__$1;
(statearr_28660_28706[(2)] = null);

(statearr_28660_28706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (13))){
var inst_28604 = (state_28649[(10)]);
var inst_28606 = cljs.core.chunked_seq_QMARK_.call(null,inst_28604);
var state_28649__$1 = state_28649;
if(inst_28606){
var statearr_28661_28707 = state_28649__$1;
(statearr_28661_28707[(1)] = (16));

} else {
var statearr_28662_28708 = state_28649__$1;
(statearr_28662_28708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (22))){
var inst_28634 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28634)){
var statearr_28663_28709 = state_28649__$1;
(statearr_28663_28709[(1)] = (23));

} else {
var statearr_28664_28710 = state_28649__$1;
(statearr_28664_28710[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (6))){
var inst_28628 = (state_28649[(7)]);
var inst_28630 = (state_28649[(11)]);
var inst_28580 = (state_28649[(8)]);
var inst_28628__$1 = topic_fn.call(null,inst_28580);
var inst_28629 = cljs.core.deref.call(null,mults);
var inst_28630__$1 = cljs.core.get.call(null,inst_28629,inst_28628__$1);
var state_28649__$1 = (function (){var statearr_28665 = state_28649;
(statearr_28665[(7)] = inst_28628__$1);

(statearr_28665[(11)] = inst_28630__$1);

return statearr_28665;
})();
if(cljs.core.truth_(inst_28630__$1)){
var statearr_28666_28711 = state_28649__$1;
(statearr_28666_28711[(1)] = (19));

} else {
var statearr_28667_28712 = state_28649__$1;
(statearr_28667_28712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (25))){
var inst_28639 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28668_28713 = state_28649__$1;
(statearr_28668_28713[(2)] = inst_28639);

(statearr_28668_28713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (17))){
var inst_28604 = (state_28649[(10)]);
var inst_28613 = cljs.core.first.call(null,inst_28604);
var inst_28614 = cljs.core.async.muxch_STAR_.call(null,inst_28613);
var inst_28615 = cljs.core.async.close_BANG_.call(null,inst_28614);
var inst_28616 = cljs.core.next.call(null,inst_28604);
var inst_28590 = inst_28616;
var inst_28591 = null;
var inst_28592 = (0);
var inst_28593 = (0);
var state_28649__$1 = (function (){var statearr_28669 = state_28649;
(statearr_28669[(12)] = inst_28592);

(statearr_28669[(13)] = inst_28591);

(statearr_28669[(14)] = inst_28590);

(statearr_28669[(15)] = inst_28615);

(statearr_28669[(16)] = inst_28593);

return statearr_28669;
})();
var statearr_28670_28714 = state_28649__$1;
(statearr_28670_28714[(2)] = null);

(statearr_28670_28714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (3))){
var inst_28647 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28649__$1,inst_28647);
} else {
if((state_val_28650 === (12))){
var inst_28624 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28671_28715 = state_28649__$1;
(statearr_28671_28715[(2)] = inst_28624);

(statearr_28671_28715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (2))){
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28649__$1,(4),ch);
} else {
if((state_val_28650 === (23))){
var state_28649__$1 = state_28649;
var statearr_28672_28716 = state_28649__$1;
(statearr_28672_28716[(2)] = null);

(statearr_28672_28716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (19))){
var inst_28630 = (state_28649[(11)]);
var inst_28580 = (state_28649[(8)]);
var inst_28632 = cljs.core.async.muxch_STAR_.call(null,inst_28630);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28649__$1,(22),inst_28632,inst_28580);
} else {
if((state_val_28650 === (11))){
var inst_28604 = (state_28649[(10)]);
var inst_28590 = (state_28649[(14)]);
var inst_28604__$1 = cljs.core.seq.call(null,inst_28590);
var state_28649__$1 = (function (){var statearr_28673 = state_28649;
(statearr_28673[(10)] = inst_28604__$1);

return statearr_28673;
})();
if(inst_28604__$1){
var statearr_28674_28717 = state_28649__$1;
(statearr_28674_28717[(1)] = (13));

} else {
var statearr_28675_28718 = state_28649__$1;
(statearr_28675_28718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (9))){
var inst_28626 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28676_28719 = state_28649__$1;
(statearr_28676_28719[(2)] = inst_28626);

(statearr_28676_28719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (5))){
var inst_28587 = cljs.core.deref.call(null,mults);
var inst_28588 = cljs.core.vals.call(null,inst_28587);
var inst_28589 = cljs.core.seq.call(null,inst_28588);
var inst_28590 = inst_28589;
var inst_28591 = null;
var inst_28592 = (0);
var inst_28593 = (0);
var state_28649__$1 = (function (){var statearr_28677 = state_28649;
(statearr_28677[(12)] = inst_28592);

(statearr_28677[(13)] = inst_28591);

(statearr_28677[(14)] = inst_28590);

(statearr_28677[(16)] = inst_28593);

return statearr_28677;
})();
var statearr_28678_28720 = state_28649__$1;
(statearr_28678_28720[(2)] = null);

(statearr_28678_28720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (14))){
var state_28649__$1 = state_28649;
var statearr_28682_28721 = state_28649__$1;
(statearr_28682_28721[(2)] = null);

(statearr_28682_28721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (16))){
var inst_28604 = (state_28649[(10)]);
var inst_28608 = cljs.core.chunk_first.call(null,inst_28604);
var inst_28609 = cljs.core.chunk_rest.call(null,inst_28604);
var inst_28610 = cljs.core.count.call(null,inst_28608);
var inst_28590 = inst_28609;
var inst_28591 = inst_28608;
var inst_28592 = inst_28610;
var inst_28593 = (0);
var state_28649__$1 = (function (){var statearr_28683 = state_28649;
(statearr_28683[(12)] = inst_28592);

(statearr_28683[(13)] = inst_28591);

(statearr_28683[(14)] = inst_28590);

(statearr_28683[(16)] = inst_28593);

return statearr_28683;
})();
var statearr_28684_28722 = state_28649__$1;
(statearr_28684_28722[(2)] = null);

(statearr_28684_28722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (10))){
var inst_28592 = (state_28649[(12)]);
var inst_28591 = (state_28649[(13)]);
var inst_28590 = (state_28649[(14)]);
var inst_28593 = (state_28649[(16)]);
var inst_28598 = cljs.core._nth.call(null,inst_28591,inst_28593);
var inst_28599 = cljs.core.async.muxch_STAR_.call(null,inst_28598);
var inst_28600 = cljs.core.async.close_BANG_.call(null,inst_28599);
var inst_28601 = (inst_28593 + (1));
var tmp28679 = inst_28592;
var tmp28680 = inst_28591;
var tmp28681 = inst_28590;
var inst_28590__$1 = tmp28681;
var inst_28591__$1 = tmp28680;
var inst_28592__$1 = tmp28679;
var inst_28593__$1 = inst_28601;
var state_28649__$1 = (function (){var statearr_28685 = state_28649;
(statearr_28685[(17)] = inst_28600);

(statearr_28685[(12)] = inst_28592__$1);

(statearr_28685[(13)] = inst_28591__$1);

(statearr_28685[(14)] = inst_28590__$1);

(statearr_28685[(16)] = inst_28593__$1);

return statearr_28685;
})();
var statearr_28686_28723 = state_28649__$1;
(statearr_28686_28723[(2)] = null);

(statearr_28686_28723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (18))){
var inst_28619 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28687_28724 = state_28649__$1;
(statearr_28687_28724[(2)] = inst_28619);

(statearr_28687_28724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28650 === (8))){
var inst_28592 = (state_28649[(12)]);
var inst_28593 = (state_28649[(16)]);
var inst_28595 = (inst_28593 < inst_28592);
var inst_28596 = inst_28595;
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28596)){
var statearr_28688_28725 = state_28649__$1;
(statearr_28688_28725[(1)] = (10));

} else {
var statearr_28689_28726 = state_28649__$1;
(statearr_28689_28726[(1)] = (11));

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
});})(c__21347__auto___28698,mults,ensure_mult,p))
;
return ((function (switch__21285__auto__,c__21347__auto___28698,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_28693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28693[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_28693[(1)] = (1));

return statearr_28693;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_28649){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28694){if((e28694 instanceof Object)){
var ex__21289__auto__ = e28694;
var statearr_28695_28727 = state_28649;
(statearr_28695_28727[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28728 = state_28649;
state_28649 = G__28728;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_28649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_28649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28698,mults,ensure_mult,p))
})();
var state__21349__auto__ = (function (){var statearr_28696 = f__21348__auto__.call(null);
(statearr_28696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28698);

return statearr_28696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28698,mults,ensure_mult,p))
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
var G__28730 = arguments.length;
switch (G__28730) {
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
var G__28733 = arguments.length;
switch (G__28733) {
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
var G__28736 = arguments.length;
switch (G__28736) {
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
var c__21347__auto___28806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28806,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28806,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28775){
var state_val_28776 = (state_28775[(1)]);
if((state_val_28776 === (7))){
var state_28775__$1 = state_28775;
var statearr_28777_28807 = state_28775__$1;
(statearr_28777_28807[(2)] = null);

(statearr_28777_28807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (1))){
var state_28775__$1 = state_28775;
var statearr_28778_28808 = state_28775__$1;
(statearr_28778_28808[(2)] = null);

(statearr_28778_28808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (4))){
var inst_28739 = (state_28775[(7)]);
var inst_28741 = (inst_28739 < cnt);
var state_28775__$1 = state_28775;
if(cljs.core.truth_(inst_28741)){
var statearr_28779_28809 = state_28775__$1;
(statearr_28779_28809[(1)] = (6));

} else {
var statearr_28780_28810 = state_28775__$1;
(statearr_28780_28810[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (15))){
var inst_28771 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28781_28811 = state_28775__$1;
(statearr_28781_28811[(2)] = inst_28771);

(statearr_28781_28811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (13))){
var inst_28764 = cljs.core.async.close_BANG_.call(null,out);
var state_28775__$1 = state_28775;
var statearr_28782_28812 = state_28775__$1;
(statearr_28782_28812[(2)] = inst_28764);

(statearr_28782_28812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (6))){
var state_28775__$1 = state_28775;
var statearr_28783_28813 = state_28775__$1;
(statearr_28783_28813[(2)] = null);

(statearr_28783_28813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (3))){
var inst_28773 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28775__$1,inst_28773);
} else {
if((state_val_28776 === (12))){
var inst_28761 = (state_28775[(8)]);
var inst_28761__$1 = (state_28775[(2)]);
var inst_28762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28761__$1);
var state_28775__$1 = (function (){var statearr_28784 = state_28775;
(statearr_28784[(8)] = inst_28761__$1);

return statearr_28784;
})();
if(cljs.core.truth_(inst_28762)){
var statearr_28785_28814 = state_28775__$1;
(statearr_28785_28814[(1)] = (13));

} else {
var statearr_28786_28815 = state_28775__$1;
(statearr_28786_28815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (2))){
var inst_28738 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28739 = (0);
var state_28775__$1 = (function (){var statearr_28787 = state_28775;
(statearr_28787[(7)] = inst_28739);

(statearr_28787[(9)] = inst_28738);

return statearr_28787;
})();
var statearr_28788_28816 = state_28775__$1;
(statearr_28788_28816[(2)] = null);

(statearr_28788_28816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (11))){
var inst_28739 = (state_28775[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28775,(10),Object,null,(9));
var inst_28748 = chs__$1.call(null,inst_28739);
var inst_28749 = done.call(null,inst_28739);
var inst_28750 = cljs.core.async.take_BANG_.call(null,inst_28748,inst_28749);
var state_28775__$1 = state_28775;
var statearr_28789_28817 = state_28775__$1;
(statearr_28789_28817[(2)] = inst_28750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (9))){
var inst_28739 = (state_28775[(7)]);
var inst_28752 = (state_28775[(2)]);
var inst_28753 = (inst_28739 + (1));
var inst_28739__$1 = inst_28753;
var state_28775__$1 = (function (){var statearr_28790 = state_28775;
(statearr_28790[(7)] = inst_28739__$1);

(statearr_28790[(10)] = inst_28752);

return statearr_28790;
})();
var statearr_28791_28818 = state_28775__$1;
(statearr_28791_28818[(2)] = null);

(statearr_28791_28818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (5))){
var inst_28759 = (state_28775[(2)]);
var state_28775__$1 = (function (){var statearr_28792 = state_28775;
(statearr_28792[(11)] = inst_28759);

return statearr_28792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28775__$1,(12),dchan);
} else {
if((state_val_28776 === (14))){
var inst_28761 = (state_28775[(8)]);
var inst_28766 = cljs.core.apply.call(null,f,inst_28761);
var state_28775__$1 = state_28775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28775__$1,(16),out,inst_28766);
} else {
if((state_val_28776 === (16))){
var inst_28768 = (state_28775[(2)]);
var state_28775__$1 = (function (){var statearr_28793 = state_28775;
(statearr_28793[(12)] = inst_28768);

return statearr_28793;
})();
var statearr_28794_28819 = state_28775__$1;
(statearr_28794_28819[(2)] = null);

(statearr_28794_28819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (10))){
var inst_28743 = (state_28775[(2)]);
var inst_28744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28775__$1 = (function (){var statearr_28795 = state_28775;
(statearr_28795[(13)] = inst_28743);

return statearr_28795;
})();
var statearr_28796_28820 = state_28775__$1;
(statearr_28796_28820[(2)] = inst_28744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28776 === (8))){
var inst_28757 = (state_28775[(2)]);
var state_28775__$1 = state_28775;
var statearr_28797_28821 = state_28775__$1;
(statearr_28797_28821[(2)] = inst_28757);

(statearr_28797_28821[(1)] = (5));


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
});})(c__21347__auto___28806,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21285__auto__,c__21347__auto___28806,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_28801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28801[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_28801[(1)] = (1));

return statearr_28801;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_28775){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28802){if((e28802 instanceof Object)){
var ex__21289__auto__ = e28802;
var statearr_28803_28822 = state_28775;
(statearr_28803_28822[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28823 = state_28775;
state_28775 = G__28823;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_28775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_28775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28806,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21349__auto__ = (function (){var statearr_28804 = f__21348__auto__.call(null);
(statearr_28804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28806);

return statearr_28804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28806,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28826 = arguments.length;
switch (G__28826) {
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
var c__21347__auto___28881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28881,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28881,out){
return (function (state_28856){
var state_val_28857 = (state_28856[(1)]);
if((state_val_28857 === (7))){
var inst_28835 = (state_28856[(7)]);
var inst_28836 = (state_28856[(8)]);
var inst_28835__$1 = (state_28856[(2)]);
var inst_28836__$1 = cljs.core.nth.call(null,inst_28835__$1,(0),null);
var inst_28837 = cljs.core.nth.call(null,inst_28835__$1,(1),null);
var inst_28838 = (inst_28836__$1 == null);
var state_28856__$1 = (function (){var statearr_28858 = state_28856;
(statearr_28858[(9)] = inst_28837);

(statearr_28858[(7)] = inst_28835__$1);

(statearr_28858[(8)] = inst_28836__$1);

return statearr_28858;
})();
if(cljs.core.truth_(inst_28838)){
var statearr_28859_28882 = state_28856__$1;
(statearr_28859_28882[(1)] = (8));

} else {
var statearr_28860_28883 = state_28856__$1;
(statearr_28860_28883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (1))){
var inst_28827 = cljs.core.vec.call(null,chs);
var inst_28828 = inst_28827;
var state_28856__$1 = (function (){var statearr_28861 = state_28856;
(statearr_28861[(10)] = inst_28828);

return statearr_28861;
})();
var statearr_28862_28884 = state_28856__$1;
(statearr_28862_28884[(2)] = null);

(statearr_28862_28884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (4))){
var inst_28828 = (state_28856[(10)]);
var state_28856__$1 = state_28856;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28856__$1,(7),inst_28828);
} else {
if((state_val_28857 === (6))){
var inst_28852 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28863_28885 = state_28856__$1;
(statearr_28863_28885[(2)] = inst_28852);

(statearr_28863_28885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (3))){
var inst_28854 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28856__$1,inst_28854);
} else {
if((state_val_28857 === (2))){
var inst_28828 = (state_28856[(10)]);
var inst_28830 = cljs.core.count.call(null,inst_28828);
var inst_28831 = (inst_28830 > (0));
var state_28856__$1 = state_28856;
if(cljs.core.truth_(inst_28831)){
var statearr_28865_28886 = state_28856__$1;
(statearr_28865_28886[(1)] = (4));

} else {
var statearr_28866_28887 = state_28856__$1;
(statearr_28866_28887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (11))){
var inst_28828 = (state_28856[(10)]);
var inst_28845 = (state_28856[(2)]);
var tmp28864 = inst_28828;
var inst_28828__$1 = tmp28864;
var state_28856__$1 = (function (){var statearr_28867 = state_28856;
(statearr_28867[(11)] = inst_28845);

(statearr_28867[(10)] = inst_28828__$1);

return statearr_28867;
})();
var statearr_28868_28888 = state_28856__$1;
(statearr_28868_28888[(2)] = null);

(statearr_28868_28888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (9))){
var inst_28836 = (state_28856[(8)]);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28856__$1,(11),out,inst_28836);
} else {
if((state_val_28857 === (5))){
var inst_28850 = cljs.core.async.close_BANG_.call(null,out);
var state_28856__$1 = state_28856;
var statearr_28869_28889 = state_28856__$1;
(statearr_28869_28889[(2)] = inst_28850);

(statearr_28869_28889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (10))){
var inst_28848 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28870_28890 = state_28856__$1;
(statearr_28870_28890[(2)] = inst_28848);

(statearr_28870_28890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (8))){
var inst_28837 = (state_28856[(9)]);
var inst_28835 = (state_28856[(7)]);
var inst_28836 = (state_28856[(8)]);
var inst_28828 = (state_28856[(10)]);
var inst_28840 = (function (){var c = inst_28837;
var v = inst_28836;
var vec__28833 = inst_28835;
var cs = inst_28828;
return ((function (c,v,vec__28833,cs,inst_28837,inst_28835,inst_28836,inst_28828,state_val_28857,c__21347__auto___28881,out){
return (function (p1__28824_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28824_SHARP_);
});
;})(c,v,vec__28833,cs,inst_28837,inst_28835,inst_28836,inst_28828,state_val_28857,c__21347__auto___28881,out))
})();
var inst_28841 = cljs.core.filterv.call(null,inst_28840,inst_28828);
var inst_28828__$1 = inst_28841;
var state_28856__$1 = (function (){var statearr_28871 = state_28856;
(statearr_28871[(10)] = inst_28828__$1);

return statearr_28871;
})();
var statearr_28872_28891 = state_28856__$1;
(statearr_28872_28891[(2)] = null);

(statearr_28872_28891[(1)] = (2));


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
});})(c__21347__auto___28881,out))
;
return ((function (switch__21285__auto__,c__21347__auto___28881,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_28876 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28876[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_28876[(1)] = (1));

return statearr_28876;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_28856){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28877){if((e28877 instanceof Object)){
var ex__21289__auto__ = e28877;
var statearr_28878_28892 = state_28856;
(statearr_28878_28892[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28893 = state_28856;
state_28856 = G__28893;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_28856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_28856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28881,out))
})();
var state__21349__auto__ = (function (){var statearr_28879 = f__21348__auto__.call(null);
(statearr_28879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28881);

return statearr_28879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28881,out))
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
var G__28895 = arguments.length;
switch (G__28895) {
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
var c__21347__auto___28943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___28943,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___28943,out){
return (function (state_28919){
var state_val_28920 = (state_28919[(1)]);
if((state_val_28920 === (7))){
var inst_28901 = (state_28919[(7)]);
var inst_28901__$1 = (state_28919[(2)]);
var inst_28902 = (inst_28901__$1 == null);
var inst_28903 = cljs.core.not.call(null,inst_28902);
var state_28919__$1 = (function (){var statearr_28921 = state_28919;
(statearr_28921[(7)] = inst_28901__$1);

return statearr_28921;
})();
if(inst_28903){
var statearr_28922_28944 = state_28919__$1;
(statearr_28922_28944[(1)] = (8));

} else {
var statearr_28923_28945 = state_28919__$1;
(statearr_28923_28945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (1))){
var inst_28896 = (0);
var state_28919__$1 = (function (){var statearr_28924 = state_28919;
(statearr_28924[(8)] = inst_28896);

return statearr_28924;
})();
var statearr_28925_28946 = state_28919__$1;
(statearr_28925_28946[(2)] = null);

(statearr_28925_28946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (4))){
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28919__$1,(7),ch);
} else {
if((state_val_28920 === (6))){
var inst_28914 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28926_28947 = state_28919__$1;
(statearr_28926_28947[(2)] = inst_28914);

(statearr_28926_28947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (3))){
var inst_28916 = (state_28919[(2)]);
var inst_28917 = cljs.core.async.close_BANG_.call(null,out);
var state_28919__$1 = (function (){var statearr_28927 = state_28919;
(statearr_28927[(9)] = inst_28916);

return statearr_28927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28919__$1,inst_28917);
} else {
if((state_val_28920 === (2))){
var inst_28896 = (state_28919[(8)]);
var inst_28898 = (inst_28896 < n);
var state_28919__$1 = state_28919;
if(cljs.core.truth_(inst_28898)){
var statearr_28928_28948 = state_28919__$1;
(statearr_28928_28948[(1)] = (4));

} else {
var statearr_28929_28949 = state_28919__$1;
(statearr_28929_28949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (11))){
var inst_28896 = (state_28919[(8)]);
var inst_28906 = (state_28919[(2)]);
var inst_28907 = (inst_28896 + (1));
var inst_28896__$1 = inst_28907;
var state_28919__$1 = (function (){var statearr_28930 = state_28919;
(statearr_28930[(8)] = inst_28896__$1);

(statearr_28930[(10)] = inst_28906);

return statearr_28930;
})();
var statearr_28931_28950 = state_28919__$1;
(statearr_28931_28950[(2)] = null);

(statearr_28931_28950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (9))){
var state_28919__$1 = state_28919;
var statearr_28932_28951 = state_28919__$1;
(statearr_28932_28951[(2)] = null);

(statearr_28932_28951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (5))){
var state_28919__$1 = state_28919;
var statearr_28933_28952 = state_28919__$1;
(statearr_28933_28952[(2)] = null);

(statearr_28933_28952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (10))){
var inst_28911 = (state_28919[(2)]);
var state_28919__$1 = state_28919;
var statearr_28934_28953 = state_28919__$1;
(statearr_28934_28953[(2)] = inst_28911);

(statearr_28934_28953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28920 === (8))){
var inst_28901 = (state_28919[(7)]);
var state_28919__$1 = state_28919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28919__$1,(11),out,inst_28901);
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
});})(c__21347__auto___28943,out))
;
return ((function (switch__21285__auto__,c__21347__auto___28943,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_28938 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28938[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_28938[(1)] = (1));

return statearr_28938;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_28919){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_28919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e28939){if((e28939 instanceof Object)){
var ex__21289__auto__ = e28939;
var statearr_28940_28954 = state_28919;
(statearr_28940_28954[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28955 = state_28919;
state_28919 = G__28955;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_28919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_28919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___28943,out))
})();
var state__21349__auto__ = (function (){var statearr_28941 = f__21348__auto__.call(null);
(statearr_28941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___28943);

return statearr_28941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___28943,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28963 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28963 = (function (ch,f,map_LT_,meta28964){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28964 = meta28964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28963.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28963.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28963.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28963.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28966 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28966 = (function (fn1,_,meta28964,map_LT_,f,ch,meta28967){
this.fn1 = fn1;
this._ = _;
this.meta28964 = meta28964;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28967 = meta28967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28966.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28956_SHARP_){
return f1.call(null,(((p1__28956_SHARP_ == null))?null:self__.f.call(null,p1__28956_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28968){
var self__ = this;
var _28968__$1 = this;
return self__.meta28967;
});})(___$1))
;

cljs.core.async.t28966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28968,meta28967__$1){
var self__ = this;
var _28968__$1 = this;
return (new cljs.core.async.t28966(self__.fn1,self__._,self__.meta28964,self__.map_LT_,self__.f,self__.ch,meta28967__$1));
});})(___$1))
;

cljs.core.async.t28966.cljs$lang$type = true;

cljs.core.async.t28966.cljs$lang$ctorStr = "cljs.core.async/t28966";

cljs.core.async.t28966.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28966");
});})(___$1))
;

cljs.core.async.__GT_t28966 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28966(fn1__$1,___$2,meta28964__$1,map_LT___$1,f__$1,ch__$1,meta28967){
return (new cljs.core.async.t28966(fn1__$1,___$2,meta28964__$1,map_LT___$1,f__$1,ch__$1,meta28967));
});})(___$1))
;

}

return (new cljs.core.async.t28966(fn1,___$1,self__.meta28964,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t28963.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28963.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28963.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28965){
var self__ = this;
var _28965__$1 = this;
return self__.meta28964;
});

cljs.core.async.t28963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28965,meta28964__$1){
var self__ = this;
var _28965__$1 = this;
return (new cljs.core.async.t28963(self__.ch,self__.f,self__.map_LT_,meta28964__$1));
});

cljs.core.async.t28963.cljs$lang$type = true;

cljs.core.async.t28963.cljs$lang$ctorStr = "cljs.core.async/t28963";

cljs.core.async.t28963.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28963");
});

cljs.core.async.__GT_t28963 = (function cljs$core$async$map_LT__$___GT_t28963(ch__$1,f__$1,map_LT___$1,meta28964){
return (new cljs.core.async.t28963(ch__$1,f__$1,map_LT___$1,meta28964));
});

}

return (new cljs.core.async.t28963(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28972 = (function (ch,f,map_GT_,meta28973){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28973 = meta28973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28972.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28974){
var self__ = this;
var _28974__$1 = this;
return self__.meta28973;
});

cljs.core.async.t28972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28974,meta28973__$1){
var self__ = this;
var _28974__$1 = this;
return (new cljs.core.async.t28972(self__.ch,self__.f,self__.map_GT_,meta28973__$1));
});

cljs.core.async.t28972.cljs$lang$type = true;

cljs.core.async.t28972.cljs$lang$ctorStr = "cljs.core.async/t28972";

cljs.core.async.t28972.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28972");
});

cljs.core.async.__GT_t28972 = (function cljs$core$async$map_GT__$___GT_t28972(ch__$1,f__$1,map_GT___$1,meta28973){
return (new cljs.core.async.t28972(ch__$1,f__$1,map_GT___$1,meta28973));
});

}

return (new cljs.core.async.t28972(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28978 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28978 = (function (ch,p,filter_GT_,meta28979){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28979 = meta28979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28978.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28978.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28978.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28978.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28980){
var self__ = this;
var _28980__$1 = this;
return self__.meta28979;
});

cljs.core.async.t28978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28980,meta28979__$1){
var self__ = this;
var _28980__$1 = this;
return (new cljs.core.async.t28978(self__.ch,self__.p,self__.filter_GT_,meta28979__$1));
});

cljs.core.async.t28978.cljs$lang$type = true;

cljs.core.async.t28978.cljs$lang$ctorStr = "cljs.core.async/t28978";

cljs.core.async.t28978.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28978");
});

cljs.core.async.__GT_t28978 = (function cljs$core$async$filter_GT__$___GT_t28978(ch__$1,p__$1,filter_GT___$1,meta28979){
return (new cljs.core.async.t28978(ch__$1,p__$1,filter_GT___$1,meta28979));
});

}

return (new cljs.core.async.t28978(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28982 = arguments.length;
switch (G__28982) {
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
var c__21347__auto___29025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___29025,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___29025,out){
return (function (state_29003){
var state_val_29004 = (state_29003[(1)]);
if((state_val_29004 === (7))){
var inst_28999 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
var statearr_29005_29026 = state_29003__$1;
(statearr_29005_29026[(2)] = inst_28999);

(statearr_29005_29026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (1))){
var state_29003__$1 = state_29003;
var statearr_29006_29027 = state_29003__$1;
(statearr_29006_29027[(2)] = null);

(statearr_29006_29027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (4))){
var inst_28985 = (state_29003[(7)]);
var inst_28985__$1 = (state_29003[(2)]);
var inst_28986 = (inst_28985__$1 == null);
var state_29003__$1 = (function (){var statearr_29007 = state_29003;
(statearr_29007[(7)] = inst_28985__$1);

return statearr_29007;
})();
if(cljs.core.truth_(inst_28986)){
var statearr_29008_29028 = state_29003__$1;
(statearr_29008_29028[(1)] = (5));

} else {
var statearr_29009_29029 = state_29003__$1;
(statearr_29009_29029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (6))){
var inst_28985 = (state_29003[(7)]);
var inst_28990 = p.call(null,inst_28985);
var state_29003__$1 = state_29003;
if(cljs.core.truth_(inst_28990)){
var statearr_29010_29030 = state_29003__$1;
(statearr_29010_29030[(1)] = (8));

} else {
var statearr_29011_29031 = state_29003__$1;
(statearr_29011_29031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (3))){
var inst_29001 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29003__$1,inst_29001);
} else {
if((state_val_29004 === (2))){
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29003__$1,(4),ch);
} else {
if((state_val_29004 === (11))){
var inst_28993 = (state_29003[(2)]);
var state_29003__$1 = state_29003;
var statearr_29012_29032 = state_29003__$1;
(statearr_29012_29032[(2)] = inst_28993);

(statearr_29012_29032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (9))){
var state_29003__$1 = state_29003;
var statearr_29013_29033 = state_29003__$1;
(statearr_29013_29033[(2)] = null);

(statearr_29013_29033[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (5))){
var inst_28988 = cljs.core.async.close_BANG_.call(null,out);
var state_29003__$1 = state_29003;
var statearr_29014_29034 = state_29003__$1;
(statearr_29014_29034[(2)] = inst_28988);

(statearr_29014_29034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (10))){
var inst_28996 = (state_29003[(2)]);
var state_29003__$1 = (function (){var statearr_29015 = state_29003;
(statearr_29015[(8)] = inst_28996);

return statearr_29015;
})();
var statearr_29016_29035 = state_29003__$1;
(statearr_29016_29035[(2)] = null);

(statearr_29016_29035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29004 === (8))){
var inst_28985 = (state_29003[(7)]);
var state_29003__$1 = state_29003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29003__$1,(11),out,inst_28985);
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
});})(c__21347__auto___29025,out))
;
return ((function (switch__21285__auto__,c__21347__auto___29025,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_29020 = [null,null,null,null,null,null,null,null,null];
(statearr_29020[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_29020[(1)] = (1));

return statearr_29020;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_29003){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29021){if((e29021 instanceof Object)){
var ex__21289__auto__ = e29021;
var statearr_29022_29036 = state_29003;
(statearr_29022_29036[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29037 = state_29003;
state_29003 = G__29037;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_29003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_29003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___29025,out))
})();
var state__21349__auto__ = (function (){var statearr_29023 = f__21348__auto__.call(null);
(statearr_29023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___29025);

return statearr_29023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___29025,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29039 = arguments.length;
switch (G__29039) {
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
var c__21347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto__){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto__){
return (function (state_29206){
var state_val_29207 = (state_29206[(1)]);
if((state_val_29207 === (7))){
var inst_29202 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29208_29249 = state_29206__$1;
(statearr_29208_29249[(2)] = inst_29202);

(statearr_29208_29249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (20))){
var inst_29172 = (state_29206[(7)]);
var inst_29183 = (state_29206[(2)]);
var inst_29184 = cljs.core.next.call(null,inst_29172);
var inst_29158 = inst_29184;
var inst_29159 = null;
var inst_29160 = (0);
var inst_29161 = (0);
var state_29206__$1 = (function (){var statearr_29209 = state_29206;
(statearr_29209[(8)] = inst_29158);

(statearr_29209[(9)] = inst_29183);

(statearr_29209[(10)] = inst_29161);

(statearr_29209[(11)] = inst_29159);

(statearr_29209[(12)] = inst_29160);

return statearr_29209;
})();
var statearr_29210_29250 = state_29206__$1;
(statearr_29210_29250[(2)] = null);

(statearr_29210_29250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (1))){
var state_29206__$1 = state_29206;
var statearr_29211_29251 = state_29206__$1;
(statearr_29211_29251[(2)] = null);

(statearr_29211_29251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (4))){
var inst_29147 = (state_29206[(13)]);
var inst_29147__$1 = (state_29206[(2)]);
var inst_29148 = (inst_29147__$1 == null);
var state_29206__$1 = (function (){var statearr_29212 = state_29206;
(statearr_29212[(13)] = inst_29147__$1);

return statearr_29212;
})();
if(cljs.core.truth_(inst_29148)){
var statearr_29213_29252 = state_29206__$1;
(statearr_29213_29252[(1)] = (5));

} else {
var statearr_29214_29253 = state_29206__$1;
(statearr_29214_29253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (15))){
var state_29206__$1 = state_29206;
var statearr_29218_29254 = state_29206__$1;
(statearr_29218_29254[(2)] = null);

(statearr_29218_29254[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (21))){
var state_29206__$1 = state_29206;
var statearr_29219_29255 = state_29206__$1;
(statearr_29219_29255[(2)] = null);

(statearr_29219_29255[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (13))){
var inst_29158 = (state_29206[(8)]);
var inst_29161 = (state_29206[(10)]);
var inst_29159 = (state_29206[(11)]);
var inst_29160 = (state_29206[(12)]);
var inst_29168 = (state_29206[(2)]);
var inst_29169 = (inst_29161 + (1));
var tmp29215 = inst_29158;
var tmp29216 = inst_29159;
var tmp29217 = inst_29160;
var inst_29158__$1 = tmp29215;
var inst_29159__$1 = tmp29216;
var inst_29160__$1 = tmp29217;
var inst_29161__$1 = inst_29169;
var state_29206__$1 = (function (){var statearr_29220 = state_29206;
(statearr_29220[(8)] = inst_29158__$1);

(statearr_29220[(10)] = inst_29161__$1);

(statearr_29220[(11)] = inst_29159__$1);

(statearr_29220[(14)] = inst_29168);

(statearr_29220[(12)] = inst_29160__$1);

return statearr_29220;
})();
var statearr_29221_29256 = state_29206__$1;
(statearr_29221_29256[(2)] = null);

(statearr_29221_29256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (22))){
var state_29206__$1 = state_29206;
var statearr_29222_29257 = state_29206__$1;
(statearr_29222_29257[(2)] = null);

(statearr_29222_29257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (6))){
var inst_29147 = (state_29206[(13)]);
var inst_29156 = f.call(null,inst_29147);
var inst_29157 = cljs.core.seq.call(null,inst_29156);
var inst_29158 = inst_29157;
var inst_29159 = null;
var inst_29160 = (0);
var inst_29161 = (0);
var state_29206__$1 = (function (){var statearr_29223 = state_29206;
(statearr_29223[(8)] = inst_29158);

(statearr_29223[(10)] = inst_29161);

(statearr_29223[(11)] = inst_29159);

(statearr_29223[(12)] = inst_29160);

return statearr_29223;
})();
var statearr_29224_29258 = state_29206__$1;
(statearr_29224_29258[(2)] = null);

(statearr_29224_29258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (17))){
var inst_29172 = (state_29206[(7)]);
var inst_29176 = cljs.core.chunk_first.call(null,inst_29172);
var inst_29177 = cljs.core.chunk_rest.call(null,inst_29172);
var inst_29178 = cljs.core.count.call(null,inst_29176);
var inst_29158 = inst_29177;
var inst_29159 = inst_29176;
var inst_29160 = inst_29178;
var inst_29161 = (0);
var state_29206__$1 = (function (){var statearr_29225 = state_29206;
(statearr_29225[(8)] = inst_29158);

(statearr_29225[(10)] = inst_29161);

(statearr_29225[(11)] = inst_29159);

(statearr_29225[(12)] = inst_29160);

return statearr_29225;
})();
var statearr_29226_29259 = state_29206__$1;
(statearr_29226_29259[(2)] = null);

(statearr_29226_29259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (3))){
var inst_29204 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29206__$1,inst_29204);
} else {
if((state_val_29207 === (12))){
var inst_29192 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29227_29260 = state_29206__$1;
(statearr_29227_29260[(2)] = inst_29192);

(statearr_29227_29260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (2))){
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29206__$1,(4),in$);
} else {
if((state_val_29207 === (23))){
var inst_29200 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29228_29261 = state_29206__$1;
(statearr_29228_29261[(2)] = inst_29200);

(statearr_29228_29261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (19))){
var inst_29187 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29229_29262 = state_29206__$1;
(statearr_29229_29262[(2)] = inst_29187);

(statearr_29229_29262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (11))){
var inst_29158 = (state_29206[(8)]);
var inst_29172 = (state_29206[(7)]);
var inst_29172__$1 = cljs.core.seq.call(null,inst_29158);
var state_29206__$1 = (function (){var statearr_29230 = state_29206;
(statearr_29230[(7)] = inst_29172__$1);

return statearr_29230;
})();
if(inst_29172__$1){
var statearr_29231_29263 = state_29206__$1;
(statearr_29231_29263[(1)] = (14));

} else {
var statearr_29232_29264 = state_29206__$1;
(statearr_29232_29264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (9))){
var inst_29194 = (state_29206[(2)]);
var inst_29195 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29206__$1 = (function (){var statearr_29233 = state_29206;
(statearr_29233[(15)] = inst_29194);

return statearr_29233;
})();
if(cljs.core.truth_(inst_29195)){
var statearr_29234_29265 = state_29206__$1;
(statearr_29234_29265[(1)] = (21));

} else {
var statearr_29235_29266 = state_29206__$1;
(statearr_29235_29266[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (5))){
var inst_29150 = cljs.core.async.close_BANG_.call(null,out);
var state_29206__$1 = state_29206;
var statearr_29236_29267 = state_29206__$1;
(statearr_29236_29267[(2)] = inst_29150);

(statearr_29236_29267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (14))){
var inst_29172 = (state_29206[(7)]);
var inst_29174 = cljs.core.chunked_seq_QMARK_.call(null,inst_29172);
var state_29206__$1 = state_29206;
if(inst_29174){
var statearr_29237_29268 = state_29206__$1;
(statearr_29237_29268[(1)] = (17));

} else {
var statearr_29238_29269 = state_29206__$1;
(statearr_29238_29269[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (16))){
var inst_29190 = (state_29206[(2)]);
var state_29206__$1 = state_29206;
var statearr_29239_29270 = state_29206__$1;
(statearr_29239_29270[(2)] = inst_29190);

(statearr_29239_29270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29207 === (10))){
var inst_29161 = (state_29206[(10)]);
var inst_29159 = (state_29206[(11)]);
var inst_29166 = cljs.core._nth.call(null,inst_29159,inst_29161);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29206__$1,(13),out,inst_29166);
} else {
if((state_val_29207 === (18))){
var inst_29172 = (state_29206[(7)]);
var inst_29181 = cljs.core.first.call(null,inst_29172);
var state_29206__$1 = state_29206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29206__$1,(20),out,inst_29181);
} else {
if((state_val_29207 === (8))){
var inst_29161 = (state_29206[(10)]);
var inst_29160 = (state_29206[(12)]);
var inst_29163 = (inst_29161 < inst_29160);
var inst_29164 = inst_29163;
var state_29206__$1 = state_29206;
if(cljs.core.truth_(inst_29164)){
var statearr_29240_29271 = state_29206__$1;
(statearr_29240_29271[(1)] = (10));

} else {
var statearr_29241_29272 = state_29206__$1;
(statearr_29241_29272[(1)] = (11));

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
});})(c__21347__auto__))
;
return ((function (switch__21285__auto__,c__21347__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____0 = (function (){
var statearr_29245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29245[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__);

(statearr_29245[(1)] = (1));

return statearr_29245;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____1 = (function (state_29206){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29246){if((e29246 instanceof Object)){
var ex__21289__auto__ = e29246;
var statearr_29247_29273 = state_29206;
(statearr_29247_29273[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29274 = state_29206;
state_29206 = G__29274;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__ = function(state_29206){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____1.call(this,state_29206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto__))
})();
var state__21349__auto__ = (function (){var statearr_29248 = f__21348__auto__.call(null);
(statearr_29248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto__);

return statearr_29248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto__))
);

return c__21347__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29276 = arguments.length;
switch (G__29276) {
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
var G__29279 = arguments.length;
switch (G__29279) {
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
var G__29282 = arguments.length;
switch (G__29282) {
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
var c__21347__auto___29332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___29332,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___29332,out){
return (function (state_29306){
var state_val_29307 = (state_29306[(1)]);
if((state_val_29307 === (7))){
var inst_29301 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29308_29333 = state_29306__$1;
(statearr_29308_29333[(2)] = inst_29301);

(statearr_29308_29333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (1))){
var inst_29283 = null;
var state_29306__$1 = (function (){var statearr_29309 = state_29306;
(statearr_29309[(7)] = inst_29283);

return statearr_29309;
})();
var statearr_29310_29334 = state_29306__$1;
(statearr_29310_29334[(2)] = null);

(statearr_29310_29334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (4))){
var inst_29286 = (state_29306[(8)]);
var inst_29286__$1 = (state_29306[(2)]);
var inst_29287 = (inst_29286__$1 == null);
var inst_29288 = cljs.core.not.call(null,inst_29287);
var state_29306__$1 = (function (){var statearr_29311 = state_29306;
(statearr_29311[(8)] = inst_29286__$1);

return statearr_29311;
})();
if(inst_29288){
var statearr_29312_29335 = state_29306__$1;
(statearr_29312_29335[(1)] = (5));

} else {
var statearr_29313_29336 = state_29306__$1;
(statearr_29313_29336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (6))){
var state_29306__$1 = state_29306;
var statearr_29314_29337 = state_29306__$1;
(statearr_29314_29337[(2)] = null);

(statearr_29314_29337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (3))){
var inst_29303 = (state_29306[(2)]);
var inst_29304 = cljs.core.async.close_BANG_.call(null,out);
var state_29306__$1 = (function (){var statearr_29315 = state_29306;
(statearr_29315[(9)] = inst_29303);

return statearr_29315;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29306__$1,inst_29304);
} else {
if((state_val_29307 === (2))){
var state_29306__$1 = state_29306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29306__$1,(4),ch);
} else {
if((state_val_29307 === (11))){
var inst_29286 = (state_29306[(8)]);
var inst_29295 = (state_29306[(2)]);
var inst_29283 = inst_29286;
var state_29306__$1 = (function (){var statearr_29316 = state_29306;
(statearr_29316[(7)] = inst_29283);

(statearr_29316[(10)] = inst_29295);

return statearr_29316;
})();
var statearr_29317_29338 = state_29306__$1;
(statearr_29317_29338[(2)] = null);

(statearr_29317_29338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (9))){
var inst_29286 = (state_29306[(8)]);
var state_29306__$1 = state_29306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29306__$1,(11),out,inst_29286);
} else {
if((state_val_29307 === (5))){
var inst_29283 = (state_29306[(7)]);
var inst_29286 = (state_29306[(8)]);
var inst_29290 = cljs.core._EQ_.call(null,inst_29286,inst_29283);
var state_29306__$1 = state_29306;
if(inst_29290){
var statearr_29319_29339 = state_29306__$1;
(statearr_29319_29339[(1)] = (8));

} else {
var statearr_29320_29340 = state_29306__$1;
(statearr_29320_29340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (10))){
var inst_29298 = (state_29306[(2)]);
var state_29306__$1 = state_29306;
var statearr_29321_29341 = state_29306__$1;
(statearr_29321_29341[(2)] = inst_29298);

(statearr_29321_29341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29307 === (8))){
var inst_29283 = (state_29306[(7)]);
var tmp29318 = inst_29283;
var inst_29283__$1 = tmp29318;
var state_29306__$1 = (function (){var statearr_29322 = state_29306;
(statearr_29322[(7)] = inst_29283__$1);

return statearr_29322;
})();
var statearr_29323_29342 = state_29306__$1;
(statearr_29323_29342[(2)] = null);

(statearr_29323_29342[(1)] = (2));


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
});})(c__21347__auto___29332,out))
;
return ((function (switch__21285__auto__,c__21347__auto___29332,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_29327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29327[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_29327[(1)] = (1));

return statearr_29327;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_29306){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29328){if((e29328 instanceof Object)){
var ex__21289__auto__ = e29328;
var statearr_29329_29343 = state_29306;
(statearr_29329_29343[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29344 = state_29306;
state_29306 = G__29344;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_29306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_29306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___29332,out))
})();
var state__21349__auto__ = (function (){var statearr_29330 = f__21348__auto__.call(null);
(statearr_29330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___29332);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___29332,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29346 = arguments.length;
switch (G__29346) {
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
var c__21347__auto___29415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___29415,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___29415,out){
return (function (state_29384){
var state_val_29385 = (state_29384[(1)]);
if((state_val_29385 === (7))){
var inst_29380 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29386_29416 = state_29384__$1;
(statearr_29386_29416[(2)] = inst_29380);

(statearr_29386_29416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (1))){
var inst_29347 = (new Array(n));
var inst_29348 = inst_29347;
var inst_29349 = (0);
var state_29384__$1 = (function (){var statearr_29387 = state_29384;
(statearr_29387[(7)] = inst_29348);

(statearr_29387[(8)] = inst_29349);

return statearr_29387;
})();
var statearr_29388_29417 = state_29384__$1;
(statearr_29388_29417[(2)] = null);

(statearr_29388_29417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (4))){
var inst_29352 = (state_29384[(9)]);
var inst_29352__$1 = (state_29384[(2)]);
var inst_29353 = (inst_29352__$1 == null);
var inst_29354 = cljs.core.not.call(null,inst_29353);
var state_29384__$1 = (function (){var statearr_29389 = state_29384;
(statearr_29389[(9)] = inst_29352__$1);

return statearr_29389;
})();
if(inst_29354){
var statearr_29390_29418 = state_29384__$1;
(statearr_29390_29418[(1)] = (5));

} else {
var statearr_29391_29419 = state_29384__$1;
(statearr_29391_29419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (15))){
var inst_29374 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29392_29420 = state_29384__$1;
(statearr_29392_29420[(2)] = inst_29374);

(statearr_29392_29420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (13))){
var state_29384__$1 = state_29384;
var statearr_29393_29421 = state_29384__$1;
(statearr_29393_29421[(2)] = null);

(statearr_29393_29421[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (6))){
var inst_29349 = (state_29384[(8)]);
var inst_29370 = (inst_29349 > (0));
var state_29384__$1 = state_29384;
if(cljs.core.truth_(inst_29370)){
var statearr_29394_29422 = state_29384__$1;
(statearr_29394_29422[(1)] = (12));

} else {
var statearr_29395_29423 = state_29384__$1;
(statearr_29395_29423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (3))){
var inst_29382 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29384__$1,inst_29382);
} else {
if((state_val_29385 === (12))){
var inst_29348 = (state_29384[(7)]);
var inst_29372 = cljs.core.vec.call(null,inst_29348);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29384__$1,(15),out,inst_29372);
} else {
if((state_val_29385 === (2))){
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29384__$1,(4),ch);
} else {
if((state_val_29385 === (11))){
var inst_29364 = (state_29384[(2)]);
var inst_29365 = (new Array(n));
var inst_29348 = inst_29365;
var inst_29349 = (0);
var state_29384__$1 = (function (){var statearr_29396 = state_29384;
(statearr_29396[(7)] = inst_29348);

(statearr_29396[(10)] = inst_29364);

(statearr_29396[(8)] = inst_29349);

return statearr_29396;
})();
var statearr_29397_29424 = state_29384__$1;
(statearr_29397_29424[(2)] = null);

(statearr_29397_29424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (9))){
var inst_29348 = (state_29384[(7)]);
var inst_29362 = cljs.core.vec.call(null,inst_29348);
var state_29384__$1 = state_29384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29384__$1,(11),out,inst_29362);
} else {
if((state_val_29385 === (5))){
var inst_29348 = (state_29384[(7)]);
var inst_29357 = (state_29384[(11)]);
var inst_29352 = (state_29384[(9)]);
var inst_29349 = (state_29384[(8)]);
var inst_29356 = (inst_29348[inst_29349] = inst_29352);
var inst_29357__$1 = (inst_29349 + (1));
var inst_29358 = (inst_29357__$1 < n);
var state_29384__$1 = (function (){var statearr_29398 = state_29384;
(statearr_29398[(11)] = inst_29357__$1);

(statearr_29398[(12)] = inst_29356);

return statearr_29398;
})();
if(cljs.core.truth_(inst_29358)){
var statearr_29399_29425 = state_29384__$1;
(statearr_29399_29425[(1)] = (8));

} else {
var statearr_29400_29426 = state_29384__$1;
(statearr_29400_29426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (14))){
var inst_29377 = (state_29384[(2)]);
var inst_29378 = cljs.core.async.close_BANG_.call(null,out);
var state_29384__$1 = (function (){var statearr_29402 = state_29384;
(statearr_29402[(13)] = inst_29377);

return statearr_29402;
})();
var statearr_29403_29427 = state_29384__$1;
(statearr_29403_29427[(2)] = inst_29378);

(statearr_29403_29427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (10))){
var inst_29368 = (state_29384[(2)]);
var state_29384__$1 = state_29384;
var statearr_29404_29428 = state_29384__$1;
(statearr_29404_29428[(2)] = inst_29368);

(statearr_29404_29428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29385 === (8))){
var inst_29348 = (state_29384[(7)]);
var inst_29357 = (state_29384[(11)]);
var tmp29401 = inst_29348;
var inst_29348__$1 = tmp29401;
var inst_29349 = inst_29357;
var state_29384__$1 = (function (){var statearr_29405 = state_29384;
(statearr_29405[(7)] = inst_29348__$1);

(statearr_29405[(8)] = inst_29349);

return statearr_29405;
})();
var statearr_29406_29429 = state_29384__$1;
(statearr_29406_29429[(2)] = null);

(statearr_29406_29429[(1)] = (2));


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
});})(c__21347__auto___29415,out))
;
return ((function (switch__21285__auto__,c__21347__auto___29415,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_29410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29410[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_29410[(1)] = (1));

return statearr_29410;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_29384){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29411){if((e29411 instanceof Object)){
var ex__21289__auto__ = e29411;
var statearr_29412_29430 = state_29384;
(statearr_29412_29430[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29431 = state_29384;
state_29384 = G__29431;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_29384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_29384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___29415,out))
})();
var state__21349__auto__ = (function (){var statearr_29413 = f__21348__auto__.call(null);
(statearr_29413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___29415);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___29415,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__29433 = arguments.length;
switch (G__29433) {
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
var c__21347__auto___29506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21347__auto___29506,out){
return (function (){
var f__21348__auto__ = (function (){var switch__21285__auto__ = ((function (c__21347__auto___29506,out){
return (function (state_29475){
var state_val_29476 = (state_29475[(1)]);
if((state_val_29476 === (7))){
var inst_29471 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29477_29507 = state_29475__$1;
(statearr_29477_29507[(2)] = inst_29471);

(statearr_29477_29507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (1))){
var inst_29434 = [];
var inst_29435 = inst_29434;
var inst_29436 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29475__$1 = (function (){var statearr_29478 = state_29475;
(statearr_29478[(7)] = inst_29436);

(statearr_29478[(8)] = inst_29435);

return statearr_29478;
})();
var statearr_29479_29508 = state_29475__$1;
(statearr_29479_29508[(2)] = null);

(statearr_29479_29508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (4))){
var inst_29439 = (state_29475[(9)]);
var inst_29439__$1 = (state_29475[(2)]);
var inst_29440 = (inst_29439__$1 == null);
var inst_29441 = cljs.core.not.call(null,inst_29440);
var state_29475__$1 = (function (){var statearr_29480 = state_29475;
(statearr_29480[(9)] = inst_29439__$1);

return statearr_29480;
})();
if(inst_29441){
var statearr_29481_29509 = state_29475__$1;
(statearr_29481_29509[(1)] = (5));

} else {
var statearr_29482_29510 = state_29475__$1;
(statearr_29482_29510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (15))){
var inst_29465 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29483_29511 = state_29475__$1;
(statearr_29483_29511[(2)] = inst_29465);

(statearr_29483_29511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (13))){
var state_29475__$1 = state_29475;
var statearr_29484_29512 = state_29475__$1;
(statearr_29484_29512[(2)] = null);

(statearr_29484_29512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (6))){
var inst_29435 = (state_29475[(8)]);
var inst_29460 = inst_29435.length;
var inst_29461 = (inst_29460 > (0));
var state_29475__$1 = state_29475;
if(cljs.core.truth_(inst_29461)){
var statearr_29485_29513 = state_29475__$1;
(statearr_29485_29513[(1)] = (12));

} else {
var statearr_29486_29514 = state_29475__$1;
(statearr_29486_29514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (3))){
var inst_29473 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29475__$1,inst_29473);
} else {
if((state_val_29476 === (12))){
var inst_29435 = (state_29475[(8)]);
var inst_29463 = cljs.core.vec.call(null,inst_29435);
var state_29475__$1 = state_29475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29475__$1,(15),out,inst_29463);
} else {
if((state_val_29476 === (2))){
var state_29475__$1 = state_29475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29475__$1,(4),ch);
} else {
if((state_val_29476 === (11))){
var inst_29439 = (state_29475[(9)]);
var inst_29443 = (state_29475[(10)]);
var inst_29453 = (state_29475[(2)]);
var inst_29454 = [];
var inst_29455 = inst_29454.push(inst_29439);
var inst_29435 = inst_29454;
var inst_29436 = inst_29443;
var state_29475__$1 = (function (){var statearr_29487 = state_29475;
(statearr_29487[(7)] = inst_29436);

(statearr_29487[(11)] = inst_29453);

(statearr_29487[(12)] = inst_29455);

(statearr_29487[(8)] = inst_29435);

return statearr_29487;
})();
var statearr_29488_29515 = state_29475__$1;
(statearr_29488_29515[(2)] = null);

(statearr_29488_29515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (9))){
var inst_29435 = (state_29475[(8)]);
var inst_29451 = cljs.core.vec.call(null,inst_29435);
var state_29475__$1 = state_29475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29475__$1,(11),out,inst_29451);
} else {
if((state_val_29476 === (5))){
var inst_29436 = (state_29475[(7)]);
var inst_29439 = (state_29475[(9)]);
var inst_29443 = (state_29475[(10)]);
var inst_29443__$1 = f.call(null,inst_29439);
var inst_29444 = cljs.core._EQ_.call(null,inst_29443__$1,inst_29436);
var inst_29445 = cljs.core.keyword_identical_QMARK_.call(null,inst_29436,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29446 = (inst_29444) || (inst_29445);
var state_29475__$1 = (function (){var statearr_29489 = state_29475;
(statearr_29489[(10)] = inst_29443__$1);

return statearr_29489;
})();
if(cljs.core.truth_(inst_29446)){
var statearr_29490_29516 = state_29475__$1;
(statearr_29490_29516[(1)] = (8));

} else {
var statearr_29491_29517 = state_29475__$1;
(statearr_29491_29517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (14))){
var inst_29468 = (state_29475[(2)]);
var inst_29469 = cljs.core.async.close_BANG_.call(null,out);
var state_29475__$1 = (function (){var statearr_29493 = state_29475;
(statearr_29493[(13)] = inst_29468);

return statearr_29493;
})();
var statearr_29494_29518 = state_29475__$1;
(statearr_29494_29518[(2)] = inst_29469);

(statearr_29494_29518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (10))){
var inst_29458 = (state_29475[(2)]);
var state_29475__$1 = state_29475;
var statearr_29495_29519 = state_29475__$1;
(statearr_29495_29519[(2)] = inst_29458);

(statearr_29495_29519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29476 === (8))){
var inst_29439 = (state_29475[(9)]);
var inst_29443 = (state_29475[(10)]);
var inst_29435 = (state_29475[(8)]);
var inst_29448 = inst_29435.push(inst_29439);
var tmp29492 = inst_29435;
var inst_29435__$1 = tmp29492;
var inst_29436 = inst_29443;
var state_29475__$1 = (function (){var statearr_29496 = state_29475;
(statearr_29496[(7)] = inst_29436);

(statearr_29496[(8)] = inst_29435__$1);

(statearr_29496[(14)] = inst_29448);

return statearr_29496;
})();
var statearr_29497_29520 = state_29475__$1;
(statearr_29497_29520[(2)] = null);

(statearr_29497_29520[(1)] = (2));


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
});})(c__21347__auto___29506,out))
;
return ((function (switch__21285__auto__,c__21347__auto___29506,out){
return (function() {
var cljs$core$async$state_machine__21286__auto__ = null;
var cljs$core$async$state_machine__21286__auto____0 = (function (){
var statearr_29501 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29501[(0)] = cljs$core$async$state_machine__21286__auto__);

(statearr_29501[(1)] = (1));

return statearr_29501;
});
var cljs$core$async$state_machine__21286__auto____1 = (function (state_29475){
while(true){
var ret_value__21287__auto__ = (function (){try{while(true){
var result__21288__auto__ = switch__21285__auto__.call(null,state_29475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21288__auto__;
}
break;
}
}catch (e29502){if((e29502 instanceof Object)){
var ex__21289__auto__ = e29502;
var statearr_29503_29521 = state_29475;
(statearr_29503_29521[(5)] = ex__21289__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29522 = state_29475;
state_29475 = G__29522;
continue;
} else {
return ret_value__21287__auto__;
}
break;
}
});
cljs$core$async$state_machine__21286__auto__ = function(state_29475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21286__auto____1.call(this,state_29475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21286__auto____0;
cljs$core$async$state_machine__21286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21286__auto____1;
return cljs$core$async$state_machine__21286__auto__;
})()
;})(switch__21285__auto__,c__21347__auto___29506,out))
})();
var state__21349__auto__ = (function (){var statearr_29504 = f__21348__auto__.call(null);
(statearr_29504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21347__auto___29506);

return statearr_29504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21349__auto__);
});})(c__21347__auto___29506,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440563463258