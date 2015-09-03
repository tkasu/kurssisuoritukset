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
if(typeof cljs.core.async.t_cljs$core$async28389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28389 = (function (fn_handler,f,meta28390){
this.fn_handler = fn_handler;
this.f = f;
this.meta28390 = meta28390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28391,meta28390__$1){
var self__ = this;
var _28391__$1 = this;
return (new cljs.core.async.t_cljs$core$async28389(self__.fn_handler,self__.f,meta28390__$1));
});

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28391){
var self__ = this;
var _28391__$1 = this;
return self__.meta28390;
});

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28390","meta28390",935979785,null)], null);
});

cljs.core.async.t_cljs$core$async28389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28389";

cljs.core.async.t_cljs$core$async28389.cljs$lang$ctorPrWriter = (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async28389");
});

cljs.core.async.__GT_t_cljs$core$async28389 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async28389(fn_handler__$1,f__$1,meta28390){
return (new cljs.core.async.t_cljs$core$async28389(fn_handler__$1,f__$1,meta28390));
});

}

return (new cljs.core.async.t_cljs$core$async28389(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args28394 = [];
var len__19702__auto___28397 = arguments.length;
var i__19703__auto___28398 = (0);
while(true){
if((i__19703__auto___28398 < len__19702__auto___28397)){
args28394.push((arguments[i__19703__auto___28398]));

var G__28399 = (i__19703__auto___28398 + (1));
i__19703__auto___28398 = G__28399;
continue;
} else {
}
break;
}

var G__28396 = args28394.length;
switch (G__28396) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28394.length)].join('')));

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
var args28401 = [];
var len__19702__auto___28404 = arguments.length;
var i__19703__auto___28405 = (0);
while(true){
if((i__19703__auto___28405 < len__19702__auto___28404)){
args28401.push((arguments[i__19703__auto___28405]));

var G__28406 = (i__19703__auto___28405 + (1));
i__19703__auto___28405 = G__28406;
continue;
} else {
}
break;
}

var G__28403 = args28401.length;
switch (G__28403) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28401.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28408 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28408);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28408,ret){
return (function (){
return fn1.call(null,val_28408);
});})(val_28408,ret))
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
var args28409 = [];
var len__19702__auto___28412 = arguments.length;
var i__19703__auto___28413 = (0);
while(true){
if((i__19703__auto___28413 < len__19702__auto___28412)){
args28409.push((arguments[i__19703__auto___28413]));

var G__28414 = (i__19703__auto___28413 + (1));
i__19703__auto___28413 = G__28414;
continue;
} else {
}
break;
}

var G__28411 = args28409.length;
switch (G__28411) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28409.length)].join('')));

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
var n__19547__auto___28416 = n;
var x_28417 = (0);
while(true){
if((x_28417 < n__19547__auto___28416)){
(a[x_28417] = (0));

var G__28418 = (x_28417 + (1));
x_28417 = G__28418;
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

var G__28419 = (i + (1));
i = G__28419;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28423 = (function (alt_flag,flag,meta28424){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28424 = meta28424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28425,meta28424__$1){
var self__ = this;
var _28425__$1 = this;
return (new cljs.core.async.t_cljs$core$async28423(self__.alt_flag,self__.flag,meta28424__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28425){
var self__ = this;
var _28425__$1 = this;
return self__.meta28424;
});})(flag))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28423.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28424","meta28424",-392485533,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28423";

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async28423");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28423 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28423(alt_flag__$1,flag__$1,meta28424){
return (new cljs.core.async.t_cljs$core$async28423(alt_flag__$1,flag__$1,meta28424));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28423(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28429 = (function (alt_handler,flag,cb,meta28430){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28430 = meta28430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28431,meta28430__$1){
var self__ = this;
var _28431__$1 = this;
return (new cljs.core.async.t_cljs$core$async28429(self__.alt_handler,self__.flag,self__.cb,meta28430__$1));
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28431){
var self__ = this;
var _28431__$1 = this;
return self__.meta28430;
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28430","meta28430",-1657478422,null)], null);
});

cljs.core.async.t_cljs$core$async28429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28429";

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorPrWriter = (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async28429");
});

cljs.core.async.__GT_t_cljs$core$async28429 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28429(alt_handler__$1,flag__$1,cb__$1,meta28430){
return (new cljs.core.async.t_cljs$core$async28429(alt_handler__$1,flag__$1,cb__$1,meta28430));
});

}

return (new cljs.core.async.t_cljs$core$async28429(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28432_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28432_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28433_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28433_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18644__auto__ = wport;
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28434 = (i + (1));
i = G__28434;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18644__auto__ = ret;
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18632__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18632__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18632__auto__;
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
var args__19709__auto__ = [];
var len__19702__auto___28440 = arguments.length;
var i__19703__auto___28441 = (0);
while(true){
if((i__19703__auto___28441 < len__19702__auto___28440)){
args__19709__auto__.push((arguments[i__19703__auto___28441]));

var G__28442 = (i__19703__auto___28441 + (1));
i__19703__auto___28441 = G__28442;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((1) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19710__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28437){
var map__28438 = p__28437;
var map__28438__$1 = ((((!((map__28438 == null)))?((((map__28438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28438):map__28438);
var opts = map__28438__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28435){
var G__28436 = cljs.core.first.call(null,seq28435);
var seq28435__$1 = cljs.core.next.call(null,seq28435);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28436,seq28435__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28443 = [];
var len__19702__auto___28493 = arguments.length;
var i__19703__auto___28494 = (0);
while(true){
if((i__19703__auto___28494 < len__19702__auto___28493)){
args28443.push((arguments[i__19703__auto___28494]));

var G__28495 = (i__19703__auto___28494 + (1));
i__19703__auto___28494 = G__28495;
continue;
} else {
}
break;
}

var G__28445 = args28443.length;
switch (G__28445) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28443.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22145__auto___28497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___28497){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___28497){
return (function (state_28469){
var state_val_28470 = (state_28469[(1)]);
if((state_val_28470 === (7))){
var inst_28465 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28471_28498 = state_28469__$1;
(statearr_28471_28498[(2)] = inst_28465);

(statearr_28471_28498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (1))){
var state_28469__$1 = state_28469;
var statearr_28472_28499 = state_28469__$1;
(statearr_28472_28499[(2)] = null);

(statearr_28472_28499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (4))){
var inst_28448 = (state_28469[(7)]);
var inst_28448__$1 = (state_28469[(2)]);
var inst_28449 = (inst_28448__$1 == null);
var state_28469__$1 = (function (){var statearr_28473 = state_28469;
(statearr_28473[(7)] = inst_28448__$1);

return statearr_28473;
})();
if(cljs.core.truth_(inst_28449)){
var statearr_28474_28500 = state_28469__$1;
(statearr_28474_28500[(1)] = (5));

} else {
var statearr_28475_28501 = state_28469__$1;
(statearr_28475_28501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (13))){
var state_28469__$1 = state_28469;
var statearr_28476_28502 = state_28469__$1;
(statearr_28476_28502[(2)] = null);

(statearr_28476_28502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (6))){
var inst_28448 = (state_28469[(7)]);
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28469__$1,(11),to,inst_28448);
} else {
if((state_val_28470 === (3))){
var inst_28467 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28469__$1,inst_28467);
} else {
if((state_val_28470 === (12))){
var state_28469__$1 = state_28469;
var statearr_28477_28503 = state_28469__$1;
(statearr_28477_28503[(2)] = null);

(statearr_28477_28503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (2))){
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28469__$1,(4),from);
} else {
if((state_val_28470 === (11))){
var inst_28458 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
if(cljs.core.truth_(inst_28458)){
var statearr_28478_28504 = state_28469__$1;
(statearr_28478_28504[(1)] = (12));

} else {
var statearr_28479_28505 = state_28469__$1;
(statearr_28479_28505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (9))){
var state_28469__$1 = state_28469;
var statearr_28480_28506 = state_28469__$1;
(statearr_28480_28506[(2)] = null);

(statearr_28480_28506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (5))){
var state_28469__$1 = state_28469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28481_28507 = state_28469__$1;
(statearr_28481_28507[(1)] = (8));

} else {
var statearr_28482_28508 = state_28469__$1;
(statearr_28482_28508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (14))){
var inst_28463 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28483_28509 = state_28469__$1;
(statearr_28483_28509[(2)] = inst_28463);

(statearr_28483_28509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (10))){
var inst_28455 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28484_28510 = state_28469__$1;
(statearr_28484_28510[(2)] = inst_28455);

(statearr_28484_28510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (8))){
var inst_28452 = cljs.core.async.close_BANG_.call(null,to);
var state_28469__$1 = state_28469;
var statearr_28485_28511 = state_28469__$1;
(statearr_28485_28511[(2)] = inst_28452);

(statearr_28485_28511[(1)] = (10));


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
});})(c__22145__auto___28497))
;
return ((function (switch__22080__auto__,c__22145__auto___28497){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_28489 = [null,null,null,null,null,null,null,null];
(statearr_28489[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_28489[(1)] = (1));

return statearr_28489;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_28469){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28490){if((e28490 instanceof Object)){
var ex__22084__auto__ = e28490;
var statearr_28491_28512 = state_28469;
(statearr_28491_28512[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28513 = state_28469;
state_28469 = G__28513;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_28469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_28469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___28497))
})();
var state__22147__auto__ = (function (){var statearr_28492 = f__22146__auto__.call(null);
(statearr_28492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___28497);

return statearr_28492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___28497))
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
return (function (p__28697){
var vec__28698 = p__28697;
var v = cljs.core.nth.call(null,vec__28698,(0),null);
var p = cljs.core.nth.call(null,vec__28698,(1),null);
var job = vec__28698;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22145__auto___28880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___28880,res,vec__28698,v,p,job,jobs,results){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___28880,res,vec__28698,v,p,job,jobs,results){
return (function (state_28703){
var state_val_28704 = (state_28703[(1)]);
if((state_val_28704 === (1))){
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28703__$1,(2),res,v);
} else {
if((state_val_28704 === (2))){
var inst_28700 = (state_28703[(2)]);
var inst_28701 = cljs.core.async.close_BANG_.call(null,res);
var state_28703__$1 = (function (){var statearr_28705 = state_28703;
(statearr_28705[(7)] = inst_28700);

return statearr_28705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28703__$1,inst_28701);
} else {
return null;
}
}
});})(c__22145__auto___28880,res,vec__28698,v,p,job,jobs,results))
;
return ((function (switch__22080__auto__,c__22145__auto___28880,res,vec__28698,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1 = (function (state_28703){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28710){if((e28710 instanceof Object)){
var ex__22084__auto__ = e28710;
var statearr_28711_28881 = state_28703;
(statearr_28711_28881[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28882 = state_28703;
state_28703 = G__28882;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = function(state_28703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1.call(this,state_28703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___28880,res,vec__28698,v,p,job,jobs,results))
})();
var state__22147__auto__ = (function (){var statearr_28712 = f__22146__auto__.call(null);
(statearr_28712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___28880);

return statearr_28712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___28880,res,vec__28698,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28713){
var vec__28714 = p__28713;
var v = cljs.core.nth.call(null,vec__28714,(0),null);
var p = cljs.core.nth.call(null,vec__28714,(1),null);
var job = vec__28714;
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
var n__19547__auto___28883 = n;
var __28884 = (0);
while(true){
if((__28884 < n__19547__auto___28883)){
var G__28715_28885 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28715_28885) {
case "compute":
var c__22145__auto___28887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28884,c__22145__auto___28887,G__28715_28885,n__19547__auto___28883,jobs,results,process,async){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (__28884,c__22145__auto___28887,G__28715_28885,n__19547__auto___28883,jobs,results,process,async){
return (function (state_28728){
var state_val_28729 = (state_28728[(1)]);
if((state_val_28729 === (1))){
var state_28728__$1 = state_28728;
var statearr_28730_28888 = state_28728__$1;
(statearr_28730_28888[(2)] = null);

(statearr_28730_28888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (2))){
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28728__$1,(4),jobs);
} else {
if((state_val_28729 === (3))){
var inst_28726 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28728__$1,inst_28726);
} else {
if((state_val_28729 === (4))){
var inst_28718 = (state_28728[(2)]);
var inst_28719 = process.call(null,inst_28718);
var state_28728__$1 = state_28728;
if(cljs.core.truth_(inst_28719)){
var statearr_28731_28889 = state_28728__$1;
(statearr_28731_28889[(1)] = (5));

} else {
var statearr_28732_28890 = state_28728__$1;
(statearr_28732_28890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (5))){
var state_28728__$1 = state_28728;
var statearr_28733_28891 = state_28728__$1;
(statearr_28733_28891[(2)] = null);

(statearr_28733_28891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (6))){
var state_28728__$1 = state_28728;
var statearr_28734_28892 = state_28728__$1;
(statearr_28734_28892[(2)] = null);

(statearr_28734_28892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28729 === (7))){
var inst_28724 = (state_28728[(2)]);
var state_28728__$1 = state_28728;
var statearr_28735_28893 = state_28728__$1;
(statearr_28735_28893[(2)] = inst_28724);

(statearr_28735_28893[(1)] = (3));


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
});})(__28884,c__22145__auto___28887,G__28715_28885,n__19547__auto___28883,jobs,results,process,async))
;
return ((function (__28884,switch__22080__auto__,c__22145__auto___28887,G__28715_28885,n__19547__auto___28883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0 = (function (){
var statearr_28739 = [null,null,null,null,null,null,null];
(statearr_28739[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__);

(statearr_28739[(1)] = (1));

return statearr_28739;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1 = (function (state_28728){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28740){if((e28740 instanceof Object)){
var ex__22084__auto__ = e28740;
var statearr_28741_28894 = state_28728;
(statearr_28741_28894[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28895 = state_28728;
state_28728 = G__28895;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = function(state_28728){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1.call(this,state_28728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__;
})()
;})(__28884,switch__22080__auto__,c__22145__auto___28887,G__28715_28885,n__19547__auto___28883,jobs,results,process,async))
})();
var state__22147__auto__ = (function (){var statearr_28742 = f__22146__auto__.call(null);
(statearr_28742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___28887);

return statearr_28742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(__28884,c__22145__auto___28887,G__28715_28885,n__19547__auto___28883,jobs,results,process,async))
);


break;
case "async":
var c__22145__auto___28896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28884,c__22145__auto___28896,G__28715_28885,n__19547__auto___28883,jobs,results,process,async){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (__28884,c__22145__auto___28896,G__28715_28885,n__19547__auto___28883,jobs,results,process,async){
return (function (state_28755){
var state_val_28756 = (state_28755[(1)]);
if((state_val_28756 === (1))){
var state_28755__$1 = state_28755;
var statearr_28757_28897 = state_28755__$1;
(statearr_28757_28897[(2)] = null);

(statearr_28757_28897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (2))){
var state_28755__$1 = state_28755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28755__$1,(4),jobs);
} else {
if((state_val_28756 === (3))){
var inst_28753 = (state_28755[(2)]);
var state_28755__$1 = state_28755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28755__$1,inst_28753);
} else {
if((state_val_28756 === (4))){
var inst_28745 = (state_28755[(2)]);
var inst_28746 = async.call(null,inst_28745);
var state_28755__$1 = state_28755;
if(cljs.core.truth_(inst_28746)){
var statearr_28758_28898 = state_28755__$1;
(statearr_28758_28898[(1)] = (5));

} else {
var statearr_28759_28899 = state_28755__$1;
(statearr_28759_28899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (5))){
var state_28755__$1 = state_28755;
var statearr_28760_28900 = state_28755__$1;
(statearr_28760_28900[(2)] = null);

(statearr_28760_28900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (6))){
var state_28755__$1 = state_28755;
var statearr_28761_28901 = state_28755__$1;
(statearr_28761_28901[(2)] = null);

(statearr_28761_28901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28756 === (7))){
var inst_28751 = (state_28755[(2)]);
var state_28755__$1 = state_28755;
var statearr_28762_28902 = state_28755__$1;
(statearr_28762_28902[(2)] = inst_28751);

(statearr_28762_28902[(1)] = (3));


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
});})(__28884,c__22145__auto___28896,G__28715_28885,n__19547__auto___28883,jobs,results,process,async))
;
return ((function (__28884,switch__22080__auto__,c__22145__auto___28896,G__28715_28885,n__19547__auto___28883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0 = (function (){
var statearr_28766 = [null,null,null,null,null,null,null];
(statearr_28766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__);

(statearr_28766[(1)] = (1));

return statearr_28766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1 = (function (state_28755){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28767){if((e28767 instanceof Object)){
var ex__22084__auto__ = e28767;
var statearr_28768_28903 = state_28755;
(statearr_28768_28903[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28904 = state_28755;
state_28755 = G__28904;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = function(state_28755){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1.call(this,state_28755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__;
})()
;})(__28884,switch__22080__auto__,c__22145__auto___28896,G__28715_28885,n__19547__auto___28883,jobs,results,process,async))
})();
var state__22147__auto__ = (function (){var statearr_28769 = f__22146__auto__.call(null);
(statearr_28769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___28896);

return statearr_28769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(__28884,c__22145__auto___28896,G__28715_28885,n__19547__auto___28883,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28905 = (__28884 + (1));
__28884 = G__28905;
continue;
} else {
}
break;
}

var c__22145__auto___28906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___28906,jobs,results,process,async){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___28906,jobs,results,process,async){
return (function (state_28791){
var state_val_28792 = (state_28791[(1)]);
if((state_val_28792 === (1))){
var state_28791__$1 = state_28791;
var statearr_28793_28907 = state_28791__$1;
(statearr_28793_28907[(2)] = null);

(statearr_28793_28907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (2))){
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28791__$1,(4),from);
} else {
if((state_val_28792 === (3))){
var inst_28789 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28791__$1,inst_28789);
} else {
if((state_val_28792 === (4))){
var inst_28772 = (state_28791[(7)]);
var inst_28772__$1 = (state_28791[(2)]);
var inst_28773 = (inst_28772__$1 == null);
var state_28791__$1 = (function (){var statearr_28794 = state_28791;
(statearr_28794[(7)] = inst_28772__$1);

return statearr_28794;
})();
if(cljs.core.truth_(inst_28773)){
var statearr_28795_28908 = state_28791__$1;
(statearr_28795_28908[(1)] = (5));

} else {
var statearr_28796_28909 = state_28791__$1;
(statearr_28796_28909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (5))){
var inst_28775 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28791__$1 = state_28791;
var statearr_28797_28910 = state_28791__$1;
(statearr_28797_28910[(2)] = inst_28775);

(statearr_28797_28910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (6))){
var inst_28777 = (state_28791[(8)]);
var inst_28772 = (state_28791[(7)]);
var inst_28777__$1 = cljs.core.async.chan.call(null,(1));
var inst_28778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28779 = [inst_28772,inst_28777__$1];
var inst_28780 = (new cljs.core.PersistentVector(null,2,(5),inst_28778,inst_28779,null));
var state_28791__$1 = (function (){var statearr_28798 = state_28791;
(statearr_28798[(8)] = inst_28777__$1);

return statearr_28798;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28791__$1,(8),jobs,inst_28780);
} else {
if((state_val_28792 === (7))){
var inst_28787 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28799_28911 = state_28791__$1;
(statearr_28799_28911[(2)] = inst_28787);

(statearr_28799_28911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (8))){
var inst_28777 = (state_28791[(8)]);
var inst_28782 = (state_28791[(2)]);
var state_28791__$1 = (function (){var statearr_28800 = state_28791;
(statearr_28800[(9)] = inst_28782);

return statearr_28800;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28791__$1,(9),results,inst_28777);
} else {
if((state_val_28792 === (9))){
var inst_28784 = (state_28791[(2)]);
var state_28791__$1 = (function (){var statearr_28801 = state_28791;
(statearr_28801[(10)] = inst_28784);

return statearr_28801;
})();
var statearr_28802_28912 = state_28791__$1;
(statearr_28802_28912[(2)] = null);

(statearr_28802_28912[(1)] = (2));


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
});})(c__22145__auto___28906,jobs,results,process,async))
;
return ((function (switch__22080__auto__,c__22145__auto___28906,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0 = (function (){
var statearr_28806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28806[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__);

(statearr_28806[(1)] = (1));

return statearr_28806;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1 = (function (state_28791){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28807){if((e28807 instanceof Object)){
var ex__22084__auto__ = e28807;
var statearr_28808_28913 = state_28791;
(statearr_28808_28913[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28791;
state_28791 = G__28914;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___28906,jobs,results,process,async))
})();
var state__22147__auto__ = (function (){var statearr_28809 = f__22146__auto__.call(null);
(statearr_28809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___28906);

return statearr_28809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___28906,jobs,results,process,async))
);


var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__,jobs,results,process,async){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__,jobs,results,process,async){
return (function (state_28847){
var state_val_28848 = (state_28847[(1)]);
if((state_val_28848 === (7))){
var inst_28843 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28849_28915 = state_28847__$1;
(statearr_28849_28915[(2)] = inst_28843);

(statearr_28849_28915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (20))){
var state_28847__$1 = state_28847;
var statearr_28850_28916 = state_28847__$1;
(statearr_28850_28916[(2)] = null);

(statearr_28850_28916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (1))){
var state_28847__$1 = state_28847;
var statearr_28851_28917 = state_28847__$1;
(statearr_28851_28917[(2)] = null);

(statearr_28851_28917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (4))){
var inst_28812 = (state_28847[(7)]);
var inst_28812__$1 = (state_28847[(2)]);
var inst_28813 = (inst_28812__$1 == null);
var state_28847__$1 = (function (){var statearr_28852 = state_28847;
(statearr_28852[(7)] = inst_28812__$1);

return statearr_28852;
})();
if(cljs.core.truth_(inst_28813)){
var statearr_28853_28918 = state_28847__$1;
(statearr_28853_28918[(1)] = (5));

} else {
var statearr_28854_28919 = state_28847__$1;
(statearr_28854_28919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (15))){
var inst_28825 = (state_28847[(8)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28847__$1,(18),to,inst_28825);
} else {
if((state_val_28848 === (21))){
var inst_28838 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28855_28920 = state_28847__$1;
(statearr_28855_28920[(2)] = inst_28838);

(statearr_28855_28920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (13))){
var inst_28840 = (state_28847[(2)]);
var state_28847__$1 = (function (){var statearr_28856 = state_28847;
(statearr_28856[(9)] = inst_28840);

return statearr_28856;
})();
var statearr_28857_28921 = state_28847__$1;
(statearr_28857_28921[(2)] = null);

(statearr_28857_28921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (6))){
var inst_28812 = (state_28847[(7)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28847__$1,(11),inst_28812);
} else {
if((state_val_28848 === (17))){
var inst_28833 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
if(cljs.core.truth_(inst_28833)){
var statearr_28858_28922 = state_28847__$1;
(statearr_28858_28922[(1)] = (19));

} else {
var statearr_28859_28923 = state_28847__$1;
(statearr_28859_28923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (3))){
var inst_28845 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28847__$1,inst_28845);
} else {
if((state_val_28848 === (12))){
var inst_28822 = (state_28847[(10)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28847__$1,(14),inst_28822);
} else {
if((state_val_28848 === (2))){
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28847__$1,(4),results);
} else {
if((state_val_28848 === (19))){
var state_28847__$1 = state_28847;
var statearr_28860_28924 = state_28847__$1;
(statearr_28860_28924[(2)] = null);

(statearr_28860_28924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (11))){
var inst_28822 = (state_28847[(2)]);
var state_28847__$1 = (function (){var statearr_28861 = state_28847;
(statearr_28861[(10)] = inst_28822);

return statearr_28861;
})();
var statearr_28862_28925 = state_28847__$1;
(statearr_28862_28925[(2)] = null);

(statearr_28862_28925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (9))){
var state_28847__$1 = state_28847;
var statearr_28863_28926 = state_28847__$1;
(statearr_28863_28926[(2)] = null);

(statearr_28863_28926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (5))){
var state_28847__$1 = state_28847;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28864_28927 = state_28847__$1;
(statearr_28864_28927[(1)] = (8));

} else {
var statearr_28865_28928 = state_28847__$1;
(statearr_28865_28928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (14))){
var inst_28825 = (state_28847[(8)]);
var inst_28827 = (state_28847[(11)]);
var inst_28825__$1 = (state_28847[(2)]);
var inst_28826 = (inst_28825__$1 == null);
var inst_28827__$1 = cljs.core.not.call(null,inst_28826);
var state_28847__$1 = (function (){var statearr_28866 = state_28847;
(statearr_28866[(8)] = inst_28825__$1);

(statearr_28866[(11)] = inst_28827__$1);

return statearr_28866;
})();
if(inst_28827__$1){
var statearr_28867_28929 = state_28847__$1;
(statearr_28867_28929[(1)] = (15));

} else {
var statearr_28868_28930 = state_28847__$1;
(statearr_28868_28930[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (16))){
var inst_28827 = (state_28847[(11)]);
var state_28847__$1 = state_28847;
var statearr_28869_28931 = state_28847__$1;
(statearr_28869_28931[(2)] = inst_28827);

(statearr_28869_28931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (10))){
var inst_28819 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28870_28932 = state_28847__$1;
(statearr_28870_28932[(2)] = inst_28819);

(statearr_28870_28932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (18))){
var inst_28830 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28871_28933 = state_28847__$1;
(statearr_28871_28933[(2)] = inst_28830);

(statearr_28871_28933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (8))){
var inst_28816 = cljs.core.async.close_BANG_.call(null,to);
var state_28847__$1 = state_28847;
var statearr_28872_28934 = state_28847__$1;
(statearr_28872_28934[(2)] = inst_28816);

(statearr_28872_28934[(1)] = (10));


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
});})(c__22145__auto__,jobs,results,process,async))
;
return ((function (switch__22080__auto__,c__22145__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0 = (function (){
var statearr_28876 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__);

(statearr_28876[(1)] = (1));

return statearr_28876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1 = (function (state_28847){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e28877){if((e28877 instanceof Object)){
var ex__22084__auto__ = e28877;
var statearr_28878_28935 = state_28847;
(statearr_28878_28935[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28936 = state_28847;
state_28847 = G__28936;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__ = function(state_28847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1.call(this,state_28847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22081__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__,jobs,results,process,async))
})();
var state__22147__auto__ = (function (){var statearr_28879 = f__22146__auto__.call(null);
(statearr_28879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_28879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__,jobs,results,process,async))
);

return c__22145__auto__;
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
var args28937 = [];
var len__19702__auto___28940 = arguments.length;
var i__19703__auto___28941 = (0);
while(true){
if((i__19703__auto___28941 < len__19702__auto___28940)){
args28937.push((arguments[i__19703__auto___28941]));

var G__28942 = (i__19703__auto___28941 + (1));
i__19703__auto___28941 = G__28942;
continue;
} else {
}
break;
}

var G__28939 = args28937.length;
switch (G__28939) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28937.length)].join('')));

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
var args28944 = [];
var len__19702__auto___28947 = arguments.length;
var i__19703__auto___28948 = (0);
while(true){
if((i__19703__auto___28948 < len__19702__auto___28947)){
args28944.push((arguments[i__19703__auto___28948]));

var G__28949 = (i__19703__auto___28948 + (1));
i__19703__auto___28948 = G__28949;
continue;
} else {
}
break;
}

var G__28946 = args28944.length;
switch (G__28946) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28944.length)].join('')));

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
var args28951 = [];
var len__19702__auto___29004 = arguments.length;
var i__19703__auto___29005 = (0);
while(true){
if((i__19703__auto___29005 < len__19702__auto___29004)){
args28951.push((arguments[i__19703__auto___29005]));

var G__29006 = (i__19703__auto___29005 + (1));
i__19703__auto___29005 = G__29006;
continue;
} else {
}
break;
}

var G__28953 = args28951.length;
switch (G__28953) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28951.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22145__auto___29008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___29008,tc,fc){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___29008,tc,fc){
return (function (state_28979){
var state_val_28980 = (state_28979[(1)]);
if((state_val_28980 === (7))){
var inst_28975 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28981_29009 = state_28979__$1;
(statearr_28981_29009[(2)] = inst_28975);

(statearr_28981_29009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (1))){
var state_28979__$1 = state_28979;
var statearr_28982_29010 = state_28979__$1;
(statearr_28982_29010[(2)] = null);

(statearr_28982_29010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (4))){
var inst_28956 = (state_28979[(7)]);
var inst_28956__$1 = (state_28979[(2)]);
var inst_28957 = (inst_28956__$1 == null);
var state_28979__$1 = (function (){var statearr_28983 = state_28979;
(statearr_28983[(7)] = inst_28956__$1);

return statearr_28983;
})();
if(cljs.core.truth_(inst_28957)){
var statearr_28984_29011 = state_28979__$1;
(statearr_28984_29011[(1)] = (5));

} else {
var statearr_28985_29012 = state_28979__$1;
(statearr_28985_29012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (13))){
var state_28979__$1 = state_28979;
var statearr_28986_29013 = state_28979__$1;
(statearr_28986_29013[(2)] = null);

(statearr_28986_29013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (6))){
var inst_28956 = (state_28979[(7)]);
var inst_28962 = p.call(null,inst_28956);
var state_28979__$1 = state_28979;
if(cljs.core.truth_(inst_28962)){
var statearr_28987_29014 = state_28979__$1;
(statearr_28987_29014[(1)] = (9));

} else {
var statearr_28988_29015 = state_28979__$1;
(statearr_28988_29015[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (3))){
var inst_28977 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28979__$1,inst_28977);
} else {
if((state_val_28980 === (12))){
var state_28979__$1 = state_28979;
var statearr_28989_29016 = state_28979__$1;
(statearr_28989_29016[(2)] = null);

(statearr_28989_29016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (2))){
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28979__$1,(4),ch);
} else {
if((state_val_28980 === (11))){
var inst_28956 = (state_28979[(7)]);
var inst_28966 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28979__$1,(8),inst_28966,inst_28956);
} else {
if((state_val_28980 === (9))){
var state_28979__$1 = state_28979;
var statearr_28990_29017 = state_28979__$1;
(statearr_28990_29017[(2)] = tc);

(statearr_28990_29017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (5))){
var inst_28959 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28960 = cljs.core.async.close_BANG_.call(null,fc);
var state_28979__$1 = (function (){var statearr_28991 = state_28979;
(statearr_28991[(8)] = inst_28959);

return statearr_28991;
})();
var statearr_28992_29018 = state_28979__$1;
(statearr_28992_29018[(2)] = inst_28960);

(statearr_28992_29018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (14))){
var inst_28973 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
var statearr_28993_29019 = state_28979__$1;
(statearr_28993_29019[(2)] = inst_28973);

(statearr_28993_29019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (10))){
var state_28979__$1 = state_28979;
var statearr_28994_29020 = state_28979__$1;
(statearr_28994_29020[(2)] = fc);

(statearr_28994_29020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28980 === (8))){
var inst_28968 = (state_28979[(2)]);
var state_28979__$1 = state_28979;
if(cljs.core.truth_(inst_28968)){
var statearr_28995_29021 = state_28979__$1;
(statearr_28995_29021[(1)] = (12));

} else {
var statearr_28996_29022 = state_28979__$1;
(statearr_28996_29022[(1)] = (13));

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
});})(c__22145__auto___29008,tc,fc))
;
return ((function (switch__22080__auto__,c__22145__auto___29008,tc,fc){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_29000 = [null,null,null,null,null,null,null,null,null];
(statearr_29000[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_29000[(1)] = (1));

return statearr_29000;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_28979){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_28979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e29001){if((e29001 instanceof Object)){
var ex__22084__auto__ = e29001;
var statearr_29002_29023 = state_28979;
(statearr_29002_29023[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29024 = state_28979;
state_28979 = G__29024;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_28979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_28979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___29008,tc,fc))
})();
var state__22147__auto__ = (function (){var statearr_29003 = f__22146__auto__.call(null);
(statearr_29003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___29008);

return statearr_29003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___29008,tc,fc))
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
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__){
return (function (state_29071){
var state_val_29072 = (state_29071[(1)]);
if((state_val_29072 === (1))){
var inst_29057 = init;
var state_29071__$1 = (function (){var statearr_29073 = state_29071;
(statearr_29073[(7)] = inst_29057);

return statearr_29073;
})();
var statearr_29074_29089 = state_29071__$1;
(statearr_29074_29089[(2)] = null);

(statearr_29074_29089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (2))){
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29071__$1,(4),ch);
} else {
if((state_val_29072 === (3))){
var inst_29069 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29071__$1,inst_29069);
} else {
if((state_val_29072 === (4))){
var inst_29060 = (state_29071[(8)]);
var inst_29060__$1 = (state_29071[(2)]);
var inst_29061 = (inst_29060__$1 == null);
var state_29071__$1 = (function (){var statearr_29075 = state_29071;
(statearr_29075[(8)] = inst_29060__$1);

return statearr_29075;
})();
if(cljs.core.truth_(inst_29061)){
var statearr_29076_29090 = state_29071__$1;
(statearr_29076_29090[(1)] = (5));

} else {
var statearr_29077_29091 = state_29071__$1;
(statearr_29077_29091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (5))){
var inst_29057 = (state_29071[(7)]);
var state_29071__$1 = state_29071;
var statearr_29078_29092 = state_29071__$1;
(statearr_29078_29092[(2)] = inst_29057);

(statearr_29078_29092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (6))){
var inst_29060 = (state_29071[(8)]);
var inst_29057 = (state_29071[(7)]);
var inst_29064 = f.call(null,inst_29057,inst_29060);
var inst_29057__$1 = inst_29064;
var state_29071__$1 = (function (){var statearr_29079 = state_29071;
(statearr_29079[(7)] = inst_29057__$1);

return statearr_29079;
})();
var statearr_29080_29093 = state_29071__$1;
(statearr_29080_29093[(2)] = null);

(statearr_29080_29093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29072 === (7))){
var inst_29067 = (state_29071[(2)]);
var state_29071__$1 = state_29071;
var statearr_29081_29094 = state_29071__$1;
(statearr_29081_29094[(2)] = inst_29067);

(statearr_29081_29094[(1)] = (3));


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
});})(c__22145__auto__))
;
return ((function (switch__22080__auto__,c__22145__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22081__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22081__auto____0 = (function (){
var statearr_29085 = [null,null,null,null,null,null,null,null,null];
(statearr_29085[(0)] = cljs$core$async$reduce_$_state_machine__22081__auto__);

(statearr_29085[(1)] = (1));

return statearr_29085;
});
var cljs$core$async$reduce_$_state_machine__22081__auto____1 = (function (state_29071){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_29071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e29086){if((e29086 instanceof Object)){
var ex__22084__auto__ = e29086;
var statearr_29087_29095 = state_29071;
(statearr_29087_29095[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29096 = state_29071;
state_29071 = G__29096;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22081__auto__ = function(state_29071){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22081__auto____1.call(this,state_29071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22081__auto____0;
cljs$core$async$reduce_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22081__auto____1;
return cljs$core$async$reduce_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__))
})();
var state__22147__auto__ = (function (){var statearr_29088 = f__22146__auto__.call(null);
(statearr_29088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_29088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__))
);

return c__22145__auto__;
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
var args29097 = [];
var len__19702__auto___29149 = arguments.length;
var i__19703__auto___29150 = (0);
while(true){
if((i__19703__auto___29150 < len__19702__auto___29149)){
args29097.push((arguments[i__19703__auto___29150]));

var G__29151 = (i__19703__auto___29150 + (1));
i__19703__auto___29150 = G__29151;
continue;
} else {
}
break;
}

var G__29099 = args29097.length;
switch (G__29099) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29097.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__){
return (function (state_29124){
var state_val_29125 = (state_29124[(1)]);
if((state_val_29125 === (7))){
var inst_29106 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29126_29153 = state_29124__$1;
(statearr_29126_29153[(2)] = inst_29106);

(statearr_29126_29153[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (1))){
var inst_29100 = cljs.core.seq.call(null,coll);
var inst_29101 = inst_29100;
var state_29124__$1 = (function (){var statearr_29127 = state_29124;
(statearr_29127[(7)] = inst_29101);

return statearr_29127;
})();
var statearr_29128_29154 = state_29124__$1;
(statearr_29128_29154[(2)] = null);

(statearr_29128_29154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (4))){
var inst_29101 = (state_29124[(7)]);
var inst_29104 = cljs.core.first.call(null,inst_29101);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29124__$1,(7),ch,inst_29104);
} else {
if((state_val_29125 === (13))){
var inst_29118 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29129_29155 = state_29124__$1;
(statearr_29129_29155[(2)] = inst_29118);

(statearr_29129_29155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (6))){
var inst_29109 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
if(cljs.core.truth_(inst_29109)){
var statearr_29130_29156 = state_29124__$1;
(statearr_29130_29156[(1)] = (8));

} else {
var statearr_29131_29157 = state_29124__$1;
(statearr_29131_29157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (3))){
var inst_29122 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29124__$1,inst_29122);
} else {
if((state_val_29125 === (12))){
var state_29124__$1 = state_29124;
var statearr_29132_29158 = state_29124__$1;
(statearr_29132_29158[(2)] = null);

(statearr_29132_29158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (2))){
var inst_29101 = (state_29124[(7)]);
var state_29124__$1 = state_29124;
if(cljs.core.truth_(inst_29101)){
var statearr_29133_29159 = state_29124__$1;
(statearr_29133_29159[(1)] = (4));

} else {
var statearr_29134_29160 = state_29124__$1;
(statearr_29134_29160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (11))){
var inst_29115 = cljs.core.async.close_BANG_.call(null,ch);
var state_29124__$1 = state_29124;
var statearr_29135_29161 = state_29124__$1;
(statearr_29135_29161[(2)] = inst_29115);

(statearr_29135_29161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (9))){
var state_29124__$1 = state_29124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29136_29162 = state_29124__$1;
(statearr_29136_29162[(1)] = (11));

} else {
var statearr_29137_29163 = state_29124__$1;
(statearr_29137_29163[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (5))){
var inst_29101 = (state_29124[(7)]);
var state_29124__$1 = state_29124;
var statearr_29138_29164 = state_29124__$1;
(statearr_29138_29164[(2)] = inst_29101);

(statearr_29138_29164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (10))){
var inst_29120 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29139_29165 = state_29124__$1;
(statearr_29139_29165[(2)] = inst_29120);

(statearr_29139_29165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (8))){
var inst_29101 = (state_29124[(7)]);
var inst_29111 = cljs.core.next.call(null,inst_29101);
var inst_29101__$1 = inst_29111;
var state_29124__$1 = (function (){var statearr_29140 = state_29124;
(statearr_29140[(7)] = inst_29101__$1);

return statearr_29140;
})();
var statearr_29141_29166 = state_29124__$1;
(statearr_29141_29166[(2)] = null);

(statearr_29141_29166[(1)] = (2));


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
});})(c__22145__auto__))
;
return ((function (switch__22080__auto__,c__22145__auto__){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_29145 = [null,null,null,null,null,null,null,null];
(statearr_29145[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_29145[(1)] = (1));

return statearr_29145;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_29124){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_29124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e29146){if((e29146 instanceof Object)){
var ex__22084__auto__ = e29146;
var statearr_29147_29167 = state_29124;
(statearr_29147_29167[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29168 = state_29124;
state_29124 = G__29168;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_29124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_29124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__))
})();
var state__22147__auto__ = (function (){var statearr_29148 = f__22146__auto__.call(null);
(statearr_29148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_29148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__))
);

return c__22145__auto__;
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
var x__19299__auto__ = (((_ == null))?null:_);
var m__19300__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,_);
} else {
var m__19300__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,_);
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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19300__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m,ch);
} else {
var m__19300__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m,ch);
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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m);
} else {
var m__19300__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async29390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29390 = (function (mult,ch,cs,meta29391){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29391 = meta29391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29392,meta29391__$1){
var self__ = this;
var _29392__$1 = this;
return (new cljs.core.async.t_cljs$core$async29390(self__.mult,self__.ch,self__.cs,meta29391__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29392){
var self__ = this;
var _29392__$1 = this;
return self__.meta29391;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29391","meta29391",208644016,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29390";

cljs.core.async.t_cljs$core$async29390.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async29390");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29390 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29390(mult__$1,ch__$1,cs__$1,meta29391){
return (new cljs.core.async.t_cljs$core$async29390(mult__$1,ch__$1,cs__$1,meta29391));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29390(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22145__auto___29611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___29611,cs,m,dchan,dctr,done){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___29611,cs,m,dchan,dctr,done){
return (function (state_29523){
var state_val_29524 = (state_29523[(1)]);
if((state_val_29524 === (7))){
var inst_29519 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29525_29612 = state_29523__$1;
(statearr_29525_29612[(2)] = inst_29519);

(statearr_29525_29612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (20))){
var inst_29424 = (state_29523[(7)]);
var inst_29434 = cljs.core.first.call(null,inst_29424);
var inst_29435 = cljs.core.nth.call(null,inst_29434,(0),null);
var inst_29436 = cljs.core.nth.call(null,inst_29434,(1),null);
var state_29523__$1 = (function (){var statearr_29526 = state_29523;
(statearr_29526[(8)] = inst_29435);

return statearr_29526;
})();
if(cljs.core.truth_(inst_29436)){
var statearr_29527_29613 = state_29523__$1;
(statearr_29527_29613[(1)] = (22));

} else {
var statearr_29528_29614 = state_29523__$1;
(statearr_29528_29614[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (27))){
var inst_29395 = (state_29523[(9)]);
var inst_29464 = (state_29523[(10)]);
var inst_29471 = (state_29523[(11)]);
var inst_29466 = (state_29523[(12)]);
var inst_29471__$1 = cljs.core._nth.call(null,inst_29464,inst_29466);
var inst_29472 = cljs.core.async.put_BANG_.call(null,inst_29471__$1,inst_29395,done);
var state_29523__$1 = (function (){var statearr_29529 = state_29523;
(statearr_29529[(11)] = inst_29471__$1);

return statearr_29529;
})();
if(cljs.core.truth_(inst_29472)){
var statearr_29530_29615 = state_29523__$1;
(statearr_29530_29615[(1)] = (30));

} else {
var statearr_29531_29616 = state_29523__$1;
(statearr_29531_29616[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (1))){
var state_29523__$1 = state_29523;
var statearr_29532_29617 = state_29523__$1;
(statearr_29532_29617[(2)] = null);

(statearr_29532_29617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (24))){
var inst_29424 = (state_29523[(7)]);
var inst_29441 = (state_29523[(2)]);
var inst_29442 = cljs.core.next.call(null,inst_29424);
var inst_29404 = inst_29442;
var inst_29405 = null;
var inst_29406 = (0);
var inst_29407 = (0);
var state_29523__$1 = (function (){var statearr_29533 = state_29523;
(statearr_29533[(13)] = inst_29441);

(statearr_29533[(14)] = inst_29407);

(statearr_29533[(15)] = inst_29404);

(statearr_29533[(16)] = inst_29406);

(statearr_29533[(17)] = inst_29405);

return statearr_29533;
})();
var statearr_29534_29618 = state_29523__$1;
(statearr_29534_29618[(2)] = null);

(statearr_29534_29618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (39))){
var state_29523__$1 = state_29523;
var statearr_29538_29619 = state_29523__$1;
(statearr_29538_29619[(2)] = null);

(statearr_29538_29619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (4))){
var inst_29395 = (state_29523[(9)]);
var inst_29395__$1 = (state_29523[(2)]);
var inst_29396 = (inst_29395__$1 == null);
var state_29523__$1 = (function (){var statearr_29539 = state_29523;
(statearr_29539[(9)] = inst_29395__$1);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29396)){
var statearr_29540_29620 = state_29523__$1;
(statearr_29540_29620[(1)] = (5));

} else {
var statearr_29541_29621 = state_29523__$1;
(statearr_29541_29621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (15))){
var inst_29407 = (state_29523[(14)]);
var inst_29404 = (state_29523[(15)]);
var inst_29406 = (state_29523[(16)]);
var inst_29405 = (state_29523[(17)]);
var inst_29420 = (state_29523[(2)]);
var inst_29421 = (inst_29407 + (1));
var tmp29535 = inst_29404;
var tmp29536 = inst_29406;
var tmp29537 = inst_29405;
var inst_29404__$1 = tmp29535;
var inst_29405__$1 = tmp29537;
var inst_29406__$1 = tmp29536;
var inst_29407__$1 = inst_29421;
var state_29523__$1 = (function (){var statearr_29542 = state_29523;
(statearr_29542[(14)] = inst_29407__$1);

(statearr_29542[(15)] = inst_29404__$1);

(statearr_29542[(16)] = inst_29406__$1);

(statearr_29542[(18)] = inst_29420);

(statearr_29542[(17)] = inst_29405__$1);

return statearr_29542;
})();
var statearr_29543_29622 = state_29523__$1;
(statearr_29543_29622[(2)] = null);

(statearr_29543_29622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (21))){
var inst_29445 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29547_29623 = state_29523__$1;
(statearr_29547_29623[(2)] = inst_29445);

(statearr_29547_29623[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (31))){
var inst_29471 = (state_29523[(11)]);
var inst_29475 = done.call(null,null);
var inst_29476 = cljs.core.async.untap_STAR_.call(null,m,inst_29471);
var state_29523__$1 = (function (){var statearr_29548 = state_29523;
(statearr_29548[(19)] = inst_29475);

return statearr_29548;
})();
var statearr_29549_29624 = state_29523__$1;
(statearr_29549_29624[(2)] = inst_29476);

(statearr_29549_29624[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (32))){
var inst_29465 = (state_29523[(20)]);
var inst_29463 = (state_29523[(21)]);
var inst_29464 = (state_29523[(10)]);
var inst_29466 = (state_29523[(12)]);
var inst_29478 = (state_29523[(2)]);
var inst_29479 = (inst_29466 + (1));
var tmp29544 = inst_29465;
var tmp29545 = inst_29463;
var tmp29546 = inst_29464;
var inst_29463__$1 = tmp29545;
var inst_29464__$1 = tmp29546;
var inst_29465__$1 = tmp29544;
var inst_29466__$1 = inst_29479;
var state_29523__$1 = (function (){var statearr_29550 = state_29523;
(statearr_29550[(20)] = inst_29465__$1);

(statearr_29550[(21)] = inst_29463__$1);

(statearr_29550[(22)] = inst_29478);

(statearr_29550[(10)] = inst_29464__$1);

(statearr_29550[(12)] = inst_29466__$1);

return statearr_29550;
})();
var statearr_29551_29625 = state_29523__$1;
(statearr_29551_29625[(2)] = null);

(statearr_29551_29625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (40))){
var inst_29491 = (state_29523[(23)]);
var inst_29495 = done.call(null,null);
var inst_29496 = cljs.core.async.untap_STAR_.call(null,m,inst_29491);
var state_29523__$1 = (function (){var statearr_29552 = state_29523;
(statearr_29552[(24)] = inst_29495);

return statearr_29552;
})();
var statearr_29553_29626 = state_29523__$1;
(statearr_29553_29626[(2)] = inst_29496);

(statearr_29553_29626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (33))){
var inst_29482 = (state_29523[(25)]);
var inst_29484 = cljs.core.chunked_seq_QMARK_.call(null,inst_29482);
var state_29523__$1 = state_29523;
if(inst_29484){
var statearr_29554_29627 = state_29523__$1;
(statearr_29554_29627[(1)] = (36));

} else {
var statearr_29555_29628 = state_29523__$1;
(statearr_29555_29628[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (13))){
var inst_29414 = (state_29523[(26)]);
var inst_29417 = cljs.core.async.close_BANG_.call(null,inst_29414);
var state_29523__$1 = state_29523;
var statearr_29556_29629 = state_29523__$1;
(statearr_29556_29629[(2)] = inst_29417);

(statearr_29556_29629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (22))){
var inst_29435 = (state_29523[(8)]);
var inst_29438 = cljs.core.async.close_BANG_.call(null,inst_29435);
var state_29523__$1 = state_29523;
var statearr_29557_29630 = state_29523__$1;
(statearr_29557_29630[(2)] = inst_29438);

(statearr_29557_29630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (36))){
var inst_29482 = (state_29523[(25)]);
var inst_29486 = cljs.core.chunk_first.call(null,inst_29482);
var inst_29487 = cljs.core.chunk_rest.call(null,inst_29482);
var inst_29488 = cljs.core.count.call(null,inst_29486);
var inst_29463 = inst_29487;
var inst_29464 = inst_29486;
var inst_29465 = inst_29488;
var inst_29466 = (0);
var state_29523__$1 = (function (){var statearr_29558 = state_29523;
(statearr_29558[(20)] = inst_29465);

(statearr_29558[(21)] = inst_29463);

(statearr_29558[(10)] = inst_29464);

(statearr_29558[(12)] = inst_29466);

return statearr_29558;
})();
var statearr_29559_29631 = state_29523__$1;
(statearr_29559_29631[(2)] = null);

(statearr_29559_29631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (41))){
var inst_29482 = (state_29523[(25)]);
var inst_29498 = (state_29523[(2)]);
var inst_29499 = cljs.core.next.call(null,inst_29482);
var inst_29463 = inst_29499;
var inst_29464 = null;
var inst_29465 = (0);
var inst_29466 = (0);
var state_29523__$1 = (function (){var statearr_29560 = state_29523;
(statearr_29560[(20)] = inst_29465);

(statearr_29560[(21)] = inst_29463);

(statearr_29560[(10)] = inst_29464);

(statearr_29560[(27)] = inst_29498);

(statearr_29560[(12)] = inst_29466);

return statearr_29560;
})();
var statearr_29561_29632 = state_29523__$1;
(statearr_29561_29632[(2)] = null);

(statearr_29561_29632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (43))){
var state_29523__$1 = state_29523;
var statearr_29562_29633 = state_29523__$1;
(statearr_29562_29633[(2)] = null);

(statearr_29562_29633[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (29))){
var inst_29507 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29563_29634 = state_29523__$1;
(statearr_29563_29634[(2)] = inst_29507);

(statearr_29563_29634[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (44))){
var inst_29516 = (state_29523[(2)]);
var state_29523__$1 = (function (){var statearr_29564 = state_29523;
(statearr_29564[(28)] = inst_29516);

return statearr_29564;
})();
var statearr_29565_29635 = state_29523__$1;
(statearr_29565_29635[(2)] = null);

(statearr_29565_29635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (6))){
var inst_29455 = (state_29523[(29)]);
var inst_29454 = cljs.core.deref.call(null,cs);
var inst_29455__$1 = cljs.core.keys.call(null,inst_29454);
var inst_29456 = cljs.core.count.call(null,inst_29455__$1);
var inst_29457 = cljs.core.reset_BANG_.call(null,dctr,inst_29456);
var inst_29462 = cljs.core.seq.call(null,inst_29455__$1);
var inst_29463 = inst_29462;
var inst_29464 = null;
var inst_29465 = (0);
var inst_29466 = (0);
var state_29523__$1 = (function (){var statearr_29566 = state_29523;
(statearr_29566[(20)] = inst_29465);

(statearr_29566[(29)] = inst_29455__$1);

(statearr_29566[(30)] = inst_29457);

(statearr_29566[(21)] = inst_29463);

(statearr_29566[(10)] = inst_29464);

(statearr_29566[(12)] = inst_29466);

return statearr_29566;
})();
var statearr_29567_29636 = state_29523__$1;
(statearr_29567_29636[(2)] = null);

(statearr_29567_29636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (28))){
var inst_29482 = (state_29523[(25)]);
var inst_29463 = (state_29523[(21)]);
var inst_29482__$1 = cljs.core.seq.call(null,inst_29463);
var state_29523__$1 = (function (){var statearr_29568 = state_29523;
(statearr_29568[(25)] = inst_29482__$1);

return statearr_29568;
})();
if(inst_29482__$1){
var statearr_29569_29637 = state_29523__$1;
(statearr_29569_29637[(1)] = (33));

} else {
var statearr_29570_29638 = state_29523__$1;
(statearr_29570_29638[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (25))){
var inst_29465 = (state_29523[(20)]);
var inst_29466 = (state_29523[(12)]);
var inst_29468 = (inst_29466 < inst_29465);
var inst_29469 = inst_29468;
var state_29523__$1 = state_29523;
if(cljs.core.truth_(inst_29469)){
var statearr_29571_29639 = state_29523__$1;
(statearr_29571_29639[(1)] = (27));

} else {
var statearr_29572_29640 = state_29523__$1;
(statearr_29572_29640[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (34))){
var state_29523__$1 = state_29523;
var statearr_29573_29641 = state_29523__$1;
(statearr_29573_29641[(2)] = null);

(statearr_29573_29641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (17))){
var state_29523__$1 = state_29523;
var statearr_29574_29642 = state_29523__$1;
(statearr_29574_29642[(2)] = null);

(statearr_29574_29642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (3))){
var inst_29521 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29523__$1,inst_29521);
} else {
if((state_val_29524 === (12))){
var inst_29450 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29575_29643 = state_29523__$1;
(statearr_29575_29643[(2)] = inst_29450);

(statearr_29575_29643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (2))){
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29523__$1,(4),ch);
} else {
if((state_val_29524 === (23))){
var state_29523__$1 = state_29523;
var statearr_29576_29644 = state_29523__$1;
(statearr_29576_29644[(2)] = null);

(statearr_29576_29644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (35))){
var inst_29505 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29577_29645 = state_29523__$1;
(statearr_29577_29645[(2)] = inst_29505);

(statearr_29577_29645[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (19))){
var inst_29424 = (state_29523[(7)]);
var inst_29428 = cljs.core.chunk_first.call(null,inst_29424);
var inst_29429 = cljs.core.chunk_rest.call(null,inst_29424);
var inst_29430 = cljs.core.count.call(null,inst_29428);
var inst_29404 = inst_29429;
var inst_29405 = inst_29428;
var inst_29406 = inst_29430;
var inst_29407 = (0);
var state_29523__$1 = (function (){var statearr_29578 = state_29523;
(statearr_29578[(14)] = inst_29407);

(statearr_29578[(15)] = inst_29404);

(statearr_29578[(16)] = inst_29406);

(statearr_29578[(17)] = inst_29405);

return statearr_29578;
})();
var statearr_29579_29646 = state_29523__$1;
(statearr_29579_29646[(2)] = null);

(statearr_29579_29646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (11))){
var inst_29424 = (state_29523[(7)]);
var inst_29404 = (state_29523[(15)]);
var inst_29424__$1 = cljs.core.seq.call(null,inst_29404);
var state_29523__$1 = (function (){var statearr_29580 = state_29523;
(statearr_29580[(7)] = inst_29424__$1);

return statearr_29580;
})();
if(inst_29424__$1){
var statearr_29581_29647 = state_29523__$1;
(statearr_29581_29647[(1)] = (16));

} else {
var statearr_29582_29648 = state_29523__$1;
(statearr_29582_29648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (9))){
var inst_29452 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29583_29649 = state_29523__$1;
(statearr_29583_29649[(2)] = inst_29452);

(statearr_29583_29649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (5))){
var inst_29402 = cljs.core.deref.call(null,cs);
var inst_29403 = cljs.core.seq.call(null,inst_29402);
var inst_29404 = inst_29403;
var inst_29405 = null;
var inst_29406 = (0);
var inst_29407 = (0);
var state_29523__$1 = (function (){var statearr_29584 = state_29523;
(statearr_29584[(14)] = inst_29407);

(statearr_29584[(15)] = inst_29404);

(statearr_29584[(16)] = inst_29406);

(statearr_29584[(17)] = inst_29405);

return statearr_29584;
})();
var statearr_29585_29650 = state_29523__$1;
(statearr_29585_29650[(2)] = null);

(statearr_29585_29650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (14))){
var state_29523__$1 = state_29523;
var statearr_29586_29651 = state_29523__$1;
(statearr_29586_29651[(2)] = null);

(statearr_29586_29651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (45))){
var inst_29513 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29587_29652 = state_29523__$1;
(statearr_29587_29652[(2)] = inst_29513);

(statearr_29587_29652[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (26))){
var inst_29455 = (state_29523[(29)]);
var inst_29509 = (state_29523[(2)]);
var inst_29510 = cljs.core.seq.call(null,inst_29455);
var state_29523__$1 = (function (){var statearr_29588 = state_29523;
(statearr_29588[(31)] = inst_29509);

return statearr_29588;
})();
if(inst_29510){
var statearr_29589_29653 = state_29523__$1;
(statearr_29589_29653[(1)] = (42));

} else {
var statearr_29590_29654 = state_29523__$1;
(statearr_29590_29654[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (16))){
var inst_29424 = (state_29523[(7)]);
var inst_29426 = cljs.core.chunked_seq_QMARK_.call(null,inst_29424);
var state_29523__$1 = state_29523;
if(inst_29426){
var statearr_29591_29655 = state_29523__$1;
(statearr_29591_29655[(1)] = (19));

} else {
var statearr_29592_29656 = state_29523__$1;
(statearr_29592_29656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (38))){
var inst_29502 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29593_29657 = state_29523__$1;
(statearr_29593_29657[(2)] = inst_29502);

(statearr_29593_29657[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (30))){
var state_29523__$1 = state_29523;
var statearr_29594_29658 = state_29523__$1;
(statearr_29594_29658[(2)] = null);

(statearr_29594_29658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (10))){
var inst_29407 = (state_29523[(14)]);
var inst_29405 = (state_29523[(17)]);
var inst_29413 = cljs.core._nth.call(null,inst_29405,inst_29407);
var inst_29414 = cljs.core.nth.call(null,inst_29413,(0),null);
var inst_29415 = cljs.core.nth.call(null,inst_29413,(1),null);
var state_29523__$1 = (function (){var statearr_29595 = state_29523;
(statearr_29595[(26)] = inst_29414);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29415)){
var statearr_29596_29659 = state_29523__$1;
(statearr_29596_29659[(1)] = (13));

} else {
var statearr_29597_29660 = state_29523__$1;
(statearr_29597_29660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (18))){
var inst_29448 = (state_29523[(2)]);
var state_29523__$1 = state_29523;
var statearr_29598_29661 = state_29523__$1;
(statearr_29598_29661[(2)] = inst_29448);

(statearr_29598_29661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (42))){
var state_29523__$1 = state_29523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29523__$1,(45),dchan);
} else {
if((state_val_29524 === (37))){
var inst_29395 = (state_29523[(9)]);
var inst_29491 = (state_29523[(23)]);
var inst_29482 = (state_29523[(25)]);
var inst_29491__$1 = cljs.core.first.call(null,inst_29482);
var inst_29492 = cljs.core.async.put_BANG_.call(null,inst_29491__$1,inst_29395,done);
var state_29523__$1 = (function (){var statearr_29599 = state_29523;
(statearr_29599[(23)] = inst_29491__$1);

return statearr_29599;
})();
if(cljs.core.truth_(inst_29492)){
var statearr_29600_29662 = state_29523__$1;
(statearr_29600_29662[(1)] = (39));

} else {
var statearr_29601_29663 = state_29523__$1;
(statearr_29601_29663[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29524 === (8))){
var inst_29407 = (state_29523[(14)]);
var inst_29406 = (state_29523[(16)]);
var inst_29409 = (inst_29407 < inst_29406);
var inst_29410 = inst_29409;
var state_29523__$1 = state_29523;
if(cljs.core.truth_(inst_29410)){
var statearr_29602_29664 = state_29523__$1;
(statearr_29602_29664[(1)] = (10));

} else {
var statearr_29603_29665 = state_29523__$1;
(statearr_29603_29665[(1)] = (11));

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
});})(c__22145__auto___29611,cs,m,dchan,dctr,done))
;
return ((function (switch__22080__auto__,c__22145__auto___29611,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22081__auto__ = null;
var cljs$core$async$mult_$_state_machine__22081__auto____0 = (function (){
var statearr_29607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29607[(0)] = cljs$core$async$mult_$_state_machine__22081__auto__);

(statearr_29607[(1)] = (1));

return statearr_29607;
});
var cljs$core$async$mult_$_state_machine__22081__auto____1 = (function (state_29523){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_29523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e29608){if((e29608 instanceof Object)){
var ex__22084__auto__ = e29608;
var statearr_29609_29666 = state_29523;
(statearr_29609_29666[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29667 = state_29523;
state_29523 = G__29667;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22081__auto__ = function(state_29523){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22081__auto____1.call(this,state_29523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22081__auto____0;
cljs$core$async$mult_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22081__auto____1;
return cljs$core$async$mult_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___29611,cs,m,dchan,dctr,done))
})();
var state__22147__auto__ = (function (){var statearr_29610 = f__22146__auto__.call(null);
(statearr_29610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___29611);

return statearr_29610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___29611,cs,m,dchan,dctr,done))
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
var args29668 = [];
var len__19702__auto___29671 = arguments.length;
var i__19703__auto___29672 = (0);
while(true){
if((i__19703__auto___29672 < len__19702__auto___29671)){
args29668.push((arguments[i__19703__auto___29672]));

var G__29673 = (i__19703__auto___29672 + (1));
i__19703__auto___29672 = G__29673;
continue;
} else {
}
break;
}

var G__29670 = args29668.length;
switch (G__29670) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29668.length)].join('')));

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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m,ch);
} else {
var m__19300__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m,ch);
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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m,ch);
} else {
var m__19300__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m,ch);
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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m);
} else {
var m__19300__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m);
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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m,state_map);
} else {
var m__19300__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m,state_map);
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
var x__19299__auto__ = (((m == null))?null:m);
var m__19300__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,m,mode);
} else {
var m__19300__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19709__auto__ = [];
var len__19702__auto___29685 = arguments.length;
var i__19703__auto___29686 = (0);
while(true){
if((i__19703__auto___29686 < len__19702__auto___29685)){
args__19709__auto__.push((arguments[i__19703__auto___29686]));

var G__29687 = (i__19703__auto___29686 + (1));
i__19703__auto___29686 = G__29687;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((3) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19710__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29679){
var map__29680 = p__29679;
var map__29680__$1 = ((((!((map__29680 == null)))?((((map__29680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29680):map__29680);
var opts = map__29680__$1;
var statearr_29682_29688 = state;
(statearr_29682_29688[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29680,map__29680__$1,opts){
return (function (val){
var statearr_29683_29689 = state;
(statearr_29683_29689[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29680,map__29680__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29684_29690 = state;
(statearr_29684_29690[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29675){
var G__29676 = cljs.core.first.call(null,seq29675);
var seq29675__$1 = cljs.core.next.call(null,seq29675);
var G__29677 = cljs.core.first.call(null,seq29675__$1);
var seq29675__$2 = cljs.core.next.call(null,seq29675__$1);
var G__29678 = cljs.core.first.call(null,seq29675__$2);
var seq29675__$3 = cljs.core.next.call(null,seq29675__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29676,G__29677,G__29678,seq29675__$3);
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
if(typeof cljs.core.async.t_cljs$core$async29854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29854 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29855){
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
this.meta29855 = meta29855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29856,meta29855__$1){
var self__ = this;
var _29856__$1 = this;
return (new cljs.core.async.t_cljs$core$async29854(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29855__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29856){
var self__ = this;
var _29856__$1 = this;
return self__.meta29855;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async29854.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29855","meta29855",1677590398,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29854";

cljs.core.async.t_cljs$core$async29854.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async29854");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29854 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29855){
return (new cljs.core.async.t_cljs$core$async29854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29855));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29854(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22145__auto___30017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29954){
var state_val_29955 = (state_29954[(1)]);
if((state_val_29955 === (7))){
var inst_29872 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29956_30018 = state_29954__$1;
(statearr_29956_30018[(2)] = inst_29872);

(statearr_29956_30018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (20))){
var inst_29884 = (state_29954[(7)]);
var state_29954__$1 = state_29954;
var statearr_29957_30019 = state_29954__$1;
(statearr_29957_30019[(2)] = inst_29884);

(statearr_29957_30019[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (27))){
var state_29954__$1 = state_29954;
var statearr_29958_30020 = state_29954__$1;
(statearr_29958_30020[(2)] = null);

(statearr_29958_30020[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (1))){
var inst_29860 = (state_29954[(8)]);
var inst_29860__$1 = calc_state.call(null);
var inst_29862 = (inst_29860__$1 == null);
var inst_29863 = cljs.core.not.call(null,inst_29862);
var state_29954__$1 = (function (){var statearr_29959 = state_29954;
(statearr_29959[(8)] = inst_29860__$1);

return statearr_29959;
})();
if(inst_29863){
var statearr_29960_30021 = state_29954__$1;
(statearr_29960_30021[(1)] = (2));

} else {
var statearr_29961_30022 = state_29954__$1;
(statearr_29961_30022[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (24))){
var inst_29928 = (state_29954[(9)]);
var inst_29914 = (state_29954[(10)]);
var inst_29907 = (state_29954[(11)]);
var inst_29928__$1 = inst_29907.call(null,inst_29914);
var state_29954__$1 = (function (){var statearr_29962 = state_29954;
(statearr_29962[(9)] = inst_29928__$1);

return statearr_29962;
})();
if(cljs.core.truth_(inst_29928__$1)){
var statearr_29963_30023 = state_29954__$1;
(statearr_29963_30023[(1)] = (29));

} else {
var statearr_29964_30024 = state_29954__$1;
(statearr_29964_30024[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (4))){
var inst_29875 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29875)){
var statearr_29965_30025 = state_29954__$1;
(statearr_29965_30025[(1)] = (8));

} else {
var statearr_29966_30026 = state_29954__$1;
(statearr_29966_30026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (15))){
var inst_29901 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29901)){
var statearr_29967_30027 = state_29954__$1;
(statearr_29967_30027[(1)] = (19));

} else {
var statearr_29968_30028 = state_29954__$1;
(statearr_29968_30028[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (21))){
var inst_29906 = (state_29954[(12)]);
var inst_29906__$1 = (state_29954[(2)]);
var inst_29907 = cljs.core.get.call(null,inst_29906__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29908 = cljs.core.get.call(null,inst_29906__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29909 = cljs.core.get.call(null,inst_29906__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29954__$1 = (function (){var statearr_29969 = state_29954;
(statearr_29969[(12)] = inst_29906__$1);

(statearr_29969[(13)] = inst_29908);

(statearr_29969[(11)] = inst_29907);

return statearr_29969;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29954__$1,(22),inst_29909);
} else {
if((state_val_29955 === (31))){
var inst_29936 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29936)){
var statearr_29970_30029 = state_29954__$1;
(statearr_29970_30029[(1)] = (32));

} else {
var statearr_29971_30030 = state_29954__$1;
(statearr_29971_30030[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (32))){
var inst_29913 = (state_29954[(14)]);
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29954__$1,(35),out,inst_29913);
} else {
if((state_val_29955 === (33))){
var inst_29906 = (state_29954[(12)]);
var inst_29884 = inst_29906;
var state_29954__$1 = (function (){var statearr_29972 = state_29954;
(statearr_29972[(7)] = inst_29884);

return statearr_29972;
})();
var statearr_29973_30031 = state_29954__$1;
(statearr_29973_30031[(2)] = null);

(statearr_29973_30031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (13))){
var inst_29884 = (state_29954[(7)]);
var inst_29891 = inst_29884.cljs$lang$protocol_mask$partition0$;
var inst_29892 = (inst_29891 & (64));
var inst_29893 = inst_29884.cljs$core$ISeq$;
var inst_29894 = (inst_29892) || (inst_29893);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29894)){
var statearr_29974_30032 = state_29954__$1;
(statearr_29974_30032[(1)] = (16));

} else {
var statearr_29975_30033 = state_29954__$1;
(statearr_29975_30033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (22))){
var inst_29913 = (state_29954[(14)]);
var inst_29914 = (state_29954[(10)]);
var inst_29912 = (state_29954[(2)]);
var inst_29913__$1 = cljs.core.nth.call(null,inst_29912,(0),null);
var inst_29914__$1 = cljs.core.nth.call(null,inst_29912,(1),null);
var inst_29915 = (inst_29913__$1 == null);
var inst_29916 = cljs.core._EQ_.call(null,inst_29914__$1,change);
var inst_29917 = (inst_29915) || (inst_29916);
var state_29954__$1 = (function (){var statearr_29976 = state_29954;
(statearr_29976[(14)] = inst_29913__$1);

(statearr_29976[(10)] = inst_29914__$1);

return statearr_29976;
})();
if(cljs.core.truth_(inst_29917)){
var statearr_29977_30034 = state_29954__$1;
(statearr_29977_30034[(1)] = (23));

} else {
var statearr_29978_30035 = state_29954__$1;
(statearr_29978_30035[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (36))){
var inst_29906 = (state_29954[(12)]);
var inst_29884 = inst_29906;
var state_29954__$1 = (function (){var statearr_29979 = state_29954;
(statearr_29979[(7)] = inst_29884);

return statearr_29979;
})();
var statearr_29980_30036 = state_29954__$1;
(statearr_29980_30036[(2)] = null);

(statearr_29980_30036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (29))){
var inst_29928 = (state_29954[(9)]);
var state_29954__$1 = state_29954;
var statearr_29981_30037 = state_29954__$1;
(statearr_29981_30037[(2)] = inst_29928);

(statearr_29981_30037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (6))){
var state_29954__$1 = state_29954;
var statearr_29982_30038 = state_29954__$1;
(statearr_29982_30038[(2)] = false);

(statearr_29982_30038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (28))){
var inst_29924 = (state_29954[(2)]);
var inst_29925 = calc_state.call(null);
var inst_29884 = inst_29925;
var state_29954__$1 = (function (){var statearr_29983 = state_29954;
(statearr_29983[(7)] = inst_29884);

(statearr_29983[(15)] = inst_29924);

return statearr_29983;
})();
var statearr_29984_30039 = state_29954__$1;
(statearr_29984_30039[(2)] = null);

(statearr_29984_30039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (25))){
var inst_29950 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29985_30040 = state_29954__$1;
(statearr_29985_30040[(2)] = inst_29950);

(statearr_29985_30040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (34))){
var inst_29948 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_29986_30041 = state_29954__$1;
(statearr_29986_30041[(2)] = inst_29948);

(statearr_29986_30041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (17))){
var state_29954__$1 = state_29954;
var statearr_29987_30042 = state_29954__$1;
(statearr_29987_30042[(2)] = false);

(statearr_29987_30042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (3))){
var state_29954__$1 = state_29954;
var statearr_29988_30043 = state_29954__$1;
(statearr_29988_30043[(2)] = false);

(statearr_29988_30043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (12))){
var inst_29952 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29954__$1,inst_29952);
} else {
if((state_val_29955 === (2))){
var inst_29860 = (state_29954[(8)]);
var inst_29865 = inst_29860.cljs$lang$protocol_mask$partition0$;
var inst_29866 = (inst_29865 & (64));
var inst_29867 = inst_29860.cljs$core$ISeq$;
var inst_29868 = (inst_29866) || (inst_29867);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29868)){
var statearr_29989_30044 = state_29954__$1;
(statearr_29989_30044[(1)] = (5));

} else {
var statearr_29990_30045 = state_29954__$1;
(statearr_29990_30045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (23))){
var inst_29913 = (state_29954[(14)]);
var inst_29919 = (inst_29913 == null);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29919)){
var statearr_29991_30046 = state_29954__$1;
(statearr_29991_30046[(1)] = (26));

} else {
var statearr_29992_30047 = state_29954__$1;
(statearr_29992_30047[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (35))){
var inst_29939 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
if(cljs.core.truth_(inst_29939)){
var statearr_29993_30048 = state_29954__$1;
(statearr_29993_30048[(1)] = (36));

} else {
var statearr_29994_30049 = state_29954__$1;
(statearr_29994_30049[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (19))){
var inst_29884 = (state_29954[(7)]);
var inst_29903 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29884);
var state_29954__$1 = state_29954;
var statearr_29995_30050 = state_29954__$1;
(statearr_29995_30050[(2)] = inst_29903);

(statearr_29995_30050[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (11))){
var inst_29884 = (state_29954[(7)]);
var inst_29888 = (inst_29884 == null);
var inst_29889 = cljs.core.not.call(null,inst_29888);
var state_29954__$1 = state_29954;
if(inst_29889){
var statearr_29996_30051 = state_29954__$1;
(statearr_29996_30051[(1)] = (13));

} else {
var statearr_29997_30052 = state_29954__$1;
(statearr_29997_30052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (9))){
var inst_29860 = (state_29954[(8)]);
var state_29954__$1 = state_29954;
var statearr_29998_30053 = state_29954__$1;
(statearr_29998_30053[(2)] = inst_29860);

(statearr_29998_30053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (5))){
var state_29954__$1 = state_29954;
var statearr_29999_30054 = state_29954__$1;
(statearr_29999_30054[(2)] = true);

(statearr_29999_30054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (14))){
var state_29954__$1 = state_29954;
var statearr_30000_30055 = state_29954__$1;
(statearr_30000_30055[(2)] = false);

(statearr_30000_30055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (26))){
var inst_29914 = (state_29954[(10)]);
var inst_29921 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29914);
var state_29954__$1 = state_29954;
var statearr_30001_30056 = state_29954__$1;
(statearr_30001_30056[(2)] = inst_29921);

(statearr_30001_30056[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (16))){
var state_29954__$1 = state_29954;
var statearr_30002_30057 = state_29954__$1;
(statearr_30002_30057[(2)] = true);

(statearr_30002_30057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (38))){
var inst_29944 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_30003_30058 = state_29954__$1;
(statearr_30003_30058[(2)] = inst_29944);

(statearr_30003_30058[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (30))){
var inst_29908 = (state_29954[(13)]);
var inst_29914 = (state_29954[(10)]);
var inst_29907 = (state_29954[(11)]);
var inst_29931 = cljs.core.empty_QMARK_.call(null,inst_29907);
var inst_29932 = inst_29908.call(null,inst_29914);
var inst_29933 = cljs.core.not.call(null,inst_29932);
var inst_29934 = (inst_29931) && (inst_29933);
var state_29954__$1 = state_29954;
var statearr_30004_30059 = state_29954__$1;
(statearr_30004_30059[(2)] = inst_29934);

(statearr_30004_30059[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (10))){
var inst_29860 = (state_29954[(8)]);
var inst_29880 = (state_29954[(2)]);
var inst_29881 = cljs.core.get.call(null,inst_29880,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29882 = cljs.core.get.call(null,inst_29880,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29883 = cljs.core.get.call(null,inst_29880,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29884 = inst_29860;
var state_29954__$1 = (function (){var statearr_30005 = state_29954;
(statearr_30005[(7)] = inst_29884);

(statearr_30005[(16)] = inst_29882);

(statearr_30005[(17)] = inst_29881);

(statearr_30005[(18)] = inst_29883);

return statearr_30005;
})();
var statearr_30006_30060 = state_29954__$1;
(statearr_30006_30060[(2)] = null);

(statearr_30006_30060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (18))){
var inst_29898 = (state_29954[(2)]);
var state_29954__$1 = state_29954;
var statearr_30007_30061 = state_29954__$1;
(statearr_30007_30061[(2)] = inst_29898);

(statearr_30007_30061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (37))){
var state_29954__$1 = state_29954;
var statearr_30008_30062 = state_29954__$1;
(statearr_30008_30062[(2)] = null);

(statearr_30008_30062[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29955 === (8))){
var inst_29860 = (state_29954[(8)]);
var inst_29877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29860);
var state_29954__$1 = state_29954;
var statearr_30009_30063 = state_29954__$1;
(statearr_30009_30063[(2)] = inst_29877);

(statearr_30009_30063[(1)] = (10));


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
});})(c__22145__auto___30017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22080__auto__,c__22145__auto___30017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22081__auto__ = null;
var cljs$core$async$mix_$_state_machine__22081__auto____0 = (function (){
var statearr_30013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30013[(0)] = cljs$core$async$mix_$_state_machine__22081__auto__);

(statearr_30013[(1)] = (1));

return statearr_30013;
});
var cljs$core$async$mix_$_state_machine__22081__auto____1 = (function (state_29954){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_29954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30014){if((e30014 instanceof Object)){
var ex__22084__auto__ = e30014;
var statearr_30015_30064 = state_29954;
(statearr_30015_30064[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30065 = state_29954;
state_29954 = G__30065;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22081__auto__ = function(state_29954){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22081__auto____1.call(this,state_29954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22081__auto____0;
cljs$core$async$mix_$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22081__auto____1;
return cljs$core$async$mix_$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22147__auto__ = (function (){var statearr_30016 = f__22146__auto__.call(null);
(statearr_30016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30017);

return statearr_30016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19299__auto__ = (((p == null))?null:p);
var m__19300__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19300__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19299__auto__ = (((p == null))?null:p);
var m__19300__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,p,v,ch);
} else {
var m__19300__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args30066 = [];
var len__19702__auto___30069 = arguments.length;
var i__19703__auto___30070 = (0);
while(true){
if((i__19703__auto___30070 < len__19702__auto___30069)){
args30066.push((arguments[i__19703__auto___30070]));

var G__30071 = (i__19703__auto___30070 + (1));
i__19703__auto___30070 = G__30071;
continue;
} else {
}
break;
}

var G__30068 = args30066.length;
switch (G__30068) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30066.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19299__auto__ = (((p == null))?null:p);
var m__19300__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,p);
} else {
var m__19300__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,p);
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
var x__19299__auto__ = (((p == null))?null:p);
var m__19300__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19299__auto__)]);
if(!((m__19300__auto__ == null))){
return m__19300__auto__.call(null,p,v);
} else {
var m__19300__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19300__auto____$1 == null))){
return m__19300__auto____$1.call(null,p,v);
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
var args30074 = [];
var len__19702__auto___30199 = arguments.length;
var i__19703__auto___30200 = (0);
while(true){
if((i__19703__auto___30200 < len__19702__auto___30199)){
args30074.push((arguments[i__19703__auto___30200]));

var G__30201 = (i__19703__auto___30200 + (1));
i__19703__auto___30200 = G__30201;
continue;
} else {
}
break;
}

var G__30076 = args30074.length;
switch (G__30076) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30074.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18644__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18644__auto__,mults){
return (function (p1__30073_SHARP_){
if(cljs.core.truth_(p1__30073_SHARP_.call(null,topic))){
return p1__30073_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__30073_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18644__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async30077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30077 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30078){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30078 = meta30078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30079,meta30078__$1){
var self__ = this;
var _30079__$1 = this;
return (new cljs.core.async.t_cljs$core$async30077(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30078__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30079){
var self__ = this;
var _30079__$1 = this;
return self__.meta30078;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30077.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30078","meta30078",314055616,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async30077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30077";

cljs.core.async.t_cljs$core$async30077.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async30077");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async30077 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async30077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30078){
return (new cljs.core.async.t_cljs$core$async30077(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30078));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async30077(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22145__auto___30203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30203,mults,ensure_mult,p){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30203,mults,ensure_mult,p){
return (function (state_30151){
var state_val_30152 = (state_30151[(1)]);
if((state_val_30152 === (7))){
var inst_30147 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30153_30204 = state_30151__$1;
(statearr_30153_30204[(2)] = inst_30147);

(statearr_30153_30204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (20))){
var state_30151__$1 = state_30151;
var statearr_30154_30205 = state_30151__$1;
(statearr_30154_30205[(2)] = null);

(statearr_30154_30205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (1))){
var state_30151__$1 = state_30151;
var statearr_30155_30206 = state_30151__$1;
(statearr_30155_30206[(2)] = null);

(statearr_30155_30206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (24))){
var inst_30130 = (state_30151[(7)]);
var inst_30139 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30130);
var state_30151__$1 = state_30151;
var statearr_30156_30207 = state_30151__$1;
(statearr_30156_30207[(2)] = inst_30139);

(statearr_30156_30207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (4))){
var inst_30082 = (state_30151[(8)]);
var inst_30082__$1 = (state_30151[(2)]);
var inst_30083 = (inst_30082__$1 == null);
var state_30151__$1 = (function (){var statearr_30157 = state_30151;
(statearr_30157[(8)] = inst_30082__$1);

return statearr_30157;
})();
if(cljs.core.truth_(inst_30083)){
var statearr_30158_30208 = state_30151__$1;
(statearr_30158_30208[(1)] = (5));

} else {
var statearr_30159_30209 = state_30151__$1;
(statearr_30159_30209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (15))){
var inst_30124 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30160_30210 = state_30151__$1;
(statearr_30160_30210[(2)] = inst_30124);

(statearr_30160_30210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (21))){
var inst_30144 = (state_30151[(2)]);
var state_30151__$1 = (function (){var statearr_30161 = state_30151;
(statearr_30161[(9)] = inst_30144);

return statearr_30161;
})();
var statearr_30162_30211 = state_30151__$1;
(statearr_30162_30211[(2)] = null);

(statearr_30162_30211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (13))){
var inst_30106 = (state_30151[(10)]);
var inst_30108 = cljs.core.chunked_seq_QMARK_.call(null,inst_30106);
var state_30151__$1 = state_30151;
if(inst_30108){
var statearr_30163_30212 = state_30151__$1;
(statearr_30163_30212[(1)] = (16));

} else {
var statearr_30164_30213 = state_30151__$1;
(statearr_30164_30213[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (22))){
var inst_30136 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
if(cljs.core.truth_(inst_30136)){
var statearr_30165_30214 = state_30151__$1;
(statearr_30165_30214[(1)] = (23));

} else {
var statearr_30166_30215 = state_30151__$1;
(statearr_30166_30215[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (6))){
var inst_30130 = (state_30151[(7)]);
var inst_30082 = (state_30151[(8)]);
var inst_30132 = (state_30151[(11)]);
var inst_30130__$1 = topic_fn.call(null,inst_30082);
var inst_30131 = cljs.core.deref.call(null,mults);
var inst_30132__$1 = cljs.core.get.call(null,inst_30131,inst_30130__$1);
var state_30151__$1 = (function (){var statearr_30167 = state_30151;
(statearr_30167[(7)] = inst_30130__$1);

(statearr_30167[(11)] = inst_30132__$1);

return statearr_30167;
})();
if(cljs.core.truth_(inst_30132__$1)){
var statearr_30168_30216 = state_30151__$1;
(statearr_30168_30216[(1)] = (19));

} else {
var statearr_30169_30217 = state_30151__$1;
(statearr_30169_30217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (25))){
var inst_30141 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30170_30218 = state_30151__$1;
(statearr_30170_30218[(2)] = inst_30141);

(statearr_30170_30218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (17))){
var inst_30106 = (state_30151[(10)]);
var inst_30115 = cljs.core.first.call(null,inst_30106);
var inst_30116 = cljs.core.async.muxch_STAR_.call(null,inst_30115);
var inst_30117 = cljs.core.async.close_BANG_.call(null,inst_30116);
var inst_30118 = cljs.core.next.call(null,inst_30106);
var inst_30092 = inst_30118;
var inst_30093 = null;
var inst_30094 = (0);
var inst_30095 = (0);
var state_30151__$1 = (function (){var statearr_30171 = state_30151;
(statearr_30171[(12)] = inst_30095);

(statearr_30171[(13)] = inst_30093);

(statearr_30171[(14)] = inst_30117);

(statearr_30171[(15)] = inst_30092);

(statearr_30171[(16)] = inst_30094);

return statearr_30171;
})();
var statearr_30172_30219 = state_30151__$1;
(statearr_30172_30219[(2)] = null);

(statearr_30172_30219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (3))){
var inst_30149 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30151__$1,inst_30149);
} else {
if((state_val_30152 === (12))){
var inst_30126 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30173_30220 = state_30151__$1;
(statearr_30173_30220[(2)] = inst_30126);

(statearr_30173_30220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (2))){
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30151__$1,(4),ch);
} else {
if((state_val_30152 === (23))){
var state_30151__$1 = state_30151;
var statearr_30174_30221 = state_30151__$1;
(statearr_30174_30221[(2)] = null);

(statearr_30174_30221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (19))){
var inst_30082 = (state_30151[(8)]);
var inst_30132 = (state_30151[(11)]);
var inst_30134 = cljs.core.async.muxch_STAR_.call(null,inst_30132);
var state_30151__$1 = state_30151;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30151__$1,(22),inst_30134,inst_30082);
} else {
if((state_val_30152 === (11))){
var inst_30092 = (state_30151[(15)]);
var inst_30106 = (state_30151[(10)]);
var inst_30106__$1 = cljs.core.seq.call(null,inst_30092);
var state_30151__$1 = (function (){var statearr_30175 = state_30151;
(statearr_30175[(10)] = inst_30106__$1);

return statearr_30175;
})();
if(inst_30106__$1){
var statearr_30176_30222 = state_30151__$1;
(statearr_30176_30222[(1)] = (13));

} else {
var statearr_30177_30223 = state_30151__$1;
(statearr_30177_30223[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (9))){
var inst_30128 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30178_30224 = state_30151__$1;
(statearr_30178_30224[(2)] = inst_30128);

(statearr_30178_30224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (5))){
var inst_30089 = cljs.core.deref.call(null,mults);
var inst_30090 = cljs.core.vals.call(null,inst_30089);
var inst_30091 = cljs.core.seq.call(null,inst_30090);
var inst_30092 = inst_30091;
var inst_30093 = null;
var inst_30094 = (0);
var inst_30095 = (0);
var state_30151__$1 = (function (){var statearr_30179 = state_30151;
(statearr_30179[(12)] = inst_30095);

(statearr_30179[(13)] = inst_30093);

(statearr_30179[(15)] = inst_30092);

(statearr_30179[(16)] = inst_30094);

return statearr_30179;
})();
var statearr_30180_30225 = state_30151__$1;
(statearr_30180_30225[(2)] = null);

(statearr_30180_30225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (14))){
var state_30151__$1 = state_30151;
var statearr_30184_30226 = state_30151__$1;
(statearr_30184_30226[(2)] = null);

(statearr_30184_30226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (16))){
var inst_30106 = (state_30151[(10)]);
var inst_30110 = cljs.core.chunk_first.call(null,inst_30106);
var inst_30111 = cljs.core.chunk_rest.call(null,inst_30106);
var inst_30112 = cljs.core.count.call(null,inst_30110);
var inst_30092 = inst_30111;
var inst_30093 = inst_30110;
var inst_30094 = inst_30112;
var inst_30095 = (0);
var state_30151__$1 = (function (){var statearr_30185 = state_30151;
(statearr_30185[(12)] = inst_30095);

(statearr_30185[(13)] = inst_30093);

(statearr_30185[(15)] = inst_30092);

(statearr_30185[(16)] = inst_30094);

return statearr_30185;
})();
var statearr_30186_30227 = state_30151__$1;
(statearr_30186_30227[(2)] = null);

(statearr_30186_30227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (10))){
var inst_30095 = (state_30151[(12)]);
var inst_30093 = (state_30151[(13)]);
var inst_30092 = (state_30151[(15)]);
var inst_30094 = (state_30151[(16)]);
var inst_30100 = cljs.core._nth.call(null,inst_30093,inst_30095);
var inst_30101 = cljs.core.async.muxch_STAR_.call(null,inst_30100);
var inst_30102 = cljs.core.async.close_BANG_.call(null,inst_30101);
var inst_30103 = (inst_30095 + (1));
var tmp30181 = inst_30093;
var tmp30182 = inst_30092;
var tmp30183 = inst_30094;
var inst_30092__$1 = tmp30182;
var inst_30093__$1 = tmp30181;
var inst_30094__$1 = tmp30183;
var inst_30095__$1 = inst_30103;
var state_30151__$1 = (function (){var statearr_30187 = state_30151;
(statearr_30187[(12)] = inst_30095__$1);

(statearr_30187[(17)] = inst_30102);

(statearr_30187[(13)] = inst_30093__$1);

(statearr_30187[(15)] = inst_30092__$1);

(statearr_30187[(16)] = inst_30094__$1);

return statearr_30187;
})();
var statearr_30188_30228 = state_30151__$1;
(statearr_30188_30228[(2)] = null);

(statearr_30188_30228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (18))){
var inst_30121 = (state_30151[(2)]);
var state_30151__$1 = state_30151;
var statearr_30189_30229 = state_30151__$1;
(statearr_30189_30229[(2)] = inst_30121);

(statearr_30189_30229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30152 === (8))){
var inst_30095 = (state_30151[(12)]);
var inst_30094 = (state_30151[(16)]);
var inst_30097 = (inst_30095 < inst_30094);
var inst_30098 = inst_30097;
var state_30151__$1 = state_30151;
if(cljs.core.truth_(inst_30098)){
var statearr_30190_30230 = state_30151__$1;
(statearr_30190_30230[(1)] = (10));

} else {
var statearr_30191_30231 = state_30151__$1;
(statearr_30191_30231[(1)] = (11));

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
});})(c__22145__auto___30203,mults,ensure_mult,p))
;
return ((function (switch__22080__auto__,c__22145__auto___30203,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_30195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30195[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_30195[(1)] = (1));

return statearr_30195;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_30151){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30196){if((e30196 instanceof Object)){
var ex__22084__auto__ = e30196;
var statearr_30197_30232 = state_30151;
(statearr_30197_30232[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30233 = state_30151;
state_30151 = G__30233;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_30151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_30151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30203,mults,ensure_mult,p))
})();
var state__22147__auto__ = (function (){var statearr_30198 = f__22146__auto__.call(null);
(statearr_30198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30203);

return statearr_30198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30203,mults,ensure_mult,p))
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
var args30234 = [];
var len__19702__auto___30237 = arguments.length;
var i__19703__auto___30238 = (0);
while(true){
if((i__19703__auto___30238 < len__19702__auto___30237)){
args30234.push((arguments[i__19703__auto___30238]));

var G__30239 = (i__19703__auto___30238 + (1));
i__19703__auto___30238 = G__30239;
continue;
} else {
}
break;
}

var G__30236 = args30234.length;
switch (G__30236) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30234.length)].join('')));

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
var args30241 = [];
var len__19702__auto___30244 = arguments.length;
var i__19703__auto___30245 = (0);
while(true){
if((i__19703__auto___30245 < len__19702__auto___30244)){
args30241.push((arguments[i__19703__auto___30245]));

var G__30246 = (i__19703__auto___30245 + (1));
i__19703__auto___30245 = G__30246;
continue;
} else {
}
break;
}

var G__30243 = args30241.length;
switch (G__30243) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30241.length)].join('')));

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
var args30248 = [];
var len__19702__auto___30319 = arguments.length;
var i__19703__auto___30320 = (0);
while(true){
if((i__19703__auto___30320 < len__19702__auto___30319)){
args30248.push((arguments[i__19703__auto___30320]));

var G__30321 = (i__19703__auto___30320 + (1));
i__19703__auto___30320 = G__30321;
continue;
} else {
}
break;
}

var G__30250 = args30248.length;
switch (G__30250) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30248.length)].join('')));

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
var c__22145__auto___30323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30289){
var state_val_30290 = (state_30289[(1)]);
if((state_val_30290 === (7))){
var state_30289__$1 = state_30289;
var statearr_30291_30324 = state_30289__$1;
(statearr_30291_30324[(2)] = null);

(statearr_30291_30324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (1))){
var state_30289__$1 = state_30289;
var statearr_30292_30325 = state_30289__$1;
(statearr_30292_30325[(2)] = null);

(statearr_30292_30325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (4))){
var inst_30253 = (state_30289[(7)]);
var inst_30255 = (inst_30253 < cnt);
var state_30289__$1 = state_30289;
if(cljs.core.truth_(inst_30255)){
var statearr_30293_30326 = state_30289__$1;
(statearr_30293_30326[(1)] = (6));

} else {
var statearr_30294_30327 = state_30289__$1;
(statearr_30294_30327[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (15))){
var inst_30285 = (state_30289[(2)]);
var state_30289__$1 = state_30289;
var statearr_30295_30328 = state_30289__$1;
(statearr_30295_30328[(2)] = inst_30285);

(statearr_30295_30328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (13))){
var inst_30278 = cljs.core.async.close_BANG_.call(null,out);
var state_30289__$1 = state_30289;
var statearr_30296_30329 = state_30289__$1;
(statearr_30296_30329[(2)] = inst_30278);

(statearr_30296_30329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (6))){
var state_30289__$1 = state_30289;
var statearr_30297_30330 = state_30289__$1;
(statearr_30297_30330[(2)] = null);

(statearr_30297_30330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (3))){
var inst_30287 = (state_30289[(2)]);
var state_30289__$1 = state_30289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30289__$1,inst_30287);
} else {
if((state_val_30290 === (12))){
var inst_30275 = (state_30289[(8)]);
var inst_30275__$1 = (state_30289[(2)]);
var inst_30276 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30275__$1);
var state_30289__$1 = (function (){var statearr_30298 = state_30289;
(statearr_30298[(8)] = inst_30275__$1);

return statearr_30298;
})();
if(cljs.core.truth_(inst_30276)){
var statearr_30299_30331 = state_30289__$1;
(statearr_30299_30331[(1)] = (13));

} else {
var statearr_30300_30332 = state_30289__$1;
(statearr_30300_30332[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (2))){
var inst_30252 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30253 = (0);
var state_30289__$1 = (function (){var statearr_30301 = state_30289;
(statearr_30301[(7)] = inst_30253);

(statearr_30301[(9)] = inst_30252);

return statearr_30301;
})();
var statearr_30302_30333 = state_30289__$1;
(statearr_30302_30333[(2)] = null);

(statearr_30302_30333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (11))){
var inst_30253 = (state_30289[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30289,(10),Object,null,(9));
var inst_30262 = chs__$1.call(null,inst_30253);
var inst_30263 = done.call(null,inst_30253);
var inst_30264 = cljs.core.async.take_BANG_.call(null,inst_30262,inst_30263);
var state_30289__$1 = state_30289;
var statearr_30303_30334 = state_30289__$1;
(statearr_30303_30334[(2)] = inst_30264);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (9))){
var inst_30253 = (state_30289[(7)]);
var inst_30266 = (state_30289[(2)]);
var inst_30267 = (inst_30253 + (1));
var inst_30253__$1 = inst_30267;
var state_30289__$1 = (function (){var statearr_30304 = state_30289;
(statearr_30304[(7)] = inst_30253__$1);

(statearr_30304[(10)] = inst_30266);

return statearr_30304;
})();
var statearr_30305_30335 = state_30289__$1;
(statearr_30305_30335[(2)] = null);

(statearr_30305_30335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (5))){
var inst_30273 = (state_30289[(2)]);
var state_30289__$1 = (function (){var statearr_30306 = state_30289;
(statearr_30306[(11)] = inst_30273);

return statearr_30306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30289__$1,(12),dchan);
} else {
if((state_val_30290 === (14))){
var inst_30275 = (state_30289[(8)]);
var inst_30280 = cljs.core.apply.call(null,f,inst_30275);
var state_30289__$1 = state_30289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30289__$1,(16),out,inst_30280);
} else {
if((state_val_30290 === (16))){
var inst_30282 = (state_30289[(2)]);
var state_30289__$1 = (function (){var statearr_30307 = state_30289;
(statearr_30307[(12)] = inst_30282);

return statearr_30307;
})();
var statearr_30308_30336 = state_30289__$1;
(statearr_30308_30336[(2)] = null);

(statearr_30308_30336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (10))){
var inst_30257 = (state_30289[(2)]);
var inst_30258 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30289__$1 = (function (){var statearr_30309 = state_30289;
(statearr_30309[(13)] = inst_30257);

return statearr_30309;
})();
var statearr_30310_30337 = state_30289__$1;
(statearr_30310_30337[(2)] = inst_30258);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30289__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30290 === (8))){
var inst_30271 = (state_30289[(2)]);
var state_30289__$1 = state_30289;
var statearr_30311_30338 = state_30289__$1;
(statearr_30311_30338[(2)] = inst_30271);

(statearr_30311_30338[(1)] = (5));


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
});})(c__22145__auto___30323,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22080__auto__,c__22145__auto___30323,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_30315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30315[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_30315[(1)] = (1));

return statearr_30315;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_30289){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30316){if((e30316 instanceof Object)){
var ex__22084__auto__ = e30316;
var statearr_30317_30339 = state_30289;
(statearr_30317_30339[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30340 = state_30289;
state_30289 = G__30340;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_30289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_30289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30323,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22147__auto__ = (function (){var statearr_30318 = f__22146__auto__.call(null);
(statearr_30318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30323);

return statearr_30318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30323,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args30342 = [];
var len__19702__auto___30398 = arguments.length;
var i__19703__auto___30399 = (0);
while(true){
if((i__19703__auto___30399 < len__19702__auto___30398)){
args30342.push((arguments[i__19703__auto___30399]));

var G__30400 = (i__19703__auto___30399 + (1));
i__19703__auto___30399 = G__30400;
continue;
} else {
}
break;
}

var G__30344 = args30342.length;
switch (G__30344) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30342.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22145__auto___30402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30402,out){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30402,out){
return (function (state_30374){
var state_val_30375 = (state_30374[(1)]);
if((state_val_30375 === (7))){
var inst_30353 = (state_30374[(7)]);
var inst_30354 = (state_30374[(8)]);
var inst_30353__$1 = (state_30374[(2)]);
var inst_30354__$1 = cljs.core.nth.call(null,inst_30353__$1,(0),null);
var inst_30355 = cljs.core.nth.call(null,inst_30353__$1,(1),null);
var inst_30356 = (inst_30354__$1 == null);
var state_30374__$1 = (function (){var statearr_30376 = state_30374;
(statearr_30376[(7)] = inst_30353__$1);

(statearr_30376[(8)] = inst_30354__$1);

(statearr_30376[(9)] = inst_30355);

return statearr_30376;
})();
if(cljs.core.truth_(inst_30356)){
var statearr_30377_30403 = state_30374__$1;
(statearr_30377_30403[(1)] = (8));

} else {
var statearr_30378_30404 = state_30374__$1;
(statearr_30378_30404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (1))){
var inst_30345 = cljs.core.vec.call(null,chs);
var inst_30346 = inst_30345;
var state_30374__$1 = (function (){var statearr_30379 = state_30374;
(statearr_30379[(10)] = inst_30346);

return statearr_30379;
})();
var statearr_30380_30405 = state_30374__$1;
(statearr_30380_30405[(2)] = null);

(statearr_30380_30405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (4))){
var inst_30346 = (state_30374[(10)]);
var state_30374__$1 = state_30374;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30374__$1,(7),inst_30346);
} else {
if((state_val_30375 === (6))){
var inst_30370 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30381_30406 = state_30374__$1;
(statearr_30381_30406[(2)] = inst_30370);

(statearr_30381_30406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (3))){
var inst_30372 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30374__$1,inst_30372);
} else {
if((state_val_30375 === (2))){
var inst_30346 = (state_30374[(10)]);
var inst_30348 = cljs.core.count.call(null,inst_30346);
var inst_30349 = (inst_30348 > (0));
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30349)){
var statearr_30383_30407 = state_30374__$1;
(statearr_30383_30407[(1)] = (4));

} else {
var statearr_30384_30408 = state_30374__$1;
(statearr_30384_30408[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (11))){
var inst_30346 = (state_30374[(10)]);
var inst_30363 = (state_30374[(2)]);
var tmp30382 = inst_30346;
var inst_30346__$1 = tmp30382;
var state_30374__$1 = (function (){var statearr_30385 = state_30374;
(statearr_30385[(10)] = inst_30346__$1);

(statearr_30385[(11)] = inst_30363);

return statearr_30385;
})();
var statearr_30386_30409 = state_30374__$1;
(statearr_30386_30409[(2)] = null);

(statearr_30386_30409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (9))){
var inst_30354 = (state_30374[(8)]);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30374__$1,(11),out,inst_30354);
} else {
if((state_val_30375 === (5))){
var inst_30368 = cljs.core.async.close_BANG_.call(null,out);
var state_30374__$1 = state_30374;
var statearr_30387_30410 = state_30374__$1;
(statearr_30387_30410[(2)] = inst_30368);

(statearr_30387_30410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (10))){
var inst_30366 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30388_30411 = state_30374__$1;
(statearr_30388_30411[(2)] = inst_30366);

(statearr_30388_30411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (8))){
var inst_30353 = (state_30374[(7)]);
var inst_30354 = (state_30374[(8)]);
var inst_30346 = (state_30374[(10)]);
var inst_30355 = (state_30374[(9)]);
var inst_30358 = (function (){var cs = inst_30346;
var vec__30351 = inst_30353;
var v = inst_30354;
var c = inst_30355;
return ((function (cs,vec__30351,v,c,inst_30353,inst_30354,inst_30346,inst_30355,state_val_30375,c__22145__auto___30402,out){
return (function (p1__30341_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30341_SHARP_);
});
;})(cs,vec__30351,v,c,inst_30353,inst_30354,inst_30346,inst_30355,state_val_30375,c__22145__auto___30402,out))
})();
var inst_30359 = cljs.core.filterv.call(null,inst_30358,inst_30346);
var inst_30346__$1 = inst_30359;
var state_30374__$1 = (function (){var statearr_30389 = state_30374;
(statearr_30389[(10)] = inst_30346__$1);

return statearr_30389;
})();
var statearr_30390_30412 = state_30374__$1;
(statearr_30390_30412[(2)] = null);

(statearr_30390_30412[(1)] = (2));


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
});})(c__22145__auto___30402,out))
;
return ((function (switch__22080__auto__,c__22145__auto___30402,out){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_30394 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30394[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_30394[(1)] = (1));

return statearr_30394;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_30374){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30395){if((e30395 instanceof Object)){
var ex__22084__auto__ = e30395;
var statearr_30396_30413 = state_30374;
(statearr_30396_30413[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30395;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30414 = state_30374;
state_30374 = G__30414;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_30374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_30374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30402,out))
})();
var state__22147__auto__ = (function (){var statearr_30397 = f__22146__auto__.call(null);
(statearr_30397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30402);

return statearr_30397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30402,out))
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
var args30415 = [];
var len__19702__auto___30464 = arguments.length;
var i__19703__auto___30465 = (0);
while(true){
if((i__19703__auto___30465 < len__19702__auto___30464)){
args30415.push((arguments[i__19703__auto___30465]));

var G__30466 = (i__19703__auto___30465 + (1));
i__19703__auto___30465 = G__30466;
continue;
} else {
}
break;
}

var G__30417 = args30415.length;
switch (G__30417) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30415.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22145__auto___30468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30468,out){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30468,out){
return (function (state_30441){
var state_val_30442 = (state_30441[(1)]);
if((state_val_30442 === (7))){
var inst_30423 = (state_30441[(7)]);
var inst_30423__$1 = (state_30441[(2)]);
var inst_30424 = (inst_30423__$1 == null);
var inst_30425 = cljs.core.not.call(null,inst_30424);
var state_30441__$1 = (function (){var statearr_30443 = state_30441;
(statearr_30443[(7)] = inst_30423__$1);

return statearr_30443;
})();
if(inst_30425){
var statearr_30444_30469 = state_30441__$1;
(statearr_30444_30469[(1)] = (8));

} else {
var statearr_30445_30470 = state_30441__$1;
(statearr_30445_30470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (1))){
var inst_30418 = (0);
var state_30441__$1 = (function (){var statearr_30446 = state_30441;
(statearr_30446[(8)] = inst_30418);

return statearr_30446;
})();
var statearr_30447_30471 = state_30441__$1;
(statearr_30447_30471[(2)] = null);

(statearr_30447_30471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (4))){
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30441__$1,(7),ch);
} else {
if((state_val_30442 === (6))){
var inst_30436 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30448_30472 = state_30441__$1;
(statearr_30448_30472[(2)] = inst_30436);

(statearr_30448_30472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (3))){
var inst_30438 = (state_30441[(2)]);
var inst_30439 = cljs.core.async.close_BANG_.call(null,out);
var state_30441__$1 = (function (){var statearr_30449 = state_30441;
(statearr_30449[(9)] = inst_30438);

return statearr_30449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30441__$1,inst_30439);
} else {
if((state_val_30442 === (2))){
var inst_30418 = (state_30441[(8)]);
var inst_30420 = (inst_30418 < n);
var state_30441__$1 = state_30441;
if(cljs.core.truth_(inst_30420)){
var statearr_30450_30473 = state_30441__$1;
(statearr_30450_30473[(1)] = (4));

} else {
var statearr_30451_30474 = state_30441__$1;
(statearr_30451_30474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (11))){
var inst_30418 = (state_30441[(8)]);
var inst_30428 = (state_30441[(2)]);
var inst_30429 = (inst_30418 + (1));
var inst_30418__$1 = inst_30429;
var state_30441__$1 = (function (){var statearr_30452 = state_30441;
(statearr_30452[(8)] = inst_30418__$1);

(statearr_30452[(10)] = inst_30428);

return statearr_30452;
})();
var statearr_30453_30475 = state_30441__$1;
(statearr_30453_30475[(2)] = null);

(statearr_30453_30475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (9))){
var state_30441__$1 = state_30441;
var statearr_30454_30476 = state_30441__$1;
(statearr_30454_30476[(2)] = null);

(statearr_30454_30476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (5))){
var state_30441__$1 = state_30441;
var statearr_30455_30477 = state_30441__$1;
(statearr_30455_30477[(2)] = null);

(statearr_30455_30477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (10))){
var inst_30433 = (state_30441[(2)]);
var state_30441__$1 = state_30441;
var statearr_30456_30478 = state_30441__$1;
(statearr_30456_30478[(2)] = inst_30433);

(statearr_30456_30478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30442 === (8))){
var inst_30423 = (state_30441[(7)]);
var state_30441__$1 = state_30441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30441__$1,(11),out,inst_30423);
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
});})(c__22145__auto___30468,out))
;
return ((function (switch__22080__auto__,c__22145__auto___30468,out){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_30460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30460[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_30460[(1)] = (1));

return statearr_30460;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_30441){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30461){if((e30461 instanceof Object)){
var ex__22084__auto__ = e30461;
var statearr_30462_30479 = state_30441;
(statearr_30462_30479[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30480 = state_30441;
state_30441 = G__30480;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_30441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_30441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30468,out))
})();
var state__22147__auto__ = (function (){var statearr_30463 = f__22146__auto__.call(null);
(statearr_30463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30468);

return statearr_30463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30468,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30488 = (function (map_LT_,f,ch,meta30489){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30489 = meta30489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30490,meta30489__$1){
var self__ = this;
var _30490__$1 = this;
return (new cljs.core.async.t_cljs$core$async30488(self__.map_LT_,self__.f,self__.ch,meta30489__$1));
});

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30490){
var self__ = this;
var _30490__$1 = this;
return self__.meta30489;
});

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30491 = (function (map_LT_,f,ch,meta30489,_,fn1,meta30492){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30489 = meta30489;
this._ = _;
this.fn1 = fn1;
this.meta30492 = meta30492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30493,meta30492__$1){
var self__ = this;
var _30493__$1 = this;
return (new cljs.core.async.t_cljs$core$async30491(self__.map_LT_,self__.f,self__.ch,self__.meta30489,self__._,self__.fn1,meta30492__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30493){
var self__ = this;
var _30493__$1 = this;
return self__.meta30492;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30491.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30481_SHARP_){
return f1.call(null,(((p1__30481_SHARP_ == null))?null:self__.f.call(null,p1__30481_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30491.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30489","meta30489",1849996540,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30488","cljs.core.async/t_cljs$core$async30488",-979929295,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30492","meta30492",-750744378,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30491";

cljs.core.async.t_cljs$core$async30491.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async30491");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30491 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30491(map_LT___$1,f__$1,ch__$1,meta30489__$1,___$2,fn1__$1,meta30492){
return (new cljs.core.async.t_cljs$core$async30491(map_LT___$1,f__$1,ch__$1,meta30489__$1,___$2,fn1__$1,meta30492));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30491(self__.map_LT_,self__.f,self__.ch,self__.meta30489,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18632__auto__ = ret;
if(cljs.core.truth_(and__18632__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18632__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30489","meta30489",1849996540,null)], null);
});

cljs.core.async.t_cljs$core$async30488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30488";

cljs.core.async.t_cljs$core$async30488.cljs$lang$ctorPrWriter = (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async30488");
});

cljs.core.async.__GT_t_cljs$core$async30488 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30488(map_LT___$1,f__$1,ch__$1,meta30489){
return (new cljs.core.async.t_cljs$core$async30488(map_LT___$1,f__$1,ch__$1,meta30489));
});

}

return (new cljs.core.async.t_cljs$core$async30488(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30497 = (function (map_GT_,f,ch,meta30498){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30498 = meta30498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30499,meta30498__$1){
var self__ = this;
var _30499__$1 = this;
return (new cljs.core.async.t_cljs$core$async30497(self__.map_GT_,self__.f,self__.ch,meta30498__$1));
});

cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30499){
var self__ = this;
var _30499__$1 = this;
return self__.meta30498;
});

cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30498","meta30498",-176956774,null)], null);
});

cljs.core.async.t_cljs$core$async30497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30497";

cljs.core.async.t_cljs$core$async30497.cljs$lang$ctorPrWriter = (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async30497");
});

cljs.core.async.__GT_t_cljs$core$async30497 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30497(map_GT___$1,f__$1,ch__$1,meta30498){
return (new cljs.core.async.t_cljs$core$async30497(map_GT___$1,f__$1,ch__$1,meta30498));
});

}

return (new cljs.core.async.t_cljs$core$async30497(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30503 = (function (filter_GT_,p,ch,meta30504){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30504 = meta30504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30505,meta30504__$1){
var self__ = this;
var _30505__$1 = this;
return (new cljs.core.async.t_cljs$core$async30503(self__.filter_GT_,self__.p,self__.ch,meta30504__$1));
});

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30505){
var self__ = this;
var _30505__$1 = this;
return self__.meta30504;
});

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30503.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30504","meta30504",-1250201875,null)], null);
});

cljs.core.async.t_cljs$core$async30503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30503";

cljs.core.async.t_cljs$core$async30503.cljs$lang$ctorPrWriter = (function (this__19242__auto__,writer__19243__auto__,opt__19244__auto__){
return cljs.core._write.call(null,writer__19243__auto__,"cljs.core.async/t_cljs$core$async30503");
});

cljs.core.async.__GT_t_cljs$core$async30503 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30503(filter_GT___$1,p__$1,ch__$1,meta30504){
return (new cljs.core.async.t_cljs$core$async30503(filter_GT___$1,p__$1,ch__$1,meta30504));
});

}

return (new cljs.core.async.t_cljs$core$async30503(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args30506 = [];
var len__19702__auto___30550 = arguments.length;
var i__19703__auto___30551 = (0);
while(true){
if((i__19703__auto___30551 < len__19702__auto___30550)){
args30506.push((arguments[i__19703__auto___30551]));

var G__30552 = (i__19703__auto___30551 + (1));
i__19703__auto___30551 = G__30552;
continue;
} else {
}
break;
}

var G__30508 = args30506.length;
switch (G__30508) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30506.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22145__auto___30554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30554,out){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30554,out){
return (function (state_30529){
var state_val_30530 = (state_30529[(1)]);
if((state_val_30530 === (7))){
var inst_30525 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30531_30555 = state_30529__$1;
(statearr_30531_30555[(2)] = inst_30525);

(statearr_30531_30555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (1))){
var state_30529__$1 = state_30529;
var statearr_30532_30556 = state_30529__$1;
(statearr_30532_30556[(2)] = null);

(statearr_30532_30556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (4))){
var inst_30511 = (state_30529[(7)]);
var inst_30511__$1 = (state_30529[(2)]);
var inst_30512 = (inst_30511__$1 == null);
var state_30529__$1 = (function (){var statearr_30533 = state_30529;
(statearr_30533[(7)] = inst_30511__$1);

return statearr_30533;
})();
if(cljs.core.truth_(inst_30512)){
var statearr_30534_30557 = state_30529__$1;
(statearr_30534_30557[(1)] = (5));

} else {
var statearr_30535_30558 = state_30529__$1;
(statearr_30535_30558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (6))){
var inst_30511 = (state_30529[(7)]);
var inst_30516 = p.call(null,inst_30511);
var state_30529__$1 = state_30529;
if(cljs.core.truth_(inst_30516)){
var statearr_30536_30559 = state_30529__$1;
(statearr_30536_30559[(1)] = (8));

} else {
var statearr_30537_30560 = state_30529__$1;
(statearr_30537_30560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (3))){
var inst_30527 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30529__$1,inst_30527);
} else {
if((state_val_30530 === (2))){
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30529__$1,(4),ch);
} else {
if((state_val_30530 === (11))){
var inst_30519 = (state_30529[(2)]);
var state_30529__$1 = state_30529;
var statearr_30538_30561 = state_30529__$1;
(statearr_30538_30561[(2)] = inst_30519);

(statearr_30538_30561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (9))){
var state_30529__$1 = state_30529;
var statearr_30539_30562 = state_30529__$1;
(statearr_30539_30562[(2)] = null);

(statearr_30539_30562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (5))){
var inst_30514 = cljs.core.async.close_BANG_.call(null,out);
var state_30529__$1 = state_30529;
var statearr_30540_30563 = state_30529__$1;
(statearr_30540_30563[(2)] = inst_30514);

(statearr_30540_30563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (10))){
var inst_30522 = (state_30529[(2)]);
var state_30529__$1 = (function (){var statearr_30541 = state_30529;
(statearr_30541[(8)] = inst_30522);

return statearr_30541;
})();
var statearr_30542_30564 = state_30529__$1;
(statearr_30542_30564[(2)] = null);

(statearr_30542_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30530 === (8))){
var inst_30511 = (state_30529[(7)]);
var state_30529__$1 = state_30529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30529__$1,(11),out,inst_30511);
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
});})(c__22145__auto___30554,out))
;
return ((function (switch__22080__auto__,c__22145__auto___30554,out){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_30546 = [null,null,null,null,null,null,null,null,null];
(statearr_30546[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_30546[(1)] = (1));

return statearr_30546;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_30529){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30547){if((e30547 instanceof Object)){
var ex__22084__auto__ = e30547;
var statearr_30548_30565 = state_30529;
(statearr_30548_30565[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30566 = state_30529;
state_30529 = G__30566;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_30529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_30529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30554,out))
})();
var state__22147__auto__ = (function (){var statearr_30549 = f__22146__auto__.call(null);
(statearr_30549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30554);

return statearr_30549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30554,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30567 = [];
var len__19702__auto___30570 = arguments.length;
var i__19703__auto___30571 = (0);
while(true){
if((i__19703__auto___30571 < len__19702__auto___30570)){
args30567.push((arguments[i__19703__auto___30571]));

var G__30572 = (i__19703__auto___30571 + (1));
i__19703__auto___30571 = G__30572;
continue;
} else {
}
break;
}

var G__30569 = args30567.length;
switch (G__30569) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30567.length)].join('')));

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
var c__22145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto__){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto__){
return (function (state_30739){
var state_val_30740 = (state_30739[(1)]);
if((state_val_30740 === (7))){
var inst_30735 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30741_30782 = state_30739__$1;
(statearr_30741_30782[(2)] = inst_30735);

(statearr_30741_30782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (20))){
var inst_30705 = (state_30739[(7)]);
var inst_30716 = (state_30739[(2)]);
var inst_30717 = cljs.core.next.call(null,inst_30705);
var inst_30691 = inst_30717;
var inst_30692 = null;
var inst_30693 = (0);
var inst_30694 = (0);
var state_30739__$1 = (function (){var statearr_30742 = state_30739;
(statearr_30742[(8)] = inst_30694);

(statearr_30742[(9)] = inst_30692);

(statearr_30742[(10)] = inst_30691);

(statearr_30742[(11)] = inst_30693);

(statearr_30742[(12)] = inst_30716);

return statearr_30742;
})();
var statearr_30743_30783 = state_30739__$1;
(statearr_30743_30783[(2)] = null);

(statearr_30743_30783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (1))){
var state_30739__$1 = state_30739;
var statearr_30744_30784 = state_30739__$1;
(statearr_30744_30784[(2)] = null);

(statearr_30744_30784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (4))){
var inst_30680 = (state_30739[(13)]);
var inst_30680__$1 = (state_30739[(2)]);
var inst_30681 = (inst_30680__$1 == null);
var state_30739__$1 = (function (){var statearr_30745 = state_30739;
(statearr_30745[(13)] = inst_30680__$1);

return statearr_30745;
})();
if(cljs.core.truth_(inst_30681)){
var statearr_30746_30785 = state_30739__$1;
(statearr_30746_30785[(1)] = (5));

} else {
var statearr_30747_30786 = state_30739__$1;
(statearr_30747_30786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (15))){
var state_30739__$1 = state_30739;
var statearr_30751_30787 = state_30739__$1;
(statearr_30751_30787[(2)] = null);

(statearr_30751_30787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (21))){
var state_30739__$1 = state_30739;
var statearr_30752_30788 = state_30739__$1;
(statearr_30752_30788[(2)] = null);

(statearr_30752_30788[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (13))){
var inst_30694 = (state_30739[(8)]);
var inst_30692 = (state_30739[(9)]);
var inst_30691 = (state_30739[(10)]);
var inst_30693 = (state_30739[(11)]);
var inst_30701 = (state_30739[(2)]);
var inst_30702 = (inst_30694 + (1));
var tmp30748 = inst_30692;
var tmp30749 = inst_30691;
var tmp30750 = inst_30693;
var inst_30691__$1 = tmp30749;
var inst_30692__$1 = tmp30748;
var inst_30693__$1 = tmp30750;
var inst_30694__$1 = inst_30702;
var state_30739__$1 = (function (){var statearr_30753 = state_30739;
(statearr_30753[(8)] = inst_30694__$1);

(statearr_30753[(9)] = inst_30692__$1);

(statearr_30753[(10)] = inst_30691__$1);

(statearr_30753[(11)] = inst_30693__$1);

(statearr_30753[(14)] = inst_30701);

return statearr_30753;
})();
var statearr_30754_30789 = state_30739__$1;
(statearr_30754_30789[(2)] = null);

(statearr_30754_30789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (22))){
var state_30739__$1 = state_30739;
var statearr_30755_30790 = state_30739__$1;
(statearr_30755_30790[(2)] = null);

(statearr_30755_30790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (6))){
var inst_30680 = (state_30739[(13)]);
var inst_30689 = f.call(null,inst_30680);
var inst_30690 = cljs.core.seq.call(null,inst_30689);
var inst_30691 = inst_30690;
var inst_30692 = null;
var inst_30693 = (0);
var inst_30694 = (0);
var state_30739__$1 = (function (){var statearr_30756 = state_30739;
(statearr_30756[(8)] = inst_30694);

(statearr_30756[(9)] = inst_30692);

(statearr_30756[(10)] = inst_30691);

(statearr_30756[(11)] = inst_30693);

return statearr_30756;
})();
var statearr_30757_30791 = state_30739__$1;
(statearr_30757_30791[(2)] = null);

(statearr_30757_30791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (17))){
var inst_30705 = (state_30739[(7)]);
var inst_30709 = cljs.core.chunk_first.call(null,inst_30705);
var inst_30710 = cljs.core.chunk_rest.call(null,inst_30705);
var inst_30711 = cljs.core.count.call(null,inst_30709);
var inst_30691 = inst_30710;
var inst_30692 = inst_30709;
var inst_30693 = inst_30711;
var inst_30694 = (0);
var state_30739__$1 = (function (){var statearr_30758 = state_30739;
(statearr_30758[(8)] = inst_30694);

(statearr_30758[(9)] = inst_30692);

(statearr_30758[(10)] = inst_30691);

(statearr_30758[(11)] = inst_30693);

return statearr_30758;
})();
var statearr_30759_30792 = state_30739__$1;
(statearr_30759_30792[(2)] = null);

(statearr_30759_30792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (3))){
var inst_30737 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30739__$1,inst_30737);
} else {
if((state_val_30740 === (12))){
var inst_30725 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30760_30793 = state_30739__$1;
(statearr_30760_30793[(2)] = inst_30725);

(statearr_30760_30793[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (2))){
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30739__$1,(4),in$);
} else {
if((state_val_30740 === (23))){
var inst_30733 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30761_30794 = state_30739__$1;
(statearr_30761_30794[(2)] = inst_30733);

(statearr_30761_30794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (19))){
var inst_30720 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30762_30795 = state_30739__$1;
(statearr_30762_30795[(2)] = inst_30720);

(statearr_30762_30795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (11))){
var inst_30691 = (state_30739[(10)]);
var inst_30705 = (state_30739[(7)]);
var inst_30705__$1 = cljs.core.seq.call(null,inst_30691);
var state_30739__$1 = (function (){var statearr_30763 = state_30739;
(statearr_30763[(7)] = inst_30705__$1);

return statearr_30763;
})();
if(inst_30705__$1){
var statearr_30764_30796 = state_30739__$1;
(statearr_30764_30796[(1)] = (14));

} else {
var statearr_30765_30797 = state_30739__$1;
(statearr_30765_30797[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (9))){
var inst_30727 = (state_30739[(2)]);
var inst_30728 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30739__$1 = (function (){var statearr_30766 = state_30739;
(statearr_30766[(15)] = inst_30727);

return statearr_30766;
})();
if(cljs.core.truth_(inst_30728)){
var statearr_30767_30798 = state_30739__$1;
(statearr_30767_30798[(1)] = (21));

} else {
var statearr_30768_30799 = state_30739__$1;
(statearr_30768_30799[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (5))){
var inst_30683 = cljs.core.async.close_BANG_.call(null,out);
var state_30739__$1 = state_30739;
var statearr_30769_30800 = state_30739__$1;
(statearr_30769_30800[(2)] = inst_30683);

(statearr_30769_30800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (14))){
var inst_30705 = (state_30739[(7)]);
var inst_30707 = cljs.core.chunked_seq_QMARK_.call(null,inst_30705);
var state_30739__$1 = state_30739;
if(inst_30707){
var statearr_30770_30801 = state_30739__$1;
(statearr_30770_30801[(1)] = (17));

} else {
var statearr_30771_30802 = state_30739__$1;
(statearr_30771_30802[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (16))){
var inst_30723 = (state_30739[(2)]);
var state_30739__$1 = state_30739;
var statearr_30772_30803 = state_30739__$1;
(statearr_30772_30803[(2)] = inst_30723);

(statearr_30772_30803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30740 === (10))){
var inst_30694 = (state_30739[(8)]);
var inst_30692 = (state_30739[(9)]);
var inst_30699 = cljs.core._nth.call(null,inst_30692,inst_30694);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30739__$1,(13),out,inst_30699);
} else {
if((state_val_30740 === (18))){
var inst_30705 = (state_30739[(7)]);
var inst_30714 = cljs.core.first.call(null,inst_30705);
var state_30739__$1 = state_30739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30739__$1,(20),out,inst_30714);
} else {
if((state_val_30740 === (8))){
var inst_30694 = (state_30739[(8)]);
var inst_30693 = (state_30739[(11)]);
var inst_30696 = (inst_30694 < inst_30693);
var inst_30697 = inst_30696;
var state_30739__$1 = state_30739;
if(cljs.core.truth_(inst_30697)){
var statearr_30773_30804 = state_30739__$1;
(statearr_30773_30804[(1)] = (10));

} else {
var statearr_30774_30805 = state_30739__$1;
(statearr_30774_30805[(1)] = (11));

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
});})(c__22145__auto__))
;
return ((function (switch__22080__auto__,c__22145__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22081__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22081__auto____0 = (function (){
var statearr_30778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22081__auto__);

(statearr_30778[(1)] = (1));

return statearr_30778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22081__auto____1 = (function (state_30739){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30779){if((e30779 instanceof Object)){
var ex__22084__auto__ = e30779;
var statearr_30780_30806 = state_30739;
(statearr_30780_30806[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30807 = state_30739;
state_30739 = G__30807;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22081__auto__ = function(state_30739){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22081__auto____1.call(this,state_30739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22081__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22081__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto__))
})();
var state__22147__auto__ = (function (){var statearr_30781 = f__22146__auto__.call(null);
(statearr_30781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto__);

return statearr_30781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto__))
);

return c__22145__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30808 = [];
var len__19702__auto___30811 = arguments.length;
var i__19703__auto___30812 = (0);
while(true){
if((i__19703__auto___30812 < len__19702__auto___30811)){
args30808.push((arguments[i__19703__auto___30812]));

var G__30813 = (i__19703__auto___30812 + (1));
i__19703__auto___30812 = G__30813;
continue;
} else {
}
break;
}

var G__30810 = args30808.length;
switch (G__30810) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30808.length)].join('')));

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
var args30815 = [];
var len__19702__auto___30818 = arguments.length;
var i__19703__auto___30819 = (0);
while(true){
if((i__19703__auto___30819 < len__19702__auto___30818)){
args30815.push((arguments[i__19703__auto___30819]));

var G__30820 = (i__19703__auto___30819 + (1));
i__19703__auto___30819 = G__30820;
continue;
} else {
}
break;
}

var G__30817 = args30815.length;
switch (G__30817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30815.length)].join('')));

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
var args30822 = [];
var len__19702__auto___30873 = arguments.length;
var i__19703__auto___30874 = (0);
while(true){
if((i__19703__auto___30874 < len__19702__auto___30873)){
args30822.push((arguments[i__19703__auto___30874]));

var G__30875 = (i__19703__auto___30874 + (1));
i__19703__auto___30874 = G__30875;
continue;
} else {
}
break;
}

var G__30824 = args30822.length;
switch (G__30824) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30822.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22145__auto___30877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30877,out){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30877,out){
return (function (state_30848){
var state_val_30849 = (state_30848[(1)]);
if((state_val_30849 === (7))){
var inst_30843 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30850_30878 = state_30848__$1;
(statearr_30850_30878[(2)] = inst_30843);

(statearr_30850_30878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (1))){
var inst_30825 = null;
var state_30848__$1 = (function (){var statearr_30851 = state_30848;
(statearr_30851[(7)] = inst_30825);

return statearr_30851;
})();
var statearr_30852_30879 = state_30848__$1;
(statearr_30852_30879[(2)] = null);

(statearr_30852_30879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (4))){
var inst_30828 = (state_30848[(8)]);
var inst_30828__$1 = (state_30848[(2)]);
var inst_30829 = (inst_30828__$1 == null);
var inst_30830 = cljs.core.not.call(null,inst_30829);
var state_30848__$1 = (function (){var statearr_30853 = state_30848;
(statearr_30853[(8)] = inst_30828__$1);

return statearr_30853;
})();
if(inst_30830){
var statearr_30854_30880 = state_30848__$1;
(statearr_30854_30880[(1)] = (5));

} else {
var statearr_30855_30881 = state_30848__$1;
(statearr_30855_30881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (6))){
var state_30848__$1 = state_30848;
var statearr_30856_30882 = state_30848__$1;
(statearr_30856_30882[(2)] = null);

(statearr_30856_30882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (3))){
var inst_30845 = (state_30848[(2)]);
var inst_30846 = cljs.core.async.close_BANG_.call(null,out);
var state_30848__$1 = (function (){var statearr_30857 = state_30848;
(statearr_30857[(9)] = inst_30845);

return statearr_30857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30848__$1,inst_30846);
} else {
if((state_val_30849 === (2))){
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30848__$1,(4),ch);
} else {
if((state_val_30849 === (11))){
var inst_30828 = (state_30848[(8)]);
var inst_30837 = (state_30848[(2)]);
var inst_30825 = inst_30828;
var state_30848__$1 = (function (){var statearr_30858 = state_30848;
(statearr_30858[(10)] = inst_30837);

(statearr_30858[(7)] = inst_30825);

return statearr_30858;
})();
var statearr_30859_30883 = state_30848__$1;
(statearr_30859_30883[(2)] = null);

(statearr_30859_30883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (9))){
var inst_30828 = (state_30848[(8)]);
var state_30848__$1 = state_30848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30848__$1,(11),out,inst_30828);
} else {
if((state_val_30849 === (5))){
var inst_30825 = (state_30848[(7)]);
var inst_30828 = (state_30848[(8)]);
var inst_30832 = cljs.core._EQ_.call(null,inst_30828,inst_30825);
var state_30848__$1 = state_30848;
if(inst_30832){
var statearr_30861_30884 = state_30848__$1;
(statearr_30861_30884[(1)] = (8));

} else {
var statearr_30862_30885 = state_30848__$1;
(statearr_30862_30885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (10))){
var inst_30840 = (state_30848[(2)]);
var state_30848__$1 = state_30848;
var statearr_30863_30886 = state_30848__$1;
(statearr_30863_30886[(2)] = inst_30840);

(statearr_30863_30886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30849 === (8))){
var inst_30825 = (state_30848[(7)]);
var tmp30860 = inst_30825;
var inst_30825__$1 = tmp30860;
var state_30848__$1 = (function (){var statearr_30864 = state_30848;
(statearr_30864[(7)] = inst_30825__$1);

return statearr_30864;
})();
var statearr_30865_30887 = state_30848__$1;
(statearr_30865_30887[(2)] = null);

(statearr_30865_30887[(1)] = (2));


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
});})(c__22145__auto___30877,out))
;
return ((function (switch__22080__auto__,c__22145__auto___30877,out){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_30869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30869[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_30869[(1)] = (1));

return statearr_30869;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_30848){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30870){if((e30870 instanceof Object)){
var ex__22084__auto__ = e30870;
var statearr_30871_30888 = state_30848;
(statearr_30871_30888[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30889 = state_30848;
state_30848 = G__30889;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_30848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_30848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30877,out))
})();
var state__22147__auto__ = (function (){var statearr_30872 = f__22146__auto__.call(null);
(statearr_30872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30877);

return statearr_30872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30877,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30890 = [];
var len__19702__auto___30960 = arguments.length;
var i__19703__auto___30961 = (0);
while(true){
if((i__19703__auto___30961 < len__19702__auto___30960)){
args30890.push((arguments[i__19703__auto___30961]));

var G__30962 = (i__19703__auto___30961 + (1));
i__19703__auto___30961 = G__30962;
continue;
} else {
}
break;
}

var G__30892 = args30890.length;
switch (G__30892) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30890.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22145__auto___30964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___30964,out){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___30964,out){
return (function (state_30930){
var state_val_30931 = (state_30930[(1)]);
if((state_val_30931 === (7))){
var inst_30926 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30932_30965 = state_30930__$1;
(statearr_30932_30965[(2)] = inst_30926);

(statearr_30932_30965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (1))){
var inst_30893 = (new Array(n));
var inst_30894 = inst_30893;
var inst_30895 = (0);
var state_30930__$1 = (function (){var statearr_30933 = state_30930;
(statearr_30933[(7)] = inst_30895);

(statearr_30933[(8)] = inst_30894);

return statearr_30933;
})();
var statearr_30934_30966 = state_30930__$1;
(statearr_30934_30966[(2)] = null);

(statearr_30934_30966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (4))){
var inst_30898 = (state_30930[(9)]);
var inst_30898__$1 = (state_30930[(2)]);
var inst_30899 = (inst_30898__$1 == null);
var inst_30900 = cljs.core.not.call(null,inst_30899);
var state_30930__$1 = (function (){var statearr_30935 = state_30930;
(statearr_30935[(9)] = inst_30898__$1);

return statearr_30935;
})();
if(inst_30900){
var statearr_30936_30967 = state_30930__$1;
(statearr_30936_30967[(1)] = (5));

} else {
var statearr_30937_30968 = state_30930__$1;
(statearr_30937_30968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (15))){
var inst_30920 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30938_30969 = state_30930__$1;
(statearr_30938_30969[(2)] = inst_30920);

(statearr_30938_30969[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (13))){
var state_30930__$1 = state_30930;
var statearr_30939_30970 = state_30930__$1;
(statearr_30939_30970[(2)] = null);

(statearr_30939_30970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (6))){
var inst_30895 = (state_30930[(7)]);
var inst_30916 = (inst_30895 > (0));
var state_30930__$1 = state_30930;
if(cljs.core.truth_(inst_30916)){
var statearr_30940_30971 = state_30930__$1;
(statearr_30940_30971[(1)] = (12));

} else {
var statearr_30941_30972 = state_30930__$1;
(statearr_30941_30972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (3))){
var inst_30928 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30930__$1,inst_30928);
} else {
if((state_val_30931 === (12))){
var inst_30894 = (state_30930[(8)]);
var inst_30918 = cljs.core.vec.call(null,inst_30894);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30930__$1,(15),out,inst_30918);
} else {
if((state_val_30931 === (2))){
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30930__$1,(4),ch);
} else {
if((state_val_30931 === (11))){
var inst_30910 = (state_30930[(2)]);
var inst_30911 = (new Array(n));
var inst_30894 = inst_30911;
var inst_30895 = (0);
var state_30930__$1 = (function (){var statearr_30942 = state_30930;
(statearr_30942[(10)] = inst_30910);

(statearr_30942[(7)] = inst_30895);

(statearr_30942[(8)] = inst_30894);

return statearr_30942;
})();
var statearr_30943_30973 = state_30930__$1;
(statearr_30943_30973[(2)] = null);

(statearr_30943_30973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (9))){
var inst_30894 = (state_30930[(8)]);
var inst_30908 = cljs.core.vec.call(null,inst_30894);
var state_30930__$1 = state_30930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30930__$1,(11),out,inst_30908);
} else {
if((state_val_30931 === (5))){
var inst_30895 = (state_30930[(7)]);
var inst_30898 = (state_30930[(9)]);
var inst_30894 = (state_30930[(8)]);
var inst_30903 = (state_30930[(11)]);
var inst_30902 = (inst_30894[inst_30895] = inst_30898);
var inst_30903__$1 = (inst_30895 + (1));
var inst_30904 = (inst_30903__$1 < n);
var state_30930__$1 = (function (){var statearr_30944 = state_30930;
(statearr_30944[(12)] = inst_30902);

(statearr_30944[(11)] = inst_30903__$1);

return statearr_30944;
})();
if(cljs.core.truth_(inst_30904)){
var statearr_30945_30974 = state_30930__$1;
(statearr_30945_30974[(1)] = (8));

} else {
var statearr_30946_30975 = state_30930__$1;
(statearr_30946_30975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (14))){
var inst_30923 = (state_30930[(2)]);
var inst_30924 = cljs.core.async.close_BANG_.call(null,out);
var state_30930__$1 = (function (){var statearr_30948 = state_30930;
(statearr_30948[(13)] = inst_30923);

return statearr_30948;
})();
var statearr_30949_30976 = state_30930__$1;
(statearr_30949_30976[(2)] = inst_30924);

(statearr_30949_30976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (10))){
var inst_30914 = (state_30930[(2)]);
var state_30930__$1 = state_30930;
var statearr_30950_30977 = state_30930__$1;
(statearr_30950_30977[(2)] = inst_30914);

(statearr_30950_30977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30931 === (8))){
var inst_30894 = (state_30930[(8)]);
var inst_30903 = (state_30930[(11)]);
var tmp30947 = inst_30894;
var inst_30894__$1 = tmp30947;
var inst_30895 = inst_30903;
var state_30930__$1 = (function (){var statearr_30951 = state_30930;
(statearr_30951[(7)] = inst_30895);

(statearr_30951[(8)] = inst_30894__$1);

return statearr_30951;
})();
var statearr_30952_30978 = state_30930__$1;
(statearr_30952_30978[(2)] = null);

(statearr_30952_30978[(1)] = (2));


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
});})(c__22145__auto___30964,out))
;
return ((function (switch__22080__auto__,c__22145__auto___30964,out){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_30956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30956[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_30956[(1)] = (1));

return statearr_30956;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_30930){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_30930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e30957){if((e30957 instanceof Object)){
var ex__22084__auto__ = e30957;
var statearr_30958_30979 = state_30930;
(statearr_30958_30979[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30980 = state_30930;
state_30930 = G__30980;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_30930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_30930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___30964,out))
})();
var state__22147__auto__ = (function (){var statearr_30959 = f__22146__auto__.call(null);
(statearr_30959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___30964);

return statearr_30959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___30964,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30981 = [];
var len__19702__auto___31055 = arguments.length;
var i__19703__auto___31056 = (0);
while(true){
if((i__19703__auto___31056 < len__19702__auto___31055)){
args30981.push((arguments[i__19703__auto___31056]));

var G__31057 = (i__19703__auto___31056 + (1));
i__19703__auto___31056 = G__31057;
continue;
} else {
}
break;
}

var G__30983 = args30981.length;
switch (G__30983) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30981.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22145__auto___31059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22145__auto___31059,out){
return (function (){
var f__22146__auto__ = (function (){var switch__22080__auto__ = ((function (c__22145__auto___31059,out){
return (function (state_31025){
var state_val_31026 = (state_31025[(1)]);
if((state_val_31026 === (7))){
var inst_31021 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31027_31060 = state_31025__$1;
(statearr_31027_31060[(2)] = inst_31021);

(statearr_31027_31060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (1))){
var inst_30984 = [];
var inst_30985 = inst_30984;
var inst_30986 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31025__$1 = (function (){var statearr_31028 = state_31025;
(statearr_31028[(7)] = inst_30986);

(statearr_31028[(8)] = inst_30985);

return statearr_31028;
})();
var statearr_31029_31061 = state_31025__$1;
(statearr_31029_31061[(2)] = null);

(statearr_31029_31061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (4))){
var inst_30989 = (state_31025[(9)]);
var inst_30989__$1 = (state_31025[(2)]);
var inst_30990 = (inst_30989__$1 == null);
var inst_30991 = cljs.core.not.call(null,inst_30990);
var state_31025__$1 = (function (){var statearr_31030 = state_31025;
(statearr_31030[(9)] = inst_30989__$1);

return statearr_31030;
})();
if(inst_30991){
var statearr_31031_31062 = state_31025__$1;
(statearr_31031_31062[(1)] = (5));

} else {
var statearr_31032_31063 = state_31025__$1;
(statearr_31032_31063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (15))){
var inst_31015 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31033_31064 = state_31025__$1;
(statearr_31033_31064[(2)] = inst_31015);

(statearr_31033_31064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (13))){
var state_31025__$1 = state_31025;
var statearr_31034_31065 = state_31025__$1;
(statearr_31034_31065[(2)] = null);

(statearr_31034_31065[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (6))){
var inst_30985 = (state_31025[(8)]);
var inst_31010 = inst_30985.length;
var inst_31011 = (inst_31010 > (0));
var state_31025__$1 = state_31025;
if(cljs.core.truth_(inst_31011)){
var statearr_31035_31066 = state_31025__$1;
(statearr_31035_31066[(1)] = (12));

} else {
var statearr_31036_31067 = state_31025__$1;
(statearr_31036_31067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (3))){
var inst_31023 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31025__$1,inst_31023);
} else {
if((state_val_31026 === (12))){
var inst_30985 = (state_31025[(8)]);
var inst_31013 = cljs.core.vec.call(null,inst_30985);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31025__$1,(15),out,inst_31013);
} else {
if((state_val_31026 === (2))){
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31025__$1,(4),ch);
} else {
if((state_val_31026 === (11))){
var inst_30989 = (state_31025[(9)]);
var inst_30993 = (state_31025[(10)]);
var inst_31003 = (state_31025[(2)]);
var inst_31004 = [];
var inst_31005 = inst_31004.push(inst_30989);
var inst_30985 = inst_31004;
var inst_30986 = inst_30993;
var state_31025__$1 = (function (){var statearr_31037 = state_31025;
(statearr_31037[(7)] = inst_30986);

(statearr_31037[(8)] = inst_30985);

(statearr_31037[(11)] = inst_31005);

(statearr_31037[(12)] = inst_31003);

return statearr_31037;
})();
var statearr_31038_31068 = state_31025__$1;
(statearr_31038_31068[(2)] = null);

(statearr_31038_31068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (9))){
var inst_30985 = (state_31025[(8)]);
var inst_31001 = cljs.core.vec.call(null,inst_30985);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31025__$1,(11),out,inst_31001);
} else {
if((state_val_31026 === (5))){
var inst_30989 = (state_31025[(9)]);
var inst_30986 = (state_31025[(7)]);
var inst_30993 = (state_31025[(10)]);
var inst_30993__$1 = f.call(null,inst_30989);
var inst_30994 = cljs.core._EQ_.call(null,inst_30993__$1,inst_30986);
var inst_30995 = cljs.core.keyword_identical_QMARK_.call(null,inst_30986,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30996 = (inst_30994) || (inst_30995);
var state_31025__$1 = (function (){var statearr_31039 = state_31025;
(statearr_31039[(10)] = inst_30993__$1);

return statearr_31039;
})();
if(cljs.core.truth_(inst_30996)){
var statearr_31040_31069 = state_31025__$1;
(statearr_31040_31069[(1)] = (8));

} else {
var statearr_31041_31070 = state_31025__$1;
(statearr_31041_31070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (14))){
var inst_31018 = (state_31025[(2)]);
var inst_31019 = cljs.core.async.close_BANG_.call(null,out);
var state_31025__$1 = (function (){var statearr_31043 = state_31025;
(statearr_31043[(13)] = inst_31018);

return statearr_31043;
})();
var statearr_31044_31071 = state_31025__$1;
(statearr_31044_31071[(2)] = inst_31019);

(statearr_31044_31071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (10))){
var inst_31008 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31045_31072 = state_31025__$1;
(statearr_31045_31072[(2)] = inst_31008);

(statearr_31045_31072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (8))){
var inst_30989 = (state_31025[(9)]);
var inst_30985 = (state_31025[(8)]);
var inst_30993 = (state_31025[(10)]);
var inst_30998 = inst_30985.push(inst_30989);
var tmp31042 = inst_30985;
var inst_30985__$1 = tmp31042;
var inst_30986 = inst_30993;
var state_31025__$1 = (function (){var statearr_31046 = state_31025;
(statearr_31046[(7)] = inst_30986);

(statearr_31046[(8)] = inst_30985__$1);

(statearr_31046[(14)] = inst_30998);

return statearr_31046;
})();
var statearr_31047_31073 = state_31025__$1;
(statearr_31047_31073[(2)] = null);

(statearr_31047_31073[(1)] = (2));


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
});})(c__22145__auto___31059,out))
;
return ((function (switch__22080__auto__,c__22145__auto___31059,out){
return (function() {
var cljs$core$async$state_machine__22081__auto__ = null;
var cljs$core$async$state_machine__22081__auto____0 = (function (){
var statearr_31051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31051[(0)] = cljs$core$async$state_machine__22081__auto__);

(statearr_31051[(1)] = (1));

return statearr_31051;
});
var cljs$core$async$state_machine__22081__auto____1 = (function (state_31025){
while(true){
var ret_value__22082__auto__ = (function (){try{while(true){
var result__22083__auto__ = switch__22080__auto__.call(null,state_31025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22083__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22083__auto__;
}
break;
}
}catch (e31052){if((e31052 instanceof Object)){
var ex__22084__auto__ = e31052;
var statearr_31053_31074 = state_31025;
(statearr_31053_31074[(5)] = ex__22084__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31075 = state_31025;
state_31025 = G__31075;
continue;
} else {
return ret_value__22082__auto__;
}
break;
}
});
cljs$core$async$state_machine__22081__auto__ = function(state_31025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22081__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22081__auto____1.call(this,state_31025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22081__auto____0;
cljs$core$async$state_machine__22081__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22081__auto____1;
return cljs$core$async$state_machine__22081__auto__;
})()
;})(switch__22080__auto__,c__22145__auto___31059,out))
})();
var state__22147__auto__ = (function (){var statearr_31054 = f__22146__auto__.call(null);
(statearr_31054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22145__auto___31059);

return statearr_31054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22147__auto__);
});})(c__22145__auto___31059,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441303755733