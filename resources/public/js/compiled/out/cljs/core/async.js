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
if(typeof cljs.core.async.t_cljs$core$async27060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27060 = (function (fn_handler,f,meta27061){
this.fn_handler = fn_handler;
this.f = f;
this.meta27061 = meta27061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27062,meta27061__$1){
var self__ = this;
var _27062__$1 = this;
return (new cljs.core.async.t_cljs$core$async27060(self__.fn_handler,self__.f,meta27061__$1));
});

cljs.core.async.t_cljs$core$async27060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27062){
var self__ = this;
var _27062__$1 = this;
return self__.meta27061;
});

cljs.core.async.t_cljs$core$async27060.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27061","meta27061",-952143545,null)], null);
});

cljs.core.async.t_cljs$core$async27060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27060";

cljs.core.async.t_cljs$core$async27060.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async27060");
});

cljs.core.async.__GT_t_cljs$core$async27060 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27060(fn_handler__$1,f__$1,meta27061){
return (new cljs.core.async.t_cljs$core$async27060(fn_handler__$1,f__$1,meta27061));
});

}

return (new cljs.core.async.t_cljs$core$async27060(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args27065 = [];
var len__17575__auto___27068 = arguments.length;
var i__17576__auto___27069 = (0);
while(true){
if((i__17576__auto___27069 < len__17575__auto___27068)){
args27065.push((arguments[i__17576__auto___27069]));

var G__27070 = (i__17576__auto___27069 + (1));
i__17576__auto___27069 = G__27070;
continue;
} else {
}
break;
}

var G__27067 = args27065.length;
switch (G__27067) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27065.length)].join('')));

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
var args27072 = [];
var len__17575__auto___27075 = arguments.length;
var i__17576__auto___27076 = (0);
while(true){
if((i__17576__auto___27076 < len__17575__auto___27075)){
args27072.push((arguments[i__17576__auto___27076]));

var G__27077 = (i__17576__auto___27076 + (1));
i__17576__auto___27076 = G__27077;
continue;
} else {
}
break;
}

var G__27074 = args27072.length;
switch (G__27074) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27072.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27079 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27079);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27079,ret){
return (function (){
return fn1.call(null,val_27079);
});})(val_27079,ret))
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
var args27080 = [];
var len__17575__auto___27083 = arguments.length;
var i__17576__auto___27084 = (0);
while(true){
if((i__17576__auto___27084 < len__17575__auto___27083)){
args27080.push((arguments[i__17576__auto___27084]));

var G__27085 = (i__17576__auto___27084 + (1));
i__17576__auto___27084 = G__27085;
continue;
} else {
}
break;
}

var G__27082 = args27080.length;
switch (G__27082) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27080.length)].join('')));

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
var n__17420__auto___27087 = n;
var x_27088 = (0);
while(true){
if((x_27088 < n__17420__auto___27087)){
(a[x_27088] = (0));

var G__27089 = (x_27088 + (1));
x_27088 = G__27089;
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

var G__27090 = (i + (1));
i = G__27090;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27094 = (function (alt_flag,flag,meta27095){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27095 = meta27095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27096,meta27095__$1){
var self__ = this;
var _27096__$1 = this;
return (new cljs.core.async.t_cljs$core$async27094(self__.alt_flag,self__.flag,meta27095__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27096){
var self__ = this;
var _27096__$1 = this;
return self__.meta27095;
});})(flag))
;

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27094.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27095","meta27095",-407470526,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27094";

cljs.core.async.t_cljs$core$async27094.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async27094");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27094 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27094(alt_flag__$1,flag__$1,meta27095){
return (new cljs.core.async.t_cljs$core$async27094(alt_flag__$1,flag__$1,meta27095));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27094(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27100 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27100 = (function (alt_handler,flag,cb,meta27101){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27101 = meta27101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27102,meta27101__$1){
var self__ = this;
var _27102__$1 = this;
return (new cljs.core.async.t_cljs$core$async27100(self__.alt_handler,self__.flag,self__.cb,meta27101__$1));
});

cljs.core.async.t_cljs$core$async27100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27102){
var self__ = this;
var _27102__$1 = this;
return self__.meta27101;
});

cljs.core.async.t_cljs$core$async27100.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27101","meta27101",588325348,null)], null);
});

cljs.core.async.t_cljs$core$async27100.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27100";

cljs.core.async.t_cljs$core$async27100.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async27100");
});

cljs.core.async.__GT_t_cljs$core$async27100 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27100(alt_handler__$1,flag__$1,cb__$1,meta27101){
return (new cljs.core.async.t_cljs$core$async27100(alt_handler__$1,flag__$1,cb__$1,meta27101));
});

}

return (new cljs.core.async.t_cljs$core$async27100(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27103_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27103_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27104_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27104_SHARP_,port], null));
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
var G__27105 = (i + (1));
i = G__27105;
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
var len__17575__auto___27111 = arguments.length;
var i__17576__auto___27112 = (0);
while(true){
if((i__17576__auto___27112 < len__17575__auto___27111)){
args__17582__auto__.push((arguments[i__17576__auto___27112]));

var G__27113 = (i__17576__auto___27112 + (1));
i__17576__auto___27112 = G__27113;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27108){
var map__27109 = p__27108;
var map__27109__$1 = ((((!((map__27109 == null)))?((((map__27109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27109):map__27109);
var opts = map__27109__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27106){
var G__27107 = cljs.core.first.call(null,seq27106);
var seq27106__$1 = cljs.core.next.call(null,seq27106);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27107,seq27106__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27114 = [];
var len__17575__auto___27164 = arguments.length;
var i__17576__auto___27165 = (0);
while(true){
if((i__17576__auto___27165 < len__17575__auto___27164)){
args27114.push((arguments[i__17576__auto___27165]));

var G__27166 = (i__17576__auto___27165 + (1));
i__17576__auto___27165 = G__27166;
continue;
} else {
}
break;
}

var G__27116 = args27114.length;
switch (G__27116) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27114.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20309__auto___27168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___27168){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___27168){
return (function (state_27140){
var state_val_27141 = (state_27140[(1)]);
if((state_val_27141 === (7))){
var inst_27136 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27142_27169 = state_27140__$1;
(statearr_27142_27169[(2)] = inst_27136);

(statearr_27142_27169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (1))){
var state_27140__$1 = state_27140;
var statearr_27143_27170 = state_27140__$1;
(statearr_27143_27170[(2)] = null);

(statearr_27143_27170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (4))){
var inst_27119 = (state_27140[(7)]);
var inst_27119__$1 = (state_27140[(2)]);
var inst_27120 = (inst_27119__$1 == null);
var state_27140__$1 = (function (){var statearr_27144 = state_27140;
(statearr_27144[(7)] = inst_27119__$1);

return statearr_27144;
})();
if(cljs.core.truth_(inst_27120)){
var statearr_27145_27171 = state_27140__$1;
(statearr_27145_27171[(1)] = (5));

} else {
var statearr_27146_27172 = state_27140__$1;
(statearr_27146_27172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (13))){
var state_27140__$1 = state_27140;
var statearr_27147_27173 = state_27140__$1;
(statearr_27147_27173[(2)] = null);

(statearr_27147_27173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (6))){
var inst_27119 = (state_27140[(7)]);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27140__$1,(11),to,inst_27119);
} else {
if((state_val_27141 === (3))){
var inst_27138 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27140__$1,inst_27138);
} else {
if((state_val_27141 === (12))){
var state_27140__$1 = state_27140;
var statearr_27148_27174 = state_27140__$1;
(statearr_27148_27174[(2)] = null);

(statearr_27148_27174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (2))){
var state_27140__$1 = state_27140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27140__$1,(4),from);
} else {
if((state_val_27141 === (11))){
var inst_27129 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
if(cljs.core.truth_(inst_27129)){
var statearr_27149_27175 = state_27140__$1;
(statearr_27149_27175[(1)] = (12));

} else {
var statearr_27150_27176 = state_27140__$1;
(statearr_27150_27176[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (9))){
var state_27140__$1 = state_27140;
var statearr_27151_27177 = state_27140__$1;
(statearr_27151_27177[(2)] = null);

(statearr_27151_27177[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (5))){
var state_27140__$1 = state_27140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27152_27178 = state_27140__$1;
(statearr_27152_27178[(1)] = (8));

} else {
var statearr_27153_27179 = state_27140__$1;
(statearr_27153_27179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (14))){
var inst_27134 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27154_27180 = state_27140__$1;
(statearr_27154_27180[(2)] = inst_27134);

(statearr_27154_27180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (10))){
var inst_27126 = (state_27140[(2)]);
var state_27140__$1 = state_27140;
var statearr_27155_27181 = state_27140__$1;
(statearr_27155_27181[(2)] = inst_27126);

(statearr_27155_27181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27141 === (8))){
var inst_27123 = cljs.core.async.close_BANG_.call(null,to);
var state_27140__$1 = state_27140;
var statearr_27156_27182 = state_27140__$1;
(statearr_27156_27182[(2)] = inst_27123);

(statearr_27156_27182[(1)] = (10));


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
});})(c__20309__auto___27168))
;
return ((function (switch__20244__auto__,c__20309__auto___27168){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_27160 = [null,null,null,null,null,null,null,null];
(statearr_27160[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_27160[(1)] = (1));

return statearr_27160;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_27140){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27161){if((e27161 instanceof Object)){
var ex__20248__auto__ = e27161;
var statearr_27162_27183 = state_27140;
(statearr_27162_27183[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27184 = state_27140;
state_27140 = G__27184;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_27140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_27140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___27168))
})();
var state__20311__auto__ = (function (){var statearr_27163 = f__20310__auto__.call(null);
(statearr_27163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___27168);

return statearr_27163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___27168))
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
return (function (p__27368){
var vec__27369 = p__27368;
var v = cljs.core.nth.call(null,vec__27369,(0),null);
var p = cljs.core.nth.call(null,vec__27369,(1),null);
var job = vec__27369;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20309__auto___27551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___27551,res,vec__27369,v,p,job,jobs,results){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___27551,res,vec__27369,v,p,job,jobs,results){
return (function (state_27374){
var state_val_27375 = (state_27374[(1)]);
if((state_val_27375 === (1))){
var state_27374__$1 = state_27374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27374__$1,(2),res,v);
} else {
if((state_val_27375 === (2))){
var inst_27371 = (state_27374[(2)]);
var inst_27372 = cljs.core.async.close_BANG_.call(null,res);
var state_27374__$1 = (function (){var statearr_27376 = state_27374;
(statearr_27376[(7)] = inst_27371);

return statearr_27376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27374__$1,inst_27372);
} else {
return null;
}
}
});})(c__20309__auto___27551,res,vec__27369,v,p,job,jobs,results))
;
return ((function (switch__20244__auto__,c__20309__auto___27551,res,vec__27369,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0 = (function (){
var statearr_27380 = [null,null,null,null,null,null,null,null];
(statearr_27380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__);

(statearr_27380[(1)] = (1));

return statearr_27380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1 = (function (state_27374){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27381){if((e27381 instanceof Object)){
var ex__20248__auto__ = e27381;
var statearr_27382_27552 = state_27374;
(statearr_27382_27552[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27553 = state_27374;
state_27374 = G__27553;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = function(state_27374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1.call(this,state_27374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___27551,res,vec__27369,v,p,job,jobs,results))
})();
var state__20311__auto__ = (function (){var statearr_27383 = f__20310__auto__.call(null);
(statearr_27383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___27551);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___27551,res,vec__27369,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27384){
var vec__27385 = p__27384;
var v = cljs.core.nth.call(null,vec__27385,(0),null);
var p = cljs.core.nth.call(null,vec__27385,(1),null);
var job = vec__27385;
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
var n__17420__auto___27554 = n;
var __27555 = (0);
while(true){
if((__27555 < n__17420__auto___27554)){
var G__27386_27556 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27386_27556) {
case "compute":
var c__20309__auto___27558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27555,c__20309__auto___27558,G__27386_27556,n__17420__auto___27554,jobs,results,process,async){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (__27555,c__20309__auto___27558,G__27386_27556,n__17420__auto___27554,jobs,results,process,async){
return (function (state_27399){
var state_val_27400 = (state_27399[(1)]);
if((state_val_27400 === (1))){
var state_27399__$1 = state_27399;
var statearr_27401_27559 = state_27399__$1;
(statearr_27401_27559[(2)] = null);

(statearr_27401_27559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (2))){
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27399__$1,(4),jobs);
} else {
if((state_val_27400 === (3))){
var inst_27397 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27399__$1,inst_27397);
} else {
if((state_val_27400 === (4))){
var inst_27389 = (state_27399[(2)]);
var inst_27390 = process.call(null,inst_27389);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27390)){
var statearr_27402_27560 = state_27399__$1;
(statearr_27402_27560[(1)] = (5));

} else {
var statearr_27403_27561 = state_27399__$1;
(statearr_27403_27561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (5))){
var state_27399__$1 = state_27399;
var statearr_27404_27562 = state_27399__$1;
(statearr_27404_27562[(2)] = null);

(statearr_27404_27562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (6))){
var state_27399__$1 = state_27399;
var statearr_27405_27563 = state_27399__$1;
(statearr_27405_27563[(2)] = null);

(statearr_27405_27563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (7))){
var inst_27395 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27406_27564 = state_27399__$1;
(statearr_27406_27564[(2)] = inst_27395);

(statearr_27406_27564[(1)] = (3));


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
});})(__27555,c__20309__auto___27558,G__27386_27556,n__17420__auto___27554,jobs,results,process,async))
;
return ((function (__27555,switch__20244__auto__,c__20309__auto___27558,G__27386_27556,n__17420__auto___27554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0 = (function (){
var statearr_27410 = [null,null,null,null,null,null,null];
(statearr_27410[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__);

(statearr_27410[(1)] = (1));

return statearr_27410;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1 = (function (state_27399){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27411){if((e27411 instanceof Object)){
var ex__20248__auto__ = e27411;
var statearr_27412_27565 = state_27399;
(statearr_27412_27565[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27566 = state_27399;
state_27399 = G__27566;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = function(state_27399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1.call(this,state_27399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__;
})()
;})(__27555,switch__20244__auto__,c__20309__auto___27558,G__27386_27556,n__17420__auto___27554,jobs,results,process,async))
})();
var state__20311__auto__ = (function (){var statearr_27413 = f__20310__auto__.call(null);
(statearr_27413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___27558);

return statearr_27413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(__27555,c__20309__auto___27558,G__27386_27556,n__17420__auto___27554,jobs,results,process,async))
);


break;
case "async":
var c__20309__auto___27567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27555,c__20309__auto___27567,G__27386_27556,n__17420__auto___27554,jobs,results,process,async){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (__27555,c__20309__auto___27567,G__27386_27556,n__17420__auto___27554,jobs,results,process,async){
return (function (state_27426){
var state_val_27427 = (state_27426[(1)]);
if((state_val_27427 === (1))){
var state_27426__$1 = state_27426;
var statearr_27428_27568 = state_27426__$1;
(statearr_27428_27568[(2)] = null);

(statearr_27428_27568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (2))){
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27426__$1,(4),jobs);
} else {
if((state_val_27427 === (3))){
var inst_27424 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27426__$1,inst_27424);
} else {
if((state_val_27427 === (4))){
var inst_27416 = (state_27426[(2)]);
var inst_27417 = async.call(null,inst_27416);
var state_27426__$1 = state_27426;
if(cljs.core.truth_(inst_27417)){
var statearr_27429_27569 = state_27426__$1;
(statearr_27429_27569[(1)] = (5));

} else {
var statearr_27430_27570 = state_27426__$1;
(statearr_27430_27570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (5))){
var state_27426__$1 = state_27426;
var statearr_27431_27571 = state_27426__$1;
(statearr_27431_27571[(2)] = null);

(statearr_27431_27571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (6))){
var state_27426__$1 = state_27426;
var statearr_27432_27572 = state_27426__$1;
(statearr_27432_27572[(2)] = null);

(statearr_27432_27572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27427 === (7))){
var inst_27422 = (state_27426[(2)]);
var state_27426__$1 = state_27426;
var statearr_27433_27573 = state_27426__$1;
(statearr_27433_27573[(2)] = inst_27422);

(statearr_27433_27573[(1)] = (3));


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
});})(__27555,c__20309__auto___27567,G__27386_27556,n__17420__auto___27554,jobs,results,process,async))
;
return ((function (__27555,switch__20244__auto__,c__20309__auto___27567,G__27386_27556,n__17420__auto___27554,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0 = (function (){
var statearr_27437 = [null,null,null,null,null,null,null];
(statearr_27437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__);

(statearr_27437[(1)] = (1));

return statearr_27437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1 = (function (state_27426){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27438){if((e27438 instanceof Object)){
var ex__20248__auto__ = e27438;
var statearr_27439_27574 = state_27426;
(statearr_27439_27574[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27575 = state_27426;
state_27426 = G__27575;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = function(state_27426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1.call(this,state_27426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__;
})()
;})(__27555,switch__20244__auto__,c__20309__auto___27567,G__27386_27556,n__17420__auto___27554,jobs,results,process,async))
})();
var state__20311__auto__ = (function (){var statearr_27440 = f__20310__auto__.call(null);
(statearr_27440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___27567);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(__27555,c__20309__auto___27567,G__27386_27556,n__17420__auto___27554,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27576 = (__27555 + (1));
__27555 = G__27576;
continue;
} else {
}
break;
}

var c__20309__auto___27577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___27577,jobs,results,process,async){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___27577,jobs,results,process,async){
return (function (state_27462){
var state_val_27463 = (state_27462[(1)]);
if((state_val_27463 === (1))){
var state_27462__$1 = state_27462;
var statearr_27464_27578 = state_27462__$1;
(statearr_27464_27578[(2)] = null);

(statearr_27464_27578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (2))){
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27462__$1,(4),from);
} else {
if((state_val_27463 === (3))){
var inst_27460 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27462__$1,inst_27460);
} else {
if((state_val_27463 === (4))){
var inst_27443 = (state_27462[(7)]);
var inst_27443__$1 = (state_27462[(2)]);
var inst_27444 = (inst_27443__$1 == null);
var state_27462__$1 = (function (){var statearr_27465 = state_27462;
(statearr_27465[(7)] = inst_27443__$1);

return statearr_27465;
})();
if(cljs.core.truth_(inst_27444)){
var statearr_27466_27579 = state_27462__$1;
(statearr_27466_27579[(1)] = (5));

} else {
var statearr_27467_27580 = state_27462__$1;
(statearr_27467_27580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (5))){
var inst_27446 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27462__$1 = state_27462;
var statearr_27468_27581 = state_27462__$1;
(statearr_27468_27581[(2)] = inst_27446);

(statearr_27468_27581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (6))){
var inst_27443 = (state_27462[(7)]);
var inst_27448 = (state_27462[(8)]);
var inst_27448__$1 = cljs.core.async.chan.call(null,(1));
var inst_27449 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27450 = [inst_27443,inst_27448__$1];
var inst_27451 = (new cljs.core.PersistentVector(null,2,(5),inst_27449,inst_27450,null));
var state_27462__$1 = (function (){var statearr_27469 = state_27462;
(statearr_27469[(8)] = inst_27448__$1);

return statearr_27469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27462__$1,(8),jobs,inst_27451);
} else {
if((state_val_27463 === (7))){
var inst_27458 = (state_27462[(2)]);
var state_27462__$1 = state_27462;
var statearr_27470_27582 = state_27462__$1;
(statearr_27470_27582[(2)] = inst_27458);

(statearr_27470_27582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27463 === (8))){
var inst_27448 = (state_27462[(8)]);
var inst_27453 = (state_27462[(2)]);
var state_27462__$1 = (function (){var statearr_27471 = state_27462;
(statearr_27471[(9)] = inst_27453);

return statearr_27471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27462__$1,(9),results,inst_27448);
} else {
if((state_val_27463 === (9))){
var inst_27455 = (state_27462[(2)]);
var state_27462__$1 = (function (){var statearr_27472 = state_27462;
(statearr_27472[(10)] = inst_27455);

return statearr_27472;
})();
var statearr_27473_27583 = state_27462__$1;
(statearr_27473_27583[(2)] = null);

(statearr_27473_27583[(1)] = (2));


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
});})(c__20309__auto___27577,jobs,results,process,async))
;
return ((function (switch__20244__auto__,c__20309__auto___27577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0 = (function (){
var statearr_27477 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__);

(statearr_27477[(1)] = (1));

return statearr_27477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1 = (function (state_27462){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27478){if((e27478 instanceof Object)){
var ex__20248__auto__ = e27478;
var statearr_27479_27584 = state_27462;
(statearr_27479_27584[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27585 = state_27462;
state_27462 = G__27585;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = function(state_27462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1.call(this,state_27462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___27577,jobs,results,process,async))
})();
var state__20311__auto__ = (function (){var statearr_27480 = f__20310__auto__.call(null);
(statearr_27480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___27577);

return statearr_27480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___27577,jobs,results,process,async))
);


var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__,jobs,results,process,async){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__,jobs,results,process,async){
return (function (state_27518){
var state_val_27519 = (state_27518[(1)]);
if((state_val_27519 === (7))){
var inst_27514 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27520_27586 = state_27518__$1;
(statearr_27520_27586[(2)] = inst_27514);

(statearr_27520_27586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (20))){
var state_27518__$1 = state_27518;
var statearr_27521_27587 = state_27518__$1;
(statearr_27521_27587[(2)] = null);

(statearr_27521_27587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (1))){
var state_27518__$1 = state_27518;
var statearr_27522_27588 = state_27518__$1;
(statearr_27522_27588[(2)] = null);

(statearr_27522_27588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (4))){
var inst_27483 = (state_27518[(7)]);
var inst_27483__$1 = (state_27518[(2)]);
var inst_27484 = (inst_27483__$1 == null);
var state_27518__$1 = (function (){var statearr_27523 = state_27518;
(statearr_27523[(7)] = inst_27483__$1);

return statearr_27523;
})();
if(cljs.core.truth_(inst_27484)){
var statearr_27524_27589 = state_27518__$1;
(statearr_27524_27589[(1)] = (5));

} else {
var statearr_27525_27590 = state_27518__$1;
(statearr_27525_27590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (15))){
var inst_27496 = (state_27518[(8)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27518__$1,(18),to,inst_27496);
} else {
if((state_val_27519 === (21))){
var inst_27509 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27526_27591 = state_27518__$1;
(statearr_27526_27591[(2)] = inst_27509);

(statearr_27526_27591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (13))){
var inst_27511 = (state_27518[(2)]);
var state_27518__$1 = (function (){var statearr_27527 = state_27518;
(statearr_27527[(9)] = inst_27511);

return statearr_27527;
})();
var statearr_27528_27592 = state_27518__$1;
(statearr_27528_27592[(2)] = null);

(statearr_27528_27592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (6))){
var inst_27483 = (state_27518[(7)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27518__$1,(11),inst_27483);
} else {
if((state_val_27519 === (17))){
var inst_27504 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
if(cljs.core.truth_(inst_27504)){
var statearr_27529_27593 = state_27518__$1;
(statearr_27529_27593[(1)] = (19));

} else {
var statearr_27530_27594 = state_27518__$1;
(statearr_27530_27594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (3))){
var inst_27516 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27518__$1,inst_27516);
} else {
if((state_val_27519 === (12))){
var inst_27493 = (state_27518[(10)]);
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27518__$1,(14),inst_27493);
} else {
if((state_val_27519 === (2))){
var state_27518__$1 = state_27518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27518__$1,(4),results);
} else {
if((state_val_27519 === (19))){
var state_27518__$1 = state_27518;
var statearr_27531_27595 = state_27518__$1;
(statearr_27531_27595[(2)] = null);

(statearr_27531_27595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (11))){
var inst_27493 = (state_27518[(2)]);
var state_27518__$1 = (function (){var statearr_27532 = state_27518;
(statearr_27532[(10)] = inst_27493);

return statearr_27532;
})();
var statearr_27533_27596 = state_27518__$1;
(statearr_27533_27596[(2)] = null);

(statearr_27533_27596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (9))){
var state_27518__$1 = state_27518;
var statearr_27534_27597 = state_27518__$1;
(statearr_27534_27597[(2)] = null);

(statearr_27534_27597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (5))){
var state_27518__$1 = state_27518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27535_27598 = state_27518__$1;
(statearr_27535_27598[(1)] = (8));

} else {
var statearr_27536_27599 = state_27518__$1;
(statearr_27536_27599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (14))){
var inst_27498 = (state_27518[(11)]);
var inst_27496 = (state_27518[(8)]);
var inst_27496__$1 = (state_27518[(2)]);
var inst_27497 = (inst_27496__$1 == null);
var inst_27498__$1 = cljs.core.not.call(null,inst_27497);
var state_27518__$1 = (function (){var statearr_27537 = state_27518;
(statearr_27537[(11)] = inst_27498__$1);

(statearr_27537[(8)] = inst_27496__$1);

return statearr_27537;
})();
if(inst_27498__$1){
var statearr_27538_27600 = state_27518__$1;
(statearr_27538_27600[(1)] = (15));

} else {
var statearr_27539_27601 = state_27518__$1;
(statearr_27539_27601[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (16))){
var inst_27498 = (state_27518[(11)]);
var state_27518__$1 = state_27518;
var statearr_27540_27602 = state_27518__$1;
(statearr_27540_27602[(2)] = inst_27498);

(statearr_27540_27602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (10))){
var inst_27490 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27541_27603 = state_27518__$1;
(statearr_27541_27603[(2)] = inst_27490);

(statearr_27541_27603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (18))){
var inst_27501 = (state_27518[(2)]);
var state_27518__$1 = state_27518;
var statearr_27542_27604 = state_27518__$1;
(statearr_27542_27604[(2)] = inst_27501);

(statearr_27542_27604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27519 === (8))){
var inst_27487 = cljs.core.async.close_BANG_.call(null,to);
var state_27518__$1 = state_27518;
var statearr_27543_27605 = state_27518__$1;
(statearr_27543_27605[(2)] = inst_27487);

(statearr_27543_27605[(1)] = (10));


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
});})(c__20309__auto__,jobs,results,process,async))
;
return ((function (switch__20244__auto__,c__20309__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0 = (function (){
var statearr_27547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__);

(statearr_27547[(1)] = (1));

return statearr_27547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1 = (function (state_27518){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27548){if((e27548 instanceof Object)){
var ex__20248__auto__ = e27548;
var statearr_27549_27606 = state_27518;
(statearr_27549_27606[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27607 = state_27518;
state_27518 = G__27607;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__ = function(state_27518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1.call(this,state_27518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20245__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__,jobs,results,process,async))
})();
var state__20311__auto__ = (function (){var statearr_27550 = f__20310__auto__.call(null);
(statearr_27550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_27550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__,jobs,results,process,async))
);

return c__20309__auto__;
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
var args27608 = [];
var len__17575__auto___27611 = arguments.length;
var i__17576__auto___27612 = (0);
while(true){
if((i__17576__auto___27612 < len__17575__auto___27611)){
args27608.push((arguments[i__17576__auto___27612]));

var G__27613 = (i__17576__auto___27612 + (1));
i__17576__auto___27612 = G__27613;
continue;
} else {
}
break;
}

var G__27610 = args27608.length;
switch (G__27610) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27608.length)].join('')));

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
var args27615 = [];
var len__17575__auto___27618 = arguments.length;
var i__17576__auto___27619 = (0);
while(true){
if((i__17576__auto___27619 < len__17575__auto___27618)){
args27615.push((arguments[i__17576__auto___27619]));

var G__27620 = (i__17576__auto___27619 + (1));
i__17576__auto___27619 = G__27620;
continue;
} else {
}
break;
}

var G__27617 = args27615.length;
switch (G__27617) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27615.length)].join('')));

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
var args27622 = [];
var len__17575__auto___27675 = arguments.length;
var i__17576__auto___27676 = (0);
while(true){
if((i__17576__auto___27676 < len__17575__auto___27675)){
args27622.push((arguments[i__17576__auto___27676]));

var G__27677 = (i__17576__auto___27676 + (1));
i__17576__auto___27676 = G__27677;
continue;
} else {
}
break;
}

var G__27624 = args27622.length;
switch (G__27624) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27622.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20309__auto___27679 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___27679,tc,fc){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___27679,tc,fc){
return (function (state_27650){
var state_val_27651 = (state_27650[(1)]);
if((state_val_27651 === (7))){
var inst_27646 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27652_27680 = state_27650__$1;
(statearr_27652_27680[(2)] = inst_27646);

(statearr_27652_27680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (1))){
var state_27650__$1 = state_27650;
var statearr_27653_27681 = state_27650__$1;
(statearr_27653_27681[(2)] = null);

(statearr_27653_27681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (4))){
var inst_27627 = (state_27650[(7)]);
var inst_27627__$1 = (state_27650[(2)]);
var inst_27628 = (inst_27627__$1 == null);
var state_27650__$1 = (function (){var statearr_27654 = state_27650;
(statearr_27654[(7)] = inst_27627__$1);

return statearr_27654;
})();
if(cljs.core.truth_(inst_27628)){
var statearr_27655_27682 = state_27650__$1;
(statearr_27655_27682[(1)] = (5));

} else {
var statearr_27656_27683 = state_27650__$1;
(statearr_27656_27683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (13))){
var state_27650__$1 = state_27650;
var statearr_27657_27684 = state_27650__$1;
(statearr_27657_27684[(2)] = null);

(statearr_27657_27684[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (6))){
var inst_27627 = (state_27650[(7)]);
var inst_27633 = p.call(null,inst_27627);
var state_27650__$1 = state_27650;
if(cljs.core.truth_(inst_27633)){
var statearr_27658_27685 = state_27650__$1;
(statearr_27658_27685[(1)] = (9));

} else {
var statearr_27659_27686 = state_27650__$1;
(statearr_27659_27686[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (3))){
var inst_27648 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27650__$1,inst_27648);
} else {
if((state_val_27651 === (12))){
var state_27650__$1 = state_27650;
var statearr_27660_27687 = state_27650__$1;
(statearr_27660_27687[(2)] = null);

(statearr_27660_27687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (2))){
var state_27650__$1 = state_27650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27650__$1,(4),ch);
} else {
if((state_val_27651 === (11))){
var inst_27627 = (state_27650[(7)]);
var inst_27637 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27650__$1,(8),inst_27637,inst_27627);
} else {
if((state_val_27651 === (9))){
var state_27650__$1 = state_27650;
var statearr_27661_27688 = state_27650__$1;
(statearr_27661_27688[(2)] = tc);

(statearr_27661_27688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (5))){
var inst_27630 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27631 = cljs.core.async.close_BANG_.call(null,fc);
var state_27650__$1 = (function (){var statearr_27662 = state_27650;
(statearr_27662[(8)] = inst_27630);

return statearr_27662;
})();
var statearr_27663_27689 = state_27650__$1;
(statearr_27663_27689[(2)] = inst_27631);

(statearr_27663_27689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (14))){
var inst_27644 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
var statearr_27664_27690 = state_27650__$1;
(statearr_27664_27690[(2)] = inst_27644);

(statearr_27664_27690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (10))){
var state_27650__$1 = state_27650;
var statearr_27665_27691 = state_27650__$1;
(statearr_27665_27691[(2)] = fc);

(statearr_27665_27691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27651 === (8))){
var inst_27639 = (state_27650[(2)]);
var state_27650__$1 = state_27650;
if(cljs.core.truth_(inst_27639)){
var statearr_27666_27692 = state_27650__$1;
(statearr_27666_27692[(1)] = (12));

} else {
var statearr_27667_27693 = state_27650__$1;
(statearr_27667_27693[(1)] = (13));

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
});})(c__20309__auto___27679,tc,fc))
;
return ((function (switch__20244__auto__,c__20309__auto___27679,tc,fc){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_27671 = [null,null,null,null,null,null,null,null,null];
(statearr_27671[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_27671[(1)] = (1));

return statearr_27671;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_27650){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27672){if((e27672 instanceof Object)){
var ex__20248__auto__ = e27672;
var statearr_27673_27694 = state_27650;
(statearr_27673_27694[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27695 = state_27650;
state_27650 = G__27695;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_27650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_27650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___27679,tc,fc))
})();
var state__20311__auto__ = (function (){var statearr_27674 = f__20310__auto__.call(null);
(statearr_27674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___27679);

return statearr_27674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___27679,tc,fc))
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
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__){
return (function (state_27742){
var state_val_27743 = (state_27742[(1)]);
if((state_val_27743 === (1))){
var inst_27728 = init;
var state_27742__$1 = (function (){var statearr_27744 = state_27742;
(statearr_27744[(7)] = inst_27728);

return statearr_27744;
})();
var statearr_27745_27760 = state_27742__$1;
(statearr_27745_27760[(2)] = null);

(statearr_27745_27760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (2))){
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27742__$1,(4),ch);
} else {
if((state_val_27743 === (3))){
var inst_27740 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27742__$1,inst_27740);
} else {
if((state_val_27743 === (4))){
var inst_27731 = (state_27742[(8)]);
var inst_27731__$1 = (state_27742[(2)]);
var inst_27732 = (inst_27731__$1 == null);
var state_27742__$1 = (function (){var statearr_27746 = state_27742;
(statearr_27746[(8)] = inst_27731__$1);

return statearr_27746;
})();
if(cljs.core.truth_(inst_27732)){
var statearr_27747_27761 = state_27742__$1;
(statearr_27747_27761[(1)] = (5));

} else {
var statearr_27748_27762 = state_27742__$1;
(statearr_27748_27762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (5))){
var inst_27728 = (state_27742[(7)]);
var state_27742__$1 = state_27742;
var statearr_27749_27763 = state_27742__$1;
(statearr_27749_27763[(2)] = inst_27728);

(statearr_27749_27763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (6))){
var inst_27731 = (state_27742[(8)]);
var inst_27728 = (state_27742[(7)]);
var inst_27735 = f.call(null,inst_27728,inst_27731);
var inst_27728__$1 = inst_27735;
var state_27742__$1 = (function (){var statearr_27750 = state_27742;
(statearr_27750[(7)] = inst_27728__$1);

return statearr_27750;
})();
var statearr_27751_27764 = state_27742__$1;
(statearr_27751_27764[(2)] = null);

(statearr_27751_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27743 === (7))){
var inst_27738 = (state_27742[(2)]);
var state_27742__$1 = state_27742;
var statearr_27752_27765 = state_27742__$1;
(statearr_27752_27765[(2)] = inst_27738);

(statearr_27752_27765[(1)] = (3));


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
});})(c__20309__auto__))
;
return ((function (switch__20244__auto__,c__20309__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20245__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20245__auto____0 = (function (){
var statearr_27756 = [null,null,null,null,null,null,null,null,null];
(statearr_27756[(0)] = cljs$core$async$reduce_$_state_machine__20245__auto__);

(statearr_27756[(1)] = (1));

return statearr_27756;
});
var cljs$core$async$reduce_$_state_machine__20245__auto____1 = (function (state_27742){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27757){if((e27757 instanceof Object)){
var ex__20248__auto__ = e27757;
var statearr_27758_27766 = state_27742;
(statearr_27758_27766[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27767 = state_27742;
state_27742 = G__27767;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20245__auto__ = function(state_27742){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20245__auto____1.call(this,state_27742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20245__auto____0;
cljs$core$async$reduce_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20245__auto____1;
return cljs$core$async$reduce_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__))
})();
var state__20311__auto__ = (function (){var statearr_27759 = f__20310__auto__.call(null);
(statearr_27759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_27759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__))
);

return c__20309__auto__;
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
var args27768 = [];
var len__17575__auto___27820 = arguments.length;
var i__17576__auto___27821 = (0);
while(true){
if((i__17576__auto___27821 < len__17575__auto___27820)){
args27768.push((arguments[i__17576__auto___27821]));

var G__27822 = (i__17576__auto___27821 + (1));
i__17576__auto___27821 = G__27822;
continue;
} else {
}
break;
}

var G__27770 = args27768.length;
switch (G__27770) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27768.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__){
return (function (state_27795){
var state_val_27796 = (state_27795[(1)]);
if((state_val_27796 === (7))){
var inst_27777 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27797_27824 = state_27795__$1;
(statearr_27797_27824[(2)] = inst_27777);

(statearr_27797_27824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (1))){
var inst_27771 = cljs.core.seq.call(null,coll);
var inst_27772 = inst_27771;
var state_27795__$1 = (function (){var statearr_27798 = state_27795;
(statearr_27798[(7)] = inst_27772);

return statearr_27798;
})();
var statearr_27799_27825 = state_27795__$1;
(statearr_27799_27825[(2)] = null);

(statearr_27799_27825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (4))){
var inst_27772 = (state_27795[(7)]);
var inst_27775 = cljs.core.first.call(null,inst_27772);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27795__$1,(7),ch,inst_27775);
} else {
if((state_val_27796 === (13))){
var inst_27789 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27800_27826 = state_27795__$1;
(statearr_27800_27826[(2)] = inst_27789);

(statearr_27800_27826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (6))){
var inst_27780 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
if(cljs.core.truth_(inst_27780)){
var statearr_27801_27827 = state_27795__$1;
(statearr_27801_27827[(1)] = (8));

} else {
var statearr_27802_27828 = state_27795__$1;
(statearr_27802_27828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (3))){
var inst_27793 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27795__$1,inst_27793);
} else {
if((state_val_27796 === (12))){
var state_27795__$1 = state_27795;
var statearr_27803_27829 = state_27795__$1;
(statearr_27803_27829[(2)] = null);

(statearr_27803_27829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (2))){
var inst_27772 = (state_27795[(7)]);
var state_27795__$1 = state_27795;
if(cljs.core.truth_(inst_27772)){
var statearr_27804_27830 = state_27795__$1;
(statearr_27804_27830[(1)] = (4));

} else {
var statearr_27805_27831 = state_27795__$1;
(statearr_27805_27831[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (11))){
var inst_27786 = cljs.core.async.close_BANG_.call(null,ch);
var state_27795__$1 = state_27795;
var statearr_27806_27832 = state_27795__$1;
(statearr_27806_27832[(2)] = inst_27786);

(statearr_27806_27832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (9))){
var state_27795__$1 = state_27795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27807_27833 = state_27795__$1;
(statearr_27807_27833[(1)] = (11));

} else {
var statearr_27808_27834 = state_27795__$1;
(statearr_27808_27834[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (5))){
var inst_27772 = (state_27795[(7)]);
var state_27795__$1 = state_27795;
var statearr_27809_27835 = state_27795__$1;
(statearr_27809_27835[(2)] = inst_27772);

(statearr_27809_27835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (10))){
var inst_27791 = (state_27795[(2)]);
var state_27795__$1 = state_27795;
var statearr_27810_27836 = state_27795__$1;
(statearr_27810_27836[(2)] = inst_27791);

(statearr_27810_27836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27796 === (8))){
var inst_27772 = (state_27795[(7)]);
var inst_27782 = cljs.core.next.call(null,inst_27772);
var inst_27772__$1 = inst_27782;
var state_27795__$1 = (function (){var statearr_27811 = state_27795;
(statearr_27811[(7)] = inst_27772__$1);

return statearr_27811;
})();
var statearr_27812_27837 = state_27795__$1;
(statearr_27812_27837[(2)] = null);

(statearr_27812_27837[(1)] = (2));


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
});})(c__20309__auto__))
;
return ((function (switch__20244__auto__,c__20309__auto__){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_27816 = [null,null,null,null,null,null,null,null];
(statearr_27816[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_27816[(1)] = (1));

return statearr_27816;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_27795){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_27795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e27817){if((e27817 instanceof Object)){
var ex__20248__auto__ = e27817;
var statearr_27818_27838 = state_27795;
(statearr_27818_27838[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27839 = state_27795;
state_27795 = G__27839;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__))
})();
var state__20311__auto__ = (function (){var statearr_27819 = f__20310__auto__.call(null);
(statearr_27819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_27819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__))
);

return c__20309__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async28061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28061 = (function (mult,ch,cs,meta28062){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28062 = meta28062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28063,meta28062__$1){
var self__ = this;
var _28063__$1 = this;
return (new cljs.core.async.t_cljs$core$async28061(self__.mult,self__.ch,self__.cs,meta28062__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28063){
var self__ = this;
var _28063__$1 = this;
return self__.meta28062;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28062","meta28062",2037030123,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28061";

cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async28061");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28061 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28061(mult__$1,ch__$1,cs__$1,meta28062){
return (new cljs.core.async.t_cljs$core$async28061(mult__$1,ch__$1,cs__$1,meta28062));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28061(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20309__auto___28282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___28282,cs,m,dchan,dctr,done){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___28282,cs,m,dchan,dctr,done){
return (function (state_28194){
var state_val_28195 = (state_28194[(1)]);
if((state_val_28195 === (7))){
var inst_28190 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28196_28283 = state_28194__$1;
(statearr_28196_28283[(2)] = inst_28190);

(statearr_28196_28283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (20))){
var inst_28095 = (state_28194[(7)]);
var inst_28105 = cljs.core.first.call(null,inst_28095);
var inst_28106 = cljs.core.nth.call(null,inst_28105,(0),null);
var inst_28107 = cljs.core.nth.call(null,inst_28105,(1),null);
var state_28194__$1 = (function (){var statearr_28197 = state_28194;
(statearr_28197[(8)] = inst_28106);

return statearr_28197;
})();
if(cljs.core.truth_(inst_28107)){
var statearr_28198_28284 = state_28194__$1;
(statearr_28198_28284[(1)] = (22));

} else {
var statearr_28199_28285 = state_28194__$1;
(statearr_28199_28285[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (27))){
var inst_28135 = (state_28194[(9)]);
var inst_28066 = (state_28194[(10)]);
var inst_28142 = (state_28194[(11)]);
var inst_28137 = (state_28194[(12)]);
var inst_28142__$1 = cljs.core._nth.call(null,inst_28135,inst_28137);
var inst_28143 = cljs.core.async.put_BANG_.call(null,inst_28142__$1,inst_28066,done);
var state_28194__$1 = (function (){var statearr_28200 = state_28194;
(statearr_28200[(11)] = inst_28142__$1);

return statearr_28200;
})();
if(cljs.core.truth_(inst_28143)){
var statearr_28201_28286 = state_28194__$1;
(statearr_28201_28286[(1)] = (30));

} else {
var statearr_28202_28287 = state_28194__$1;
(statearr_28202_28287[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (1))){
var state_28194__$1 = state_28194;
var statearr_28203_28288 = state_28194__$1;
(statearr_28203_28288[(2)] = null);

(statearr_28203_28288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (24))){
var inst_28095 = (state_28194[(7)]);
var inst_28112 = (state_28194[(2)]);
var inst_28113 = cljs.core.next.call(null,inst_28095);
var inst_28075 = inst_28113;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28194__$1 = (function (){var statearr_28204 = state_28194;
(statearr_28204[(13)] = inst_28112);

(statearr_28204[(14)] = inst_28076);

(statearr_28204[(15)] = inst_28075);

(statearr_28204[(16)] = inst_28077);

(statearr_28204[(17)] = inst_28078);

return statearr_28204;
})();
var statearr_28205_28289 = state_28194__$1;
(statearr_28205_28289[(2)] = null);

(statearr_28205_28289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (39))){
var state_28194__$1 = state_28194;
var statearr_28209_28290 = state_28194__$1;
(statearr_28209_28290[(2)] = null);

(statearr_28209_28290[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (4))){
var inst_28066 = (state_28194[(10)]);
var inst_28066__$1 = (state_28194[(2)]);
var inst_28067 = (inst_28066__$1 == null);
var state_28194__$1 = (function (){var statearr_28210 = state_28194;
(statearr_28210[(10)] = inst_28066__$1);

return statearr_28210;
})();
if(cljs.core.truth_(inst_28067)){
var statearr_28211_28291 = state_28194__$1;
(statearr_28211_28291[(1)] = (5));

} else {
var statearr_28212_28292 = state_28194__$1;
(statearr_28212_28292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (15))){
var inst_28076 = (state_28194[(14)]);
var inst_28075 = (state_28194[(15)]);
var inst_28077 = (state_28194[(16)]);
var inst_28078 = (state_28194[(17)]);
var inst_28091 = (state_28194[(2)]);
var inst_28092 = (inst_28078 + (1));
var tmp28206 = inst_28076;
var tmp28207 = inst_28075;
var tmp28208 = inst_28077;
var inst_28075__$1 = tmp28207;
var inst_28076__$1 = tmp28206;
var inst_28077__$1 = tmp28208;
var inst_28078__$1 = inst_28092;
var state_28194__$1 = (function (){var statearr_28213 = state_28194;
(statearr_28213[(14)] = inst_28076__$1);

(statearr_28213[(15)] = inst_28075__$1);

(statearr_28213[(18)] = inst_28091);

(statearr_28213[(16)] = inst_28077__$1);

(statearr_28213[(17)] = inst_28078__$1);

return statearr_28213;
})();
var statearr_28214_28293 = state_28194__$1;
(statearr_28214_28293[(2)] = null);

(statearr_28214_28293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (21))){
var inst_28116 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28218_28294 = state_28194__$1;
(statearr_28218_28294[(2)] = inst_28116);

(statearr_28218_28294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (31))){
var inst_28142 = (state_28194[(11)]);
var inst_28146 = done.call(null,null);
var inst_28147 = cljs.core.async.untap_STAR_.call(null,m,inst_28142);
var state_28194__$1 = (function (){var statearr_28219 = state_28194;
(statearr_28219[(19)] = inst_28146);

return statearr_28219;
})();
var statearr_28220_28295 = state_28194__$1;
(statearr_28220_28295[(2)] = inst_28147);

(statearr_28220_28295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (32))){
var inst_28136 = (state_28194[(20)]);
var inst_28135 = (state_28194[(9)]);
var inst_28134 = (state_28194[(21)]);
var inst_28137 = (state_28194[(12)]);
var inst_28149 = (state_28194[(2)]);
var inst_28150 = (inst_28137 + (1));
var tmp28215 = inst_28136;
var tmp28216 = inst_28135;
var tmp28217 = inst_28134;
var inst_28134__$1 = tmp28217;
var inst_28135__$1 = tmp28216;
var inst_28136__$1 = tmp28215;
var inst_28137__$1 = inst_28150;
var state_28194__$1 = (function (){var statearr_28221 = state_28194;
(statearr_28221[(20)] = inst_28136__$1);

(statearr_28221[(9)] = inst_28135__$1);

(statearr_28221[(21)] = inst_28134__$1);

(statearr_28221[(22)] = inst_28149);

(statearr_28221[(12)] = inst_28137__$1);

return statearr_28221;
})();
var statearr_28222_28296 = state_28194__$1;
(statearr_28222_28296[(2)] = null);

(statearr_28222_28296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (40))){
var inst_28162 = (state_28194[(23)]);
var inst_28166 = done.call(null,null);
var inst_28167 = cljs.core.async.untap_STAR_.call(null,m,inst_28162);
var state_28194__$1 = (function (){var statearr_28223 = state_28194;
(statearr_28223[(24)] = inst_28166);

return statearr_28223;
})();
var statearr_28224_28297 = state_28194__$1;
(statearr_28224_28297[(2)] = inst_28167);

(statearr_28224_28297[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (33))){
var inst_28153 = (state_28194[(25)]);
var inst_28155 = cljs.core.chunked_seq_QMARK_.call(null,inst_28153);
var state_28194__$1 = state_28194;
if(inst_28155){
var statearr_28225_28298 = state_28194__$1;
(statearr_28225_28298[(1)] = (36));

} else {
var statearr_28226_28299 = state_28194__$1;
(statearr_28226_28299[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (13))){
var inst_28085 = (state_28194[(26)]);
var inst_28088 = cljs.core.async.close_BANG_.call(null,inst_28085);
var state_28194__$1 = state_28194;
var statearr_28227_28300 = state_28194__$1;
(statearr_28227_28300[(2)] = inst_28088);

(statearr_28227_28300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (22))){
var inst_28106 = (state_28194[(8)]);
var inst_28109 = cljs.core.async.close_BANG_.call(null,inst_28106);
var state_28194__$1 = state_28194;
var statearr_28228_28301 = state_28194__$1;
(statearr_28228_28301[(2)] = inst_28109);

(statearr_28228_28301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (36))){
var inst_28153 = (state_28194[(25)]);
var inst_28157 = cljs.core.chunk_first.call(null,inst_28153);
var inst_28158 = cljs.core.chunk_rest.call(null,inst_28153);
var inst_28159 = cljs.core.count.call(null,inst_28157);
var inst_28134 = inst_28158;
var inst_28135 = inst_28157;
var inst_28136 = inst_28159;
var inst_28137 = (0);
var state_28194__$1 = (function (){var statearr_28229 = state_28194;
(statearr_28229[(20)] = inst_28136);

(statearr_28229[(9)] = inst_28135);

(statearr_28229[(21)] = inst_28134);

(statearr_28229[(12)] = inst_28137);

return statearr_28229;
})();
var statearr_28230_28302 = state_28194__$1;
(statearr_28230_28302[(2)] = null);

(statearr_28230_28302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (41))){
var inst_28153 = (state_28194[(25)]);
var inst_28169 = (state_28194[(2)]);
var inst_28170 = cljs.core.next.call(null,inst_28153);
var inst_28134 = inst_28170;
var inst_28135 = null;
var inst_28136 = (0);
var inst_28137 = (0);
var state_28194__$1 = (function (){var statearr_28231 = state_28194;
(statearr_28231[(20)] = inst_28136);

(statearr_28231[(9)] = inst_28135);

(statearr_28231[(21)] = inst_28134);

(statearr_28231[(27)] = inst_28169);

(statearr_28231[(12)] = inst_28137);

return statearr_28231;
})();
var statearr_28232_28303 = state_28194__$1;
(statearr_28232_28303[(2)] = null);

(statearr_28232_28303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (43))){
var state_28194__$1 = state_28194;
var statearr_28233_28304 = state_28194__$1;
(statearr_28233_28304[(2)] = null);

(statearr_28233_28304[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (29))){
var inst_28178 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28234_28305 = state_28194__$1;
(statearr_28234_28305[(2)] = inst_28178);

(statearr_28234_28305[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (44))){
var inst_28187 = (state_28194[(2)]);
var state_28194__$1 = (function (){var statearr_28235 = state_28194;
(statearr_28235[(28)] = inst_28187);

return statearr_28235;
})();
var statearr_28236_28306 = state_28194__$1;
(statearr_28236_28306[(2)] = null);

(statearr_28236_28306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (6))){
var inst_28126 = (state_28194[(29)]);
var inst_28125 = cljs.core.deref.call(null,cs);
var inst_28126__$1 = cljs.core.keys.call(null,inst_28125);
var inst_28127 = cljs.core.count.call(null,inst_28126__$1);
var inst_28128 = cljs.core.reset_BANG_.call(null,dctr,inst_28127);
var inst_28133 = cljs.core.seq.call(null,inst_28126__$1);
var inst_28134 = inst_28133;
var inst_28135 = null;
var inst_28136 = (0);
var inst_28137 = (0);
var state_28194__$1 = (function (){var statearr_28237 = state_28194;
(statearr_28237[(20)] = inst_28136);

(statearr_28237[(9)] = inst_28135);

(statearr_28237[(21)] = inst_28134);

(statearr_28237[(29)] = inst_28126__$1);

(statearr_28237[(30)] = inst_28128);

(statearr_28237[(12)] = inst_28137);

return statearr_28237;
})();
var statearr_28238_28307 = state_28194__$1;
(statearr_28238_28307[(2)] = null);

(statearr_28238_28307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (28))){
var inst_28134 = (state_28194[(21)]);
var inst_28153 = (state_28194[(25)]);
var inst_28153__$1 = cljs.core.seq.call(null,inst_28134);
var state_28194__$1 = (function (){var statearr_28239 = state_28194;
(statearr_28239[(25)] = inst_28153__$1);

return statearr_28239;
})();
if(inst_28153__$1){
var statearr_28240_28308 = state_28194__$1;
(statearr_28240_28308[(1)] = (33));

} else {
var statearr_28241_28309 = state_28194__$1;
(statearr_28241_28309[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (25))){
var inst_28136 = (state_28194[(20)]);
var inst_28137 = (state_28194[(12)]);
var inst_28139 = (inst_28137 < inst_28136);
var inst_28140 = inst_28139;
var state_28194__$1 = state_28194;
if(cljs.core.truth_(inst_28140)){
var statearr_28242_28310 = state_28194__$1;
(statearr_28242_28310[(1)] = (27));

} else {
var statearr_28243_28311 = state_28194__$1;
(statearr_28243_28311[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (34))){
var state_28194__$1 = state_28194;
var statearr_28244_28312 = state_28194__$1;
(statearr_28244_28312[(2)] = null);

(statearr_28244_28312[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (17))){
var state_28194__$1 = state_28194;
var statearr_28245_28313 = state_28194__$1;
(statearr_28245_28313[(2)] = null);

(statearr_28245_28313[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (3))){
var inst_28192 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28194__$1,inst_28192);
} else {
if((state_val_28195 === (12))){
var inst_28121 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28246_28314 = state_28194__$1;
(statearr_28246_28314[(2)] = inst_28121);

(statearr_28246_28314[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (2))){
var state_28194__$1 = state_28194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28194__$1,(4),ch);
} else {
if((state_val_28195 === (23))){
var state_28194__$1 = state_28194;
var statearr_28247_28315 = state_28194__$1;
(statearr_28247_28315[(2)] = null);

(statearr_28247_28315[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (35))){
var inst_28176 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28248_28316 = state_28194__$1;
(statearr_28248_28316[(2)] = inst_28176);

(statearr_28248_28316[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (19))){
var inst_28095 = (state_28194[(7)]);
var inst_28099 = cljs.core.chunk_first.call(null,inst_28095);
var inst_28100 = cljs.core.chunk_rest.call(null,inst_28095);
var inst_28101 = cljs.core.count.call(null,inst_28099);
var inst_28075 = inst_28100;
var inst_28076 = inst_28099;
var inst_28077 = inst_28101;
var inst_28078 = (0);
var state_28194__$1 = (function (){var statearr_28249 = state_28194;
(statearr_28249[(14)] = inst_28076);

(statearr_28249[(15)] = inst_28075);

(statearr_28249[(16)] = inst_28077);

(statearr_28249[(17)] = inst_28078);

return statearr_28249;
})();
var statearr_28250_28317 = state_28194__$1;
(statearr_28250_28317[(2)] = null);

(statearr_28250_28317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (11))){
var inst_28075 = (state_28194[(15)]);
var inst_28095 = (state_28194[(7)]);
var inst_28095__$1 = cljs.core.seq.call(null,inst_28075);
var state_28194__$1 = (function (){var statearr_28251 = state_28194;
(statearr_28251[(7)] = inst_28095__$1);

return statearr_28251;
})();
if(inst_28095__$1){
var statearr_28252_28318 = state_28194__$1;
(statearr_28252_28318[(1)] = (16));

} else {
var statearr_28253_28319 = state_28194__$1;
(statearr_28253_28319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (9))){
var inst_28123 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28254_28320 = state_28194__$1;
(statearr_28254_28320[(2)] = inst_28123);

(statearr_28254_28320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (5))){
var inst_28073 = cljs.core.deref.call(null,cs);
var inst_28074 = cljs.core.seq.call(null,inst_28073);
var inst_28075 = inst_28074;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28194__$1 = (function (){var statearr_28255 = state_28194;
(statearr_28255[(14)] = inst_28076);

(statearr_28255[(15)] = inst_28075);

(statearr_28255[(16)] = inst_28077);

(statearr_28255[(17)] = inst_28078);

return statearr_28255;
})();
var statearr_28256_28321 = state_28194__$1;
(statearr_28256_28321[(2)] = null);

(statearr_28256_28321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (14))){
var state_28194__$1 = state_28194;
var statearr_28257_28322 = state_28194__$1;
(statearr_28257_28322[(2)] = null);

(statearr_28257_28322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (45))){
var inst_28184 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28258_28323 = state_28194__$1;
(statearr_28258_28323[(2)] = inst_28184);

(statearr_28258_28323[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (26))){
var inst_28126 = (state_28194[(29)]);
var inst_28180 = (state_28194[(2)]);
var inst_28181 = cljs.core.seq.call(null,inst_28126);
var state_28194__$1 = (function (){var statearr_28259 = state_28194;
(statearr_28259[(31)] = inst_28180);

return statearr_28259;
})();
if(inst_28181){
var statearr_28260_28324 = state_28194__$1;
(statearr_28260_28324[(1)] = (42));

} else {
var statearr_28261_28325 = state_28194__$1;
(statearr_28261_28325[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (16))){
var inst_28095 = (state_28194[(7)]);
var inst_28097 = cljs.core.chunked_seq_QMARK_.call(null,inst_28095);
var state_28194__$1 = state_28194;
if(inst_28097){
var statearr_28262_28326 = state_28194__$1;
(statearr_28262_28326[(1)] = (19));

} else {
var statearr_28263_28327 = state_28194__$1;
(statearr_28263_28327[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (38))){
var inst_28173 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28264_28328 = state_28194__$1;
(statearr_28264_28328[(2)] = inst_28173);

(statearr_28264_28328[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (30))){
var state_28194__$1 = state_28194;
var statearr_28265_28329 = state_28194__$1;
(statearr_28265_28329[(2)] = null);

(statearr_28265_28329[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (10))){
var inst_28076 = (state_28194[(14)]);
var inst_28078 = (state_28194[(17)]);
var inst_28084 = cljs.core._nth.call(null,inst_28076,inst_28078);
var inst_28085 = cljs.core.nth.call(null,inst_28084,(0),null);
var inst_28086 = cljs.core.nth.call(null,inst_28084,(1),null);
var state_28194__$1 = (function (){var statearr_28266 = state_28194;
(statearr_28266[(26)] = inst_28085);

return statearr_28266;
})();
if(cljs.core.truth_(inst_28086)){
var statearr_28267_28330 = state_28194__$1;
(statearr_28267_28330[(1)] = (13));

} else {
var statearr_28268_28331 = state_28194__$1;
(statearr_28268_28331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (18))){
var inst_28119 = (state_28194[(2)]);
var state_28194__$1 = state_28194;
var statearr_28269_28332 = state_28194__$1;
(statearr_28269_28332[(2)] = inst_28119);

(statearr_28269_28332[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (42))){
var state_28194__$1 = state_28194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28194__$1,(45),dchan);
} else {
if((state_val_28195 === (37))){
var inst_28153 = (state_28194[(25)]);
var inst_28066 = (state_28194[(10)]);
var inst_28162 = (state_28194[(23)]);
var inst_28162__$1 = cljs.core.first.call(null,inst_28153);
var inst_28163 = cljs.core.async.put_BANG_.call(null,inst_28162__$1,inst_28066,done);
var state_28194__$1 = (function (){var statearr_28270 = state_28194;
(statearr_28270[(23)] = inst_28162__$1);

return statearr_28270;
})();
if(cljs.core.truth_(inst_28163)){
var statearr_28271_28333 = state_28194__$1;
(statearr_28271_28333[(1)] = (39));

} else {
var statearr_28272_28334 = state_28194__$1;
(statearr_28272_28334[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28195 === (8))){
var inst_28077 = (state_28194[(16)]);
var inst_28078 = (state_28194[(17)]);
var inst_28080 = (inst_28078 < inst_28077);
var inst_28081 = inst_28080;
var state_28194__$1 = state_28194;
if(cljs.core.truth_(inst_28081)){
var statearr_28273_28335 = state_28194__$1;
(statearr_28273_28335[(1)] = (10));

} else {
var statearr_28274_28336 = state_28194__$1;
(statearr_28274_28336[(1)] = (11));

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
});})(c__20309__auto___28282,cs,m,dchan,dctr,done))
;
return ((function (switch__20244__auto__,c__20309__auto___28282,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20245__auto__ = null;
var cljs$core$async$mult_$_state_machine__20245__auto____0 = (function (){
var statearr_28278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28278[(0)] = cljs$core$async$mult_$_state_machine__20245__auto__);

(statearr_28278[(1)] = (1));

return statearr_28278;
});
var cljs$core$async$mult_$_state_machine__20245__auto____1 = (function (state_28194){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_28194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e28279){if((e28279 instanceof Object)){
var ex__20248__auto__ = e28279;
var statearr_28280_28337 = state_28194;
(statearr_28280_28337[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28338 = state_28194;
state_28194 = G__28338;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20245__auto__ = function(state_28194){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20245__auto____1.call(this,state_28194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20245__auto____0;
cljs$core$async$mult_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20245__auto____1;
return cljs$core$async$mult_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___28282,cs,m,dchan,dctr,done))
})();
var state__20311__auto__ = (function (){var statearr_28281 = f__20310__auto__.call(null);
(statearr_28281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___28282);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___28282,cs,m,dchan,dctr,done))
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
var args28339 = [];
var len__17575__auto___28342 = arguments.length;
var i__17576__auto___28343 = (0);
while(true){
if((i__17576__auto___28343 < len__17575__auto___28342)){
args28339.push((arguments[i__17576__auto___28343]));

var G__28344 = (i__17576__auto___28343 + (1));
i__17576__auto___28343 = G__28344;
continue;
} else {
}
break;
}

var G__28341 = args28339.length;
switch (G__28341) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28339.length)].join('')));

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
var len__17575__auto___28356 = arguments.length;
var i__17576__auto___28357 = (0);
while(true){
if((i__17576__auto___28357 < len__17575__auto___28356)){
args__17582__auto__.push((arguments[i__17576__auto___28357]));

var G__28358 = (i__17576__auto___28357 + (1));
i__17576__auto___28357 = G__28358;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((3) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17583__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28350){
var map__28351 = p__28350;
var map__28351__$1 = ((((!((map__28351 == null)))?((((map__28351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28351):map__28351);
var opts = map__28351__$1;
var statearr_28353_28359 = state;
(statearr_28353_28359[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28351,map__28351__$1,opts){
return (function (val){
var statearr_28354_28360 = state;
(statearr_28354_28360[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28351,map__28351__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28355_28361 = state;
(statearr_28355_28361[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28346){
var G__28347 = cljs.core.first.call(null,seq28346);
var seq28346__$1 = cljs.core.next.call(null,seq28346);
var G__28348 = cljs.core.first.call(null,seq28346__$1);
var seq28346__$2 = cljs.core.next.call(null,seq28346__$1);
var G__28349 = cljs.core.first.call(null,seq28346__$2);
var seq28346__$3 = cljs.core.next.call(null,seq28346__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28347,G__28348,G__28349,seq28346__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28525 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28525 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28526){
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
this.meta28526 = meta28526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28527,meta28526__$1){
var self__ = this;
var _28527__$1 = this;
return (new cljs.core.async.t_cljs$core$async28525(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28526__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28527){
var self__ = this;
var _28527__$1 = this;
return self__.meta28526;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28525.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28526","meta28526",1287297177,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28525";

cljs.core.async.t_cljs$core$async28525.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async28525");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28525 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28525(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28526){
return (new cljs.core.async.t_cljs$core$async28525(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28526));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28525(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20309__auto___28688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___28688,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___28688,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28625){
var state_val_28626 = (state_28625[(1)]);
if((state_val_28626 === (7))){
var inst_28543 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
var statearr_28627_28689 = state_28625__$1;
(statearr_28627_28689[(2)] = inst_28543);

(statearr_28627_28689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (20))){
var inst_28555 = (state_28625[(7)]);
var state_28625__$1 = state_28625;
var statearr_28628_28690 = state_28625__$1;
(statearr_28628_28690[(2)] = inst_28555);

(statearr_28628_28690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (27))){
var state_28625__$1 = state_28625;
var statearr_28629_28691 = state_28625__$1;
(statearr_28629_28691[(2)] = null);

(statearr_28629_28691[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (1))){
var inst_28531 = (state_28625[(8)]);
var inst_28531__$1 = calc_state.call(null);
var inst_28533 = (inst_28531__$1 == null);
var inst_28534 = cljs.core.not.call(null,inst_28533);
var state_28625__$1 = (function (){var statearr_28630 = state_28625;
(statearr_28630[(8)] = inst_28531__$1);

return statearr_28630;
})();
if(inst_28534){
var statearr_28631_28692 = state_28625__$1;
(statearr_28631_28692[(1)] = (2));

} else {
var statearr_28632_28693 = state_28625__$1;
(statearr_28632_28693[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (24))){
var inst_28585 = (state_28625[(9)]);
var inst_28578 = (state_28625[(10)]);
var inst_28599 = (state_28625[(11)]);
var inst_28599__$1 = inst_28578.call(null,inst_28585);
var state_28625__$1 = (function (){var statearr_28633 = state_28625;
(statearr_28633[(11)] = inst_28599__$1);

return statearr_28633;
})();
if(cljs.core.truth_(inst_28599__$1)){
var statearr_28634_28694 = state_28625__$1;
(statearr_28634_28694[(1)] = (29));

} else {
var statearr_28635_28695 = state_28625__$1;
(statearr_28635_28695[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (4))){
var inst_28546 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
if(cljs.core.truth_(inst_28546)){
var statearr_28636_28696 = state_28625__$1;
(statearr_28636_28696[(1)] = (8));

} else {
var statearr_28637_28697 = state_28625__$1;
(statearr_28637_28697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (15))){
var inst_28572 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
if(cljs.core.truth_(inst_28572)){
var statearr_28638_28698 = state_28625__$1;
(statearr_28638_28698[(1)] = (19));

} else {
var statearr_28639_28699 = state_28625__$1;
(statearr_28639_28699[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (21))){
var inst_28577 = (state_28625[(12)]);
var inst_28577__$1 = (state_28625[(2)]);
var inst_28578 = cljs.core.get.call(null,inst_28577__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28579 = cljs.core.get.call(null,inst_28577__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28580 = cljs.core.get.call(null,inst_28577__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28625__$1 = (function (){var statearr_28640 = state_28625;
(statearr_28640[(10)] = inst_28578);

(statearr_28640[(13)] = inst_28579);

(statearr_28640[(12)] = inst_28577__$1);

return statearr_28640;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28625__$1,(22),inst_28580);
} else {
if((state_val_28626 === (31))){
var inst_28607 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
if(cljs.core.truth_(inst_28607)){
var statearr_28641_28700 = state_28625__$1;
(statearr_28641_28700[(1)] = (32));

} else {
var statearr_28642_28701 = state_28625__$1;
(statearr_28642_28701[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (32))){
var inst_28584 = (state_28625[(14)]);
var state_28625__$1 = state_28625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28625__$1,(35),out,inst_28584);
} else {
if((state_val_28626 === (33))){
var inst_28577 = (state_28625[(12)]);
var inst_28555 = inst_28577;
var state_28625__$1 = (function (){var statearr_28643 = state_28625;
(statearr_28643[(7)] = inst_28555);

return statearr_28643;
})();
var statearr_28644_28702 = state_28625__$1;
(statearr_28644_28702[(2)] = null);

(statearr_28644_28702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (13))){
var inst_28555 = (state_28625[(7)]);
var inst_28562 = inst_28555.cljs$lang$protocol_mask$partition0$;
var inst_28563 = (inst_28562 & (64));
var inst_28564 = inst_28555.cljs$core$ISeq$;
var inst_28565 = (inst_28563) || (inst_28564);
var state_28625__$1 = state_28625;
if(cljs.core.truth_(inst_28565)){
var statearr_28645_28703 = state_28625__$1;
(statearr_28645_28703[(1)] = (16));

} else {
var statearr_28646_28704 = state_28625__$1;
(statearr_28646_28704[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (22))){
var inst_28585 = (state_28625[(9)]);
var inst_28584 = (state_28625[(14)]);
var inst_28583 = (state_28625[(2)]);
var inst_28584__$1 = cljs.core.nth.call(null,inst_28583,(0),null);
var inst_28585__$1 = cljs.core.nth.call(null,inst_28583,(1),null);
var inst_28586 = (inst_28584__$1 == null);
var inst_28587 = cljs.core._EQ_.call(null,inst_28585__$1,change);
var inst_28588 = (inst_28586) || (inst_28587);
var state_28625__$1 = (function (){var statearr_28647 = state_28625;
(statearr_28647[(9)] = inst_28585__$1);

(statearr_28647[(14)] = inst_28584__$1);

return statearr_28647;
})();
if(cljs.core.truth_(inst_28588)){
var statearr_28648_28705 = state_28625__$1;
(statearr_28648_28705[(1)] = (23));

} else {
var statearr_28649_28706 = state_28625__$1;
(statearr_28649_28706[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (36))){
var inst_28577 = (state_28625[(12)]);
var inst_28555 = inst_28577;
var state_28625__$1 = (function (){var statearr_28650 = state_28625;
(statearr_28650[(7)] = inst_28555);

return statearr_28650;
})();
var statearr_28651_28707 = state_28625__$1;
(statearr_28651_28707[(2)] = null);

(statearr_28651_28707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (29))){
var inst_28599 = (state_28625[(11)]);
var state_28625__$1 = state_28625;
var statearr_28652_28708 = state_28625__$1;
(statearr_28652_28708[(2)] = inst_28599);

(statearr_28652_28708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (6))){
var state_28625__$1 = state_28625;
var statearr_28653_28709 = state_28625__$1;
(statearr_28653_28709[(2)] = false);

(statearr_28653_28709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (28))){
var inst_28595 = (state_28625[(2)]);
var inst_28596 = calc_state.call(null);
var inst_28555 = inst_28596;
var state_28625__$1 = (function (){var statearr_28654 = state_28625;
(statearr_28654[(7)] = inst_28555);

(statearr_28654[(15)] = inst_28595);

return statearr_28654;
})();
var statearr_28655_28710 = state_28625__$1;
(statearr_28655_28710[(2)] = null);

(statearr_28655_28710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (25))){
var inst_28621 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
var statearr_28656_28711 = state_28625__$1;
(statearr_28656_28711[(2)] = inst_28621);

(statearr_28656_28711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (34))){
var inst_28619 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
var statearr_28657_28712 = state_28625__$1;
(statearr_28657_28712[(2)] = inst_28619);

(statearr_28657_28712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (17))){
var state_28625__$1 = state_28625;
var statearr_28658_28713 = state_28625__$1;
(statearr_28658_28713[(2)] = false);

(statearr_28658_28713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (3))){
var state_28625__$1 = state_28625;
var statearr_28659_28714 = state_28625__$1;
(statearr_28659_28714[(2)] = false);

(statearr_28659_28714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (12))){
var inst_28623 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28625__$1,inst_28623);
} else {
if((state_val_28626 === (2))){
var inst_28531 = (state_28625[(8)]);
var inst_28536 = inst_28531.cljs$lang$protocol_mask$partition0$;
var inst_28537 = (inst_28536 & (64));
var inst_28538 = inst_28531.cljs$core$ISeq$;
var inst_28539 = (inst_28537) || (inst_28538);
var state_28625__$1 = state_28625;
if(cljs.core.truth_(inst_28539)){
var statearr_28660_28715 = state_28625__$1;
(statearr_28660_28715[(1)] = (5));

} else {
var statearr_28661_28716 = state_28625__$1;
(statearr_28661_28716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (23))){
var inst_28584 = (state_28625[(14)]);
var inst_28590 = (inst_28584 == null);
var state_28625__$1 = state_28625;
if(cljs.core.truth_(inst_28590)){
var statearr_28662_28717 = state_28625__$1;
(statearr_28662_28717[(1)] = (26));

} else {
var statearr_28663_28718 = state_28625__$1;
(statearr_28663_28718[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (35))){
var inst_28610 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
if(cljs.core.truth_(inst_28610)){
var statearr_28664_28719 = state_28625__$1;
(statearr_28664_28719[(1)] = (36));

} else {
var statearr_28665_28720 = state_28625__$1;
(statearr_28665_28720[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (19))){
var inst_28555 = (state_28625[(7)]);
var inst_28574 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28555);
var state_28625__$1 = state_28625;
var statearr_28666_28721 = state_28625__$1;
(statearr_28666_28721[(2)] = inst_28574);

(statearr_28666_28721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (11))){
var inst_28555 = (state_28625[(7)]);
var inst_28559 = (inst_28555 == null);
var inst_28560 = cljs.core.not.call(null,inst_28559);
var state_28625__$1 = state_28625;
if(inst_28560){
var statearr_28667_28722 = state_28625__$1;
(statearr_28667_28722[(1)] = (13));

} else {
var statearr_28668_28723 = state_28625__$1;
(statearr_28668_28723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (9))){
var inst_28531 = (state_28625[(8)]);
var state_28625__$1 = state_28625;
var statearr_28669_28724 = state_28625__$1;
(statearr_28669_28724[(2)] = inst_28531);

(statearr_28669_28724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (5))){
var state_28625__$1 = state_28625;
var statearr_28670_28725 = state_28625__$1;
(statearr_28670_28725[(2)] = true);

(statearr_28670_28725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (14))){
var state_28625__$1 = state_28625;
var statearr_28671_28726 = state_28625__$1;
(statearr_28671_28726[(2)] = false);

(statearr_28671_28726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (26))){
var inst_28585 = (state_28625[(9)]);
var inst_28592 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28585);
var state_28625__$1 = state_28625;
var statearr_28672_28727 = state_28625__$1;
(statearr_28672_28727[(2)] = inst_28592);

(statearr_28672_28727[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (16))){
var state_28625__$1 = state_28625;
var statearr_28673_28728 = state_28625__$1;
(statearr_28673_28728[(2)] = true);

(statearr_28673_28728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (38))){
var inst_28615 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
var statearr_28674_28729 = state_28625__$1;
(statearr_28674_28729[(2)] = inst_28615);

(statearr_28674_28729[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (30))){
var inst_28585 = (state_28625[(9)]);
var inst_28578 = (state_28625[(10)]);
var inst_28579 = (state_28625[(13)]);
var inst_28602 = cljs.core.empty_QMARK_.call(null,inst_28578);
var inst_28603 = inst_28579.call(null,inst_28585);
var inst_28604 = cljs.core.not.call(null,inst_28603);
var inst_28605 = (inst_28602) && (inst_28604);
var state_28625__$1 = state_28625;
var statearr_28675_28730 = state_28625__$1;
(statearr_28675_28730[(2)] = inst_28605);

(statearr_28675_28730[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (10))){
var inst_28531 = (state_28625[(8)]);
var inst_28551 = (state_28625[(2)]);
var inst_28552 = cljs.core.get.call(null,inst_28551,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28553 = cljs.core.get.call(null,inst_28551,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28554 = cljs.core.get.call(null,inst_28551,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28555 = inst_28531;
var state_28625__$1 = (function (){var statearr_28676 = state_28625;
(statearr_28676[(16)] = inst_28554);

(statearr_28676[(17)] = inst_28552);

(statearr_28676[(7)] = inst_28555);

(statearr_28676[(18)] = inst_28553);

return statearr_28676;
})();
var statearr_28677_28731 = state_28625__$1;
(statearr_28677_28731[(2)] = null);

(statearr_28677_28731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (18))){
var inst_28569 = (state_28625[(2)]);
var state_28625__$1 = state_28625;
var statearr_28678_28732 = state_28625__$1;
(statearr_28678_28732[(2)] = inst_28569);

(statearr_28678_28732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (37))){
var state_28625__$1 = state_28625;
var statearr_28679_28733 = state_28625__$1;
(statearr_28679_28733[(2)] = null);

(statearr_28679_28733[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28626 === (8))){
var inst_28531 = (state_28625[(8)]);
var inst_28548 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28531);
var state_28625__$1 = state_28625;
var statearr_28680_28734 = state_28625__$1;
(statearr_28680_28734[(2)] = inst_28548);

(statearr_28680_28734[(1)] = (10));


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
});})(c__20309__auto___28688,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20244__auto__,c__20309__auto___28688,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20245__auto__ = null;
var cljs$core$async$mix_$_state_machine__20245__auto____0 = (function (){
var statearr_28684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28684[(0)] = cljs$core$async$mix_$_state_machine__20245__auto__);

(statearr_28684[(1)] = (1));

return statearr_28684;
});
var cljs$core$async$mix_$_state_machine__20245__auto____1 = (function (state_28625){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_28625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e28685){if((e28685 instanceof Object)){
var ex__20248__auto__ = e28685;
var statearr_28686_28735 = state_28625;
(statearr_28686_28735[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28736 = state_28625;
state_28625 = G__28736;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20245__auto__ = function(state_28625){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20245__auto____1.call(this,state_28625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20245__auto____0;
cljs$core$async$mix_$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20245__auto____1;
return cljs$core$async$mix_$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___28688,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20311__auto__ = (function (){var statearr_28687 = f__20310__auto__.call(null);
(statearr_28687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___28688);

return statearr_28687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___28688,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28737 = [];
var len__17575__auto___28740 = arguments.length;
var i__17576__auto___28741 = (0);
while(true){
if((i__17576__auto___28741 < len__17575__auto___28740)){
args28737.push((arguments[i__17576__auto___28741]));

var G__28742 = (i__17576__auto___28741 + (1));
i__17576__auto___28741 = G__28742;
continue;
} else {
}
break;
}

var G__28739 = args28737.length;
switch (G__28739) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28737.length)].join('')));

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
var args28745 = [];
var len__17575__auto___28870 = arguments.length;
var i__17576__auto___28871 = (0);
while(true){
if((i__17576__auto___28871 < len__17575__auto___28870)){
args28745.push((arguments[i__17576__auto___28871]));

var G__28872 = (i__17576__auto___28871 + (1));
i__17576__auto___28871 = G__28872;
continue;
} else {
}
break;
}

var G__28747 = args28745.length;
switch (G__28747) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28745.length)].join('')));

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
return (function (p1__28744_SHARP_){
if(cljs.core.truth_(p1__28744_SHARP_.call(null,topic))){
return p1__28744_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28744_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16517__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28748 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28749){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28749 = meta28749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28750,meta28749__$1){
var self__ = this;
var _28750__$1 = this;
return (new cljs.core.async.t_cljs$core$async28748(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28749__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28750){
var self__ = this;
var _28750__$1 = this;
return self__.meta28749;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28748.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28748.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28749","meta28749",-974902901,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28748";

cljs.core.async.t_cljs$core$async28748.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async28748");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28748 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28748(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28749){
return (new cljs.core.async.t_cljs$core$async28748(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28749));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28748(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20309__auto___28874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___28874,mults,ensure_mult,p){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___28874,mults,ensure_mult,p){
return (function (state_28822){
var state_val_28823 = (state_28822[(1)]);
if((state_val_28823 === (7))){
var inst_28818 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
var statearr_28824_28875 = state_28822__$1;
(statearr_28824_28875[(2)] = inst_28818);

(statearr_28824_28875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (20))){
var state_28822__$1 = state_28822;
var statearr_28825_28876 = state_28822__$1;
(statearr_28825_28876[(2)] = null);

(statearr_28825_28876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (1))){
var state_28822__$1 = state_28822;
var statearr_28826_28877 = state_28822__$1;
(statearr_28826_28877[(2)] = null);

(statearr_28826_28877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (24))){
var inst_28801 = (state_28822[(7)]);
var inst_28810 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28801);
var state_28822__$1 = state_28822;
var statearr_28827_28878 = state_28822__$1;
(statearr_28827_28878[(2)] = inst_28810);

(statearr_28827_28878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (4))){
var inst_28753 = (state_28822[(8)]);
var inst_28753__$1 = (state_28822[(2)]);
var inst_28754 = (inst_28753__$1 == null);
var state_28822__$1 = (function (){var statearr_28828 = state_28822;
(statearr_28828[(8)] = inst_28753__$1);

return statearr_28828;
})();
if(cljs.core.truth_(inst_28754)){
var statearr_28829_28879 = state_28822__$1;
(statearr_28829_28879[(1)] = (5));

} else {
var statearr_28830_28880 = state_28822__$1;
(statearr_28830_28880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (15))){
var inst_28795 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
var statearr_28831_28881 = state_28822__$1;
(statearr_28831_28881[(2)] = inst_28795);

(statearr_28831_28881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (21))){
var inst_28815 = (state_28822[(2)]);
var state_28822__$1 = (function (){var statearr_28832 = state_28822;
(statearr_28832[(9)] = inst_28815);

return statearr_28832;
})();
var statearr_28833_28882 = state_28822__$1;
(statearr_28833_28882[(2)] = null);

(statearr_28833_28882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (13))){
var inst_28777 = (state_28822[(10)]);
var inst_28779 = cljs.core.chunked_seq_QMARK_.call(null,inst_28777);
var state_28822__$1 = state_28822;
if(inst_28779){
var statearr_28834_28883 = state_28822__$1;
(statearr_28834_28883[(1)] = (16));

} else {
var statearr_28835_28884 = state_28822__$1;
(statearr_28835_28884[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (22))){
var inst_28807 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
if(cljs.core.truth_(inst_28807)){
var statearr_28836_28885 = state_28822__$1;
(statearr_28836_28885[(1)] = (23));

} else {
var statearr_28837_28886 = state_28822__$1;
(statearr_28837_28886[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (6))){
var inst_28801 = (state_28822[(7)]);
var inst_28803 = (state_28822[(11)]);
var inst_28753 = (state_28822[(8)]);
var inst_28801__$1 = topic_fn.call(null,inst_28753);
var inst_28802 = cljs.core.deref.call(null,mults);
var inst_28803__$1 = cljs.core.get.call(null,inst_28802,inst_28801__$1);
var state_28822__$1 = (function (){var statearr_28838 = state_28822;
(statearr_28838[(7)] = inst_28801__$1);

(statearr_28838[(11)] = inst_28803__$1);

return statearr_28838;
})();
if(cljs.core.truth_(inst_28803__$1)){
var statearr_28839_28887 = state_28822__$1;
(statearr_28839_28887[(1)] = (19));

} else {
var statearr_28840_28888 = state_28822__$1;
(statearr_28840_28888[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (25))){
var inst_28812 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
var statearr_28841_28889 = state_28822__$1;
(statearr_28841_28889[(2)] = inst_28812);

(statearr_28841_28889[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (17))){
var inst_28777 = (state_28822[(10)]);
var inst_28786 = cljs.core.first.call(null,inst_28777);
var inst_28787 = cljs.core.async.muxch_STAR_.call(null,inst_28786);
var inst_28788 = cljs.core.async.close_BANG_.call(null,inst_28787);
var inst_28789 = cljs.core.next.call(null,inst_28777);
var inst_28763 = inst_28789;
var inst_28764 = null;
var inst_28765 = (0);
var inst_28766 = (0);
var state_28822__$1 = (function (){var statearr_28842 = state_28822;
(statearr_28842[(12)] = inst_28764);

(statearr_28842[(13)] = inst_28765);

(statearr_28842[(14)] = inst_28788);

(statearr_28842[(15)] = inst_28766);

(statearr_28842[(16)] = inst_28763);

return statearr_28842;
})();
var statearr_28843_28890 = state_28822__$1;
(statearr_28843_28890[(2)] = null);

(statearr_28843_28890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (3))){
var inst_28820 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28822__$1,inst_28820);
} else {
if((state_val_28823 === (12))){
var inst_28797 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
var statearr_28844_28891 = state_28822__$1;
(statearr_28844_28891[(2)] = inst_28797);

(statearr_28844_28891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (2))){
var state_28822__$1 = state_28822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28822__$1,(4),ch);
} else {
if((state_val_28823 === (23))){
var state_28822__$1 = state_28822;
var statearr_28845_28892 = state_28822__$1;
(statearr_28845_28892[(2)] = null);

(statearr_28845_28892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (19))){
var inst_28803 = (state_28822[(11)]);
var inst_28753 = (state_28822[(8)]);
var inst_28805 = cljs.core.async.muxch_STAR_.call(null,inst_28803);
var state_28822__$1 = state_28822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28822__$1,(22),inst_28805,inst_28753);
} else {
if((state_val_28823 === (11))){
var inst_28777 = (state_28822[(10)]);
var inst_28763 = (state_28822[(16)]);
var inst_28777__$1 = cljs.core.seq.call(null,inst_28763);
var state_28822__$1 = (function (){var statearr_28846 = state_28822;
(statearr_28846[(10)] = inst_28777__$1);

return statearr_28846;
})();
if(inst_28777__$1){
var statearr_28847_28893 = state_28822__$1;
(statearr_28847_28893[(1)] = (13));

} else {
var statearr_28848_28894 = state_28822__$1;
(statearr_28848_28894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (9))){
var inst_28799 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
var statearr_28849_28895 = state_28822__$1;
(statearr_28849_28895[(2)] = inst_28799);

(statearr_28849_28895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (5))){
var inst_28760 = cljs.core.deref.call(null,mults);
var inst_28761 = cljs.core.vals.call(null,inst_28760);
var inst_28762 = cljs.core.seq.call(null,inst_28761);
var inst_28763 = inst_28762;
var inst_28764 = null;
var inst_28765 = (0);
var inst_28766 = (0);
var state_28822__$1 = (function (){var statearr_28850 = state_28822;
(statearr_28850[(12)] = inst_28764);

(statearr_28850[(13)] = inst_28765);

(statearr_28850[(15)] = inst_28766);

(statearr_28850[(16)] = inst_28763);

return statearr_28850;
})();
var statearr_28851_28896 = state_28822__$1;
(statearr_28851_28896[(2)] = null);

(statearr_28851_28896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (14))){
var state_28822__$1 = state_28822;
var statearr_28855_28897 = state_28822__$1;
(statearr_28855_28897[(2)] = null);

(statearr_28855_28897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (16))){
var inst_28777 = (state_28822[(10)]);
var inst_28781 = cljs.core.chunk_first.call(null,inst_28777);
var inst_28782 = cljs.core.chunk_rest.call(null,inst_28777);
var inst_28783 = cljs.core.count.call(null,inst_28781);
var inst_28763 = inst_28782;
var inst_28764 = inst_28781;
var inst_28765 = inst_28783;
var inst_28766 = (0);
var state_28822__$1 = (function (){var statearr_28856 = state_28822;
(statearr_28856[(12)] = inst_28764);

(statearr_28856[(13)] = inst_28765);

(statearr_28856[(15)] = inst_28766);

(statearr_28856[(16)] = inst_28763);

return statearr_28856;
})();
var statearr_28857_28898 = state_28822__$1;
(statearr_28857_28898[(2)] = null);

(statearr_28857_28898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (10))){
var inst_28764 = (state_28822[(12)]);
var inst_28765 = (state_28822[(13)]);
var inst_28766 = (state_28822[(15)]);
var inst_28763 = (state_28822[(16)]);
var inst_28771 = cljs.core._nth.call(null,inst_28764,inst_28766);
var inst_28772 = cljs.core.async.muxch_STAR_.call(null,inst_28771);
var inst_28773 = cljs.core.async.close_BANG_.call(null,inst_28772);
var inst_28774 = (inst_28766 + (1));
var tmp28852 = inst_28764;
var tmp28853 = inst_28765;
var tmp28854 = inst_28763;
var inst_28763__$1 = tmp28854;
var inst_28764__$1 = tmp28852;
var inst_28765__$1 = tmp28853;
var inst_28766__$1 = inst_28774;
var state_28822__$1 = (function (){var statearr_28858 = state_28822;
(statearr_28858[(12)] = inst_28764__$1);

(statearr_28858[(13)] = inst_28765__$1);

(statearr_28858[(17)] = inst_28773);

(statearr_28858[(15)] = inst_28766__$1);

(statearr_28858[(16)] = inst_28763__$1);

return statearr_28858;
})();
var statearr_28859_28899 = state_28822__$1;
(statearr_28859_28899[(2)] = null);

(statearr_28859_28899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (18))){
var inst_28792 = (state_28822[(2)]);
var state_28822__$1 = state_28822;
var statearr_28860_28900 = state_28822__$1;
(statearr_28860_28900[(2)] = inst_28792);

(statearr_28860_28900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28823 === (8))){
var inst_28765 = (state_28822[(13)]);
var inst_28766 = (state_28822[(15)]);
var inst_28768 = (inst_28766 < inst_28765);
var inst_28769 = inst_28768;
var state_28822__$1 = state_28822;
if(cljs.core.truth_(inst_28769)){
var statearr_28861_28901 = state_28822__$1;
(statearr_28861_28901[(1)] = (10));

} else {
var statearr_28862_28902 = state_28822__$1;
(statearr_28862_28902[(1)] = (11));

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
});})(c__20309__auto___28874,mults,ensure_mult,p))
;
return ((function (switch__20244__auto__,c__20309__auto___28874,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_28866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28866[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_28866[(1)] = (1));

return statearr_28866;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_28822){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_28822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e28867){if((e28867 instanceof Object)){
var ex__20248__auto__ = e28867;
var statearr_28868_28903 = state_28822;
(statearr_28868_28903[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28904 = state_28822;
state_28822 = G__28904;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_28822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_28822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___28874,mults,ensure_mult,p))
})();
var state__20311__auto__ = (function (){var statearr_28869 = f__20310__auto__.call(null);
(statearr_28869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___28874);

return statearr_28869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___28874,mults,ensure_mult,p))
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
var args28905 = [];
var len__17575__auto___28908 = arguments.length;
var i__17576__auto___28909 = (0);
while(true){
if((i__17576__auto___28909 < len__17575__auto___28908)){
args28905.push((arguments[i__17576__auto___28909]));

var G__28910 = (i__17576__auto___28909 + (1));
i__17576__auto___28909 = G__28910;
continue;
} else {
}
break;
}

var G__28907 = args28905.length;
switch (G__28907) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28905.length)].join('')));

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
var args28912 = [];
var len__17575__auto___28915 = arguments.length;
var i__17576__auto___28916 = (0);
while(true){
if((i__17576__auto___28916 < len__17575__auto___28915)){
args28912.push((arguments[i__17576__auto___28916]));

var G__28917 = (i__17576__auto___28916 + (1));
i__17576__auto___28916 = G__28917;
continue;
} else {
}
break;
}

var G__28914 = args28912.length;
switch (G__28914) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28912.length)].join('')));

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
var args28919 = [];
var len__17575__auto___28990 = arguments.length;
var i__17576__auto___28991 = (0);
while(true){
if((i__17576__auto___28991 < len__17575__auto___28990)){
args28919.push((arguments[i__17576__auto___28991]));

var G__28992 = (i__17576__auto___28991 + (1));
i__17576__auto___28991 = G__28992;
continue;
} else {
}
break;
}

var G__28921 = args28919.length;
switch (G__28921) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28919.length)].join('')));

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
var c__20309__auto___28994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___28994,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___28994,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28960){
var state_val_28961 = (state_28960[(1)]);
if((state_val_28961 === (7))){
var state_28960__$1 = state_28960;
var statearr_28962_28995 = state_28960__$1;
(statearr_28962_28995[(2)] = null);

(statearr_28962_28995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (1))){
var state_28960__$1 = state_28960;
var statearr_28963_28996 = state_28960__$1;
(statearr_28963_28996[(2)] = null);

(statearr_28963_28996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (4))){
var inst_28924 = (state_28960[(7)]);
var inst_28926 = (inst_28924 < cnt);
var state_28960__$1 = state_28960;
if(cljs.core.truth_(inst_28926)){
var statearr_28964_28997 = state_28960__$1;
(statearr_28964_28997[(1)] = (6));

} else {
var statearr_28965_28998 = state_28960__$1;
(statearr_28965_28998[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (15))){
var inst_28956 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
var statearr_28966_28999 = state_28960__$1;
(statearr_28966_28999[(2)] = inst_28956);

(statearr_28966_28999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (13))){
var inst_28949 = cljs.core.async.close_BANG_.call(null,out);
var state_28960__$1 = state_28960;
var statearr_28967_29000 = state_28960__$1;
(statearr_28967_29000[(2)] = inst_28949);

(statearr_28967_29000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (6))){
var state_28960__$1 = state_28960;
var statearr_28968_29001 = state_28960__$1;
(statearr_28968_29001[(2)] = null);

(statearr_28968_29001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (3))){
var inst_28958 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28960__$1,inst_28958);
} else {
if((state_val_28961 === (12))){
var inst_28946 = (state_28960[(8)]);
var inst_28946__$1 = (state_28960[(2)]);
var inst_28947 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28946__$1);
var state_28960__$1 = (function (){var statearr_28969 = state_28960;
(statearr_28969[(8)] = inst_28946__$1);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28947)){
var statearr_28970_29002 = state_28960__$1;
(statearr_28970_29002[(1)] = (13));

} else {
var statearr_28971_29003 = state_28960__$1;
(statearr_28971_29003[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (2))){
var inst_28923 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28924 = (0);
var state_28960__$1 = (function (){var statearr_28972 = state_28960;
(statearr_28972[(7)] = inst_28924);

(statearr_28972[(9)] = inst_28923);

return statearr_28972;
})();
var statearr_28973_29004 = state_28960__$1;
(statearr_28973_29004[(2)] = null);

(statearr_28973_29004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (11))){
var inst_28924 = (state_28960[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28960,(10),Object,null,(9));
var inst_28933 = chs__$1.call(null,inst_28924);
var inst_28934 = done.call(null,inst_28924);
var inst_28935 = cljs.core.async.take_BANG_.call(null,inst_28933,inst_28934);
var state_28960__$1 = state_28960;
var statearr_28974_29005 = state_28960__$1;
(statearr_28974_29005[(2)] = inst_28935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (9))){
var inst_28924 = (state_28960[(7)]);
var inst_28937 = (state_28960[(2)]);
var inst_28938 = (inst_28924 + (1));
var inst_28924__$1 = inst_28938;
var state_28960__$1 = (function (){var statearr_28975 = state_28960;
(statearr_28975[(7)] = inst_28924__$1);

(statearr_28975[(10)] = inst_28937);

return statearr_28975;
})();
var statearr_28976_29006 = state_28960__$1;
(statearr_28976_29006[(2)] = null);

(statearr_28976_29006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (5))){
var inst_28944 = (state_28960[(2)]);
var state_28960__$1 = (function (){var statearr_28977 = state_28960;
(statearr_28977[(11)] = inst_28944);

return statearr_28977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28960__$1,(12),dchan);
} else {
if((state_val_28961 === (14))){
var inst_28946 = (state_28960[(8)]);
var inst_28951 = cljs.core.apply.call(null,f,inst_28946);
var state_28960__$1 = state_28960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28960__$1,(16),out,inst_28951);
} else {
if((state_val_28961 === (16))){
var inst_28953 = (state_28960[(2)]);
var state_28960__$1 = (function (){var statearr_28978 = state_28960;
(statearr_28978[(12)] = inst_28953);

return statearr_28978;
})();
var statearr_28979_29007 = state_28960__$1;
(statearr_28979_29007[(2)] = null);

(statearr_28979_29007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (10))){
var inst_28928 = (state_28960[(2)]);
var inst_28929 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28960__$1 = (function (){var statearr_28980 = state_28960;
(statearr_28980[(13)] = inst_28928);

return statearr_28980;
})();
var statearr_28981_29008 = state_28960__$1;
(statearr_28981_29008[(2)] = inst_28929);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28960__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28961 === (8))){
var inst_28942 = (state_28960[(2)]);
var state_28960__$1 = state_28960;
var statearr_28982_29009 = state_28960__$1;
(statearr_28982_29009[(2)] = inst_28942);

(statearr_28982_29009[(1)] = (5));


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
});})(c__20309__auto___28994,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20244__auto__,c__20309__auto___28994,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_28986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28986[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_28986[(1)] = (1));

return statearr_28986;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_28960){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_28960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e28987){if((e28987 instanceof Object)){
var ex__20248__auto__ = e28987;
var statearr_28988_29010 = state_28960;
(statearr_28988_29010[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29011 = state_28960;
state_28960 = G__29011;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_28960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_28960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___28994,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20311__auto__ = (function (){var statearr_28989 = f__20310__auto__.call(null);
(statearr_28989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___28994);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___28994,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29013 = [];
var len__17575__auto___29069 = arguments.length;
var i__17576__auto___29070 = (0);
while(true){
if((i__17576__auto___29070 < len__17575__auto___29069)){
args29013.push((arguments[i__17576__auto___29070]));

var G__29071 = (i__17576__auto___29070 + (1));
i__17576__auto___29070 = G__29071;
continue;
} else {
}
break;
}

var G__29015 = args29013.length;
switch (G__29015) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29013.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20309__auto___29073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___29073,out){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___29073,out){
return (function (state_29045){
var state_val_29046 = (state_29045[(1)]);
if((state_val_29046 === (7))){
var inst_29024 = (state_29045[(7)]);
var inst_29025 = (state_29045[(8)]);
var inst_29024__$1 = (state_29045[(2)]);
var inst_29025__$1 = cljs.core.nth.call(null,inst_29024__$1,(0),null);
var inst_29026 = cljs.core.nth.call(null,inst_29024__$1,(1),null);
var inst_29027 = (inst_29025__$1 == null);
var state_29045__$1 = (function (){var statearr_29047 = state_29045;
(statearr_29047[(7)] = inst_29024__$1);

(statearr_29047[(9)] = inst_29026);

(statearr_29047[(8)] = inst_29025__$1);

return statearr_29047;
})();
if(cljs.core.truth_(inst_29027)){
var statearr_29048_29074 = state_29045__$1;
(statearr_29048_29074[(1)] = (8));

} else {
var statearr_29049_29075 = state_29045__$1;
(statearr_29049_29075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (1))){
var inst_29016 = cljs.core.vec.call(null,chs);
var inst_29017 = inst_29016;
var state_29045__$1 = (function (){var statearr_29050 = state_29045;
(statearr_29050[(10)] = inst_29017);

return statearr_29050;
})();
var statearr_29051_29076 = state_29045__$1;
(statearr_29051_29076[(2)] = null);

(statearr_29051_29076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (4))){
var inst_29017 = (state_29045[(10)]);
var state_29045__$1 = state_29045;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29045__$1,(7),inst_29017);
} else {
if((state_val_29046 === (6))){
var inst_29041 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29052_29077 = state_29045__$1;
(statearr_29052_29077[(2)] = inst_29041);

(statearr_29052_29077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (3))){
var inst_29043 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29045__$1,inst_29043);
} else {
if((state_val_29046 === (2))){
var inst_29017 = (state_29045[(10)]);
var inst_29019 = cljs.core.count.call(null,inst_29017);
var inst_29020 = (inst_29019 > (0));
var state_29045__$1 = state_29045;
if(cljs.core.truth_(inst_29020)){
var statearr_29054_29078 = state_29045__$1;
(statearr_29054_29078[(1)] = (4));

} else {
var statearr_29055_29079 = state_29045__$1;
(statearr_29055_29079[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (11))){
var inst_29017 = (state_29045[(10)]);
var inst_29034 = (state_29045[(2)]);
var tmp29053 = inst_29017;
var inst_29017__$1 = tmp29053;
var state_29045__$1 = (function (){var statearr_29056 = state_29045;
(statearr_29056[(11)] = inst_29034);

(statearr_29056[(10)] = inst_29017__$1);

return statearr_29056;
})();
var statearr_29057_29080 = state_29045__$1;
(statearr_29057_29080[(2)] = null);

(statearr_29057_29080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (9))){
var inst_29025 = (state_29045[(8)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29045__$1,(11),out,inst_29025);
} else {
if((state_val_29046 === (5))){
var inst_29039 = cljs.core.async.close_BANG_.call(null,out);
var state_29045__$1 = state_29045;
var statearr_29058_29081 = state_29045__$1;
(statearr_29058_29081[(2)] = inst_29039);

(statearr_29058_29081[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (10))){
var inst_29037 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29059_29082 = state_29045__$1;
(statearr_29059_29082[(2)] = inst_29037);

(statearr_29059_29082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (8))){
var inst_29024 = (state_29045[(7)]);
var inst_29026 = (state_29045[(9)]);
var inst_29025 = (state_29045[(8)]);
var inst_29017 = (state_29045[(10)]);
var inst_29029 = (function (){var cs = inst_29017;
var vec__29022 = inst_29024;
var v = inst_29025;
var c = inst_29026;
return ((function (cs,vec__29022,v,c,inst_29024,inst_29026,inst_29025,inst_29017,state_val_29046,c__20309__auto___29073,out){
return (function (p1__29012_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29012_SHARP_);
});
;})(cs,vec__29022,v,c,inst_29024,inst_29026,inst_29025,inst_29017,state_val_29046,c__20309__auto___29073,out))
})();
var inst_29030 = cljs.core.filterv.call(null,inst_29029,inst_29017);
var inst_29017__$1 = inst_29030;
var state_29045__$1 = (function (){var statearr_29060 = state_29045;
(statearr_29060[(10)] = inst_29017__$1);

return statearr_29060;
})();
var statearr_29061_29083 = state_29045__$1;
(statearr_29061_29083[(2)] = null);

(statearr_29061_29083[(1)] = (2));


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
});})(c__20309__auto___29073,out))
;
return ((function (switch__20244__auto__,c__20309__auto___29073,out){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_29065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29065[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_29065[(1)] = (1));

return statearr_29065;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_29045){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_29045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e29066){if((e29066 instanceof Object)){
var ex__20248__auto__ = e29066;
var statearr_29067_29084 = state_29045;
(statearr_29067_29084[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29085 = state_29045;
state_29045 = G__29085;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_29045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_29045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___29073,out))
})();
var state__20311__auto__ = (function (){var statearr_29068 = f__20310__auto__.call(null);
(statearr_29068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___29073);

return statearr_29068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___29073,out))
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
var args29086 = [];
var len__17575__auto___29135 = arguments.length;
var i__17576__auto___29136 = (0);
while(true){
if((i__17576__auto___29136 < len__17575__auto___29135)){
args29086.push((arguments[i__17576__auto___29136]));

var G__29137 = (i__17576__auto___29136 + (1));
i__17576__auto___29136 = G__29137;
continue;
} else {
}
break;
}

var G__29088 = args29086.length;
switch (G__29088) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29086.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20309__auto___29139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___29139,out){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___29139,out){
return (function (state_29112){
var state_val_29113 = (state_29112[(1)]);
if((state_val_29113 === (7))){
var inst_29094 = (state_29112[(7)]);
var inst_29094__$1 = (state_29112[(2)]);
var inst_29095 = (inst_29094__$1 == null);
var inst_29096 = cljs.core.not.call(null,inst_29095);
var state_29112__$1 = (function (){var statearr_29114 = state_29112;
(statearr_29114[(7)] = inst_29094__$1);

return statearr_29114;
})();
if(inst_29096){
var statearr_29115_29140 = state_29112__$1;
(statearr_29115_29140[(1)] = (8));

} else {
var statearr_29116_29141 = state_29112__$1;
(statearr_29116_29141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (1))){
var inst_29089 = (0);
var state_29112__$1 = (function (){var statearr_29117 = state_29112;
(statearr_29117[(8)] = inst_29089);

return statearr_29117;
})();
var statearr_29118_29142 = state_29112__$1;
(statearr_29118_29142[(2)] = null);

(statearr_29118_29142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (4))){
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29112__$1,(7),ch);
} else {
if((state_val_29113 === (6))){
var inst_29107 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29119_29143 = state_29112__$1;
(statearr_29119_29143[(2)] = inst_29107);

(statearr_29119_29143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (3))){
var inst_29109 = (state_29112[(2)]);
var inst_29110 = cljs.core.async.close_BANG_.call(null,out);
var state_29112__$1 = (function (){var statearr_29120 = state_29112;
(statearr_29120[(9)] = inst_29109);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29112__$1,inst_29110);
} else {
if((state_val_29113 === (2))){
var inst_29089 = (state_29112[(8)]);
var inst_29091 = (inst_29089 < n);
var state_29112__$1 = state_29112;
if(cljs.core.truth_(inst_29091)){
var statearr_29121_29144 = state_29112__$1;
(statearr_29121_29144[(1)] = (4));

} else {
var statearr_29122_29145 = state_29112__$1;
(statearr_29122_29145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (11))){
var inst_29089 = (state_29112[(8)]);
var inst_29099 = (state_29112[(2)]);
var inst_29100 = (inst_29089 + (1));
var inst_29089__$1 = inst_29100;
var state_29112__$1 = (function (){var statearr_29123 = state_29112;
(statearr_29123[(10)] = inst_29099);

(statearr_29123[(8)] = inst_29089__$1);

return statearr_29123;
})();
var statearr_29124_29146 = state_29112__$1;
(statearr_29124_29146[(2)] = null);

(statearr_29124_29146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (9))){
var state_29112__$1 = state_29112;
var statearr_29125_29147 = state_29112__$1;
(statearr_29125_29147[(2)] = null);

(statearr_29125_29147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (5))){
var state_29112__$1 = state_29112;
var statearr_29126_29148 = state_29112__$1;
(statearr_29126_29148[(2)] = null);

(statearr_29126_29148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (10))){
var inst_29104 = (state_29112[(2)]);
var state_29112__$1 = state_29112;
var statearr_29127_29149 = state_29112__$1;
(statearr_29127_29149[(2)] = inst_29104);

(statearr_29127_29149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29113 === (8))){
var inst_29094 = (state_29112[(7)]);
var state_29112__$1 = state_29112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29112__$1,(11),out,inst_29094);
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
});})(c__20309__auto___29139,out))
;
return ((function (switch__20244__auto__,c__20309__auto___29139,out){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_29131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29131[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_29131[(1)] = (1));

return statearr_29131;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_29112){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_29112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e29132){if((e29132 instanceof Object)){
var ex__20248__auto__ = e29132;
var statearr_29133_29150 = state_29112;
(statearr_29133_29150[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29151 = state_29112;
state_29112 = G__29151;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_29112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_29112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___29139,out))
})();
var state__20311__auto__ = (function (){var statearr_29134 = f__20310__auto__.call(null);
(statearr_29134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___29139);

return statearr_29134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___29139,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29159 = (function (map_LT_,f,ch,meta29160){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29160 = meta29160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29161,meta29160__$1){
var self__ = this;
var _29161__$1 = this;
return (new cljs.core.async.t_cljs$core$async29159(self__.map_LT_,self__.f,self__.ch,meta29160__$1));
});

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29161){
var self__ = this;
var _29161__$1 = this;
return self__.meta29160;
});

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29162 = (function (map_LT_,f,ch,meta29160,_,fn1,meta29163){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29160 = meta29160;
this._ = _;
this.fn1 = fn1;
this.meta29163 = meta29163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29164,meta29163__$1){
var self__ = this;
var _29164__$1 = this;
return (new cljs.core.async.t_cljs$core$async29162(self__.map_LT_,self__.f,self__.ch,self__.meta29160,self__._,self__.fn1,meta29163__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29164){
var self__ = this;
var _29164__$1 = this;
return self__.meta29163;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29152_SHARP_){
return f1.call(null,(((p1__29152_SHARP_ == null))?null:self__.f.call(null,p1__29152_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29162.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29160","meta29160",-1388683590,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29159","cljs.core.async/t_cljs$core$async29159",1822066648,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29163","meta29163",-1156052503,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29162";

cljs.core.async.t_cljs$core$async29162.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async29162");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29162 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29162(map_LT___$1,f__$1,ch__$1,meta29160__$1,___$2,fn1__$1,meta29163){
return (new cljs.core.async.t_cljs$core$async29162(map_LT___$1,f__$1,ch__$1,meta29160__$1,___$2,fn1__$1,meta29163));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29162(self__.map_LT_,self__.f,self__.ch,self__.meta29160,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29159.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29160","meta29160",-1388683590,null)], null);
});

cljs.core.async.t_cljs$core$async29159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29159";

cljs.core.async.t_cljs$core$async29159.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async29159");
});

cljs.core.async.__GT_t_cljs$core$async29159 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29159(map_LT___$1,f__$1,ch__$1,meta29160){
return (new cljs.core.async.t_cljs$core$async29159(map_LT___$1,f__$1,ch__$1,meta29160));
});

}

return (new cljs.core.async.t_cljs$core$async29159(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29168 = (function (map_GT_,f,ch,meta29169){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29169 = meta29169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29170,meta29169__$1){
var self__ = this;
var _29170__$1 = this;
return (new cljs.core.async.t_cljs$core$async29168(self__.map_GT_,self__.f,self__.ch,meta29169__$1));
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29170){
var self__ = this;
var _29170__$1 = this;
return self__.meta29169;
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29168.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29169","meta29169",-1148610246,null)], null);
});

cljs.core.async.t_cljs$core$async29168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29168";

cljs.core.async.t_cljs$core$async29168.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async29168");
});

cljs.core.async.__GT_t_cljs$core$async29168 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29168(map_GT___$1,f__$1,ch__$1,meta29169){
return (new cljs.core.async.t_cljs$core$async29168(map_GT___$1,f__$1,ch__$1,meta29169));
});

}

return (new cljs.core.async.t_cljs$core$async29168(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29174 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29174 = (function (filter_GT_,p,ch,meta29175){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29175 = meta29175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29176,meta29175__$1){
var self__ = this;
var _29176__$1 = this;
return (new cljs.core.async.t_cljs$core$async29174(self__.filter_GT_,self__.p,self__.ch,meta29175__$1));
});

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29176){
var self__ = this;
var _29176__$1 = this;
return self__.meta29175;
});

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29174.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29175","meta29175",93926995,null)], null);
});

cljs.core.async.t_cljs$core$async29174.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29174";

cljs.core.async.t_cljs$core$async29174.cljs$lang$ctorPrWriter = (function (this__17115__auto__,writer__17116__auto__,opt__17117__auto__){
return cljs.core._write.call(null,writer__17116__auto__,"cljs.core.async/t_cljs$core$async29174");
});

cljs.core.async.__GT_t_cljs$core$async29174 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29174(filter_GT___$1,p__$1,ch__$1,meta29175){
return (new cljs.core.async.t_cljs$core$async29174(filter_GT___$1,p__$1,ch__$1,meta29175));
});

}

return (new cljs.core.async.t_cljs$core$async29174(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29177 = [];
var len__17575__auto___29221 = arguments.length;
var i__17576__auto___29222 = (0);
while(true){
if((i__17576__auto___29222 < len__17575__auto___29221)){
args29177.push((arguments[i__17576__auto___29222]));

var G__29223 = (i__17576__auto___29222 + (1));
i__17576__auto___29222 = G__29223;
continue;
} else {
}
break;
}

var G__29179 = args29177.length;
switch (G__29179) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29177.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20309__auto___29225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___29225,out){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___29225,out){
return (function (state_29200){
var state_val_29201 = (state_29200[(1)]);
if((state_val_29201 === (7))){
var inst_29196 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
var statearr_29202_29226 = state_29200__$1;
(statearr_29202_29226[(2)] = inst_29196);

(statearr_29202_29226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (1))){
var state_29200__$1 = state_29200;
var statearr_29203_29227 = state_29200__$1;
(statearr_29203_29227[(2)] = null);

(statearr_29203_29227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (4))){
var inst_29182 = (state_29200[(7)]);
var inst_29182__$1 = (state_29200[(2)]);
var inst_29183 = (inst_29182__$1 == null);
var state_29200__$1 = (function (){var statearr_29204 = state_29200;
(statearr_29204[(7)] = inst_29182__$1);

return statearr_29204;
})();
if(cljs.core.truth_(inst_29183)){
var statearr_29205_29228 = state_29200__$1;
(statearr_29205_29228[(1)] = (5));

} else {
var statearr_29206_29229 = state_29200__$1;
(statearr_29206_29229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (6))){
var inst_29182 = (state_29200[(7)]);
var inst_29187 = p.call(null,inst_29182);
var state_29200__$1 = state_29200;
if(cljs.core.truth_(inst_29187)){
var statearr_29207_29230 = state_29200__$1;
(statearr_29207_29230[(1)] = (8));

} else {
var statearr_29208_29231 = state_29200__$1;
(statearr_29208_29231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (3))){
var inst_29198 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29200__$1,inst_29198);
} else {
if((state_val_29201 === (2))){
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29200__$1,(4),ch);
} else {
if((state_val_29201 === (11))){
var inst_29190 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
var statearr_29209_29232 = state_29200__$1;
(statearr_29209_29232[(2)] = inst_29190);

(statearr_29209_29232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (9))){
var state_29200__$1 = state_29200;
var statearr_29210_29233 = state_29200__$1;
(statearr_29210_29233[(2)] = null);

(statearr_29210_29233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (5))){
var inst_29185 = cljs.core.async.close_BANG_.call(null,out);
var state_29200__$1 = state_29200;
var statearr_29211_29234 = state_29200__$1;
(statearr_29211_29234[(2)] = inst_29185);

(statearr_29211_29234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (10))){
var inst_29193 = (state_29200[(2)]);
var state_29200__$1 = (function (){var statearr_29212 = state_29200;
(statearr_29212[(8)] = inst_29193);

return statearr_29212;
})();
var statearr_29213_29235 = state_29200__$1;
(statearr_29213_29235[(2)] = null);

(statearr_29213_29235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (8))){
var inst_29182 = (state_29200[(7)]);
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29200__$1,(11),out,inst_29182);
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
});})(c__20309__auto___29225,out))
;
return ((function (switch__20244__auto__,c__20309__auto___29225,out){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_29217 = [null,null,null,null,null,null,null,null,null];
(statearr_29217[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_29217[(1)] = (1));

return statearr_29217;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_29200){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_29200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object)){
var ex__20248__auto__ = e29218;
var statearr_29219_29236 = state_29200;
(statearr_29219_29236[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29237 = state_29200;
state_29200 = G__29237;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_29200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_29200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___29225,out))
})();
var state__20311__auto__ = (function (){var statearr_29220 = f__20310__auto__.call(null);
(statearr_29220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___29225);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___29225,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29238 = [];
var len__17575__auto___29241 = arguments.length;
var i__17576__auto___29242 = (0);
while(true){
if((i__17576__auto___29242 < len__17575__auto___29241)){
args29238.push((arguments[i__17576__auto___29242]));

var G__29243 = (i__17576__auto___29242 + (1));
i__17576__auto___29242 = G__29243;
continue;
} else {
}
break;
}

var G__29240 = args29238.length;
switch (G__29240) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29238.length)].join('')));

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
var c__20309__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto__){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto__){
return (function (state_29410){
var state_val_29411 = (state_29410[(1)]);
if((state_val_29411 === (7))){
var inst_29406 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29412_29453 = state_29410__$1;
(statearr_29412_29453[(2)] = inst_29406);

(statearr_29412_29453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (20))){
var inst_29376 = (state_29410[(7)]);
var inst_29387 = (state_29410[(2)]);
var inst_29388 = cljs.core.next.call(null,inst_29376);
var inst_29362 = inst_29388;
var inst_29363 = null;
var inst_29364 = (0);
var inst_29365 = (0);
var state_29410__$1 = (function (){var statearr_29413 = state_29410;
(statearr_29413[(8)] = inst_29387);

(statearr_29413[(9)] = inst_29362);

(statearr_29413[(10)] = inst_29364);

(statearr_29413[(11)] = inst_29365);

(statearr_29413[(12)] = inst_29363);

return statearr_29413;
})();
var statearr_29414_29454 = state_29410__$1;
(statearr_29414_29454[(2)] = null);

(statearr_29414_29454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (1))){
var state_29410__$1 = state_29410;
var statearr_29415_29455 = state_29410__$1;
(statearr_29415_29455[(2)] = null);

(statearr_29415_29455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (4))){
var inst_29351 = (state_29410[(13)]);
var inst_29351__$1 = (state_29410[(2)]);
var inst_29352 = (inst_29351__$1 == null);
var state_29410__$1 = (function (){var statearr_29416 = state_29410;
(statearr_29416[(13)] = inst_29351__$1);

return statearr_29416;
})();
if(cljs.core.truth_(inst_29352)){
var statearr_29417_29456 = state_29410__$1;
(statearr_29417_29456[(1)] = (5));

} else {
var statearr_29418_29457 = state_29410__$1;
(statearr_29418_29457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (15))){
var state_29410__$1 = state_29410;
var statearr_29422_29458 = state_29410__$1;
(statearr_29422_29458[(2)] = null);

(statearr_29422_29458[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (21))){
var state_29410__$1 = state_29410;
var statearr_29423_29459 = state_29410__$1;
(statearr_29423_29459[(2)] = null);

(statearr_29423_29459[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (13))){
var inst_29362 = (state_29410[(9)]);
var inst_29364 = (state_29410[(10)]);
var inst_29365 = (state_29410[(11)]);
var inst_29363 = (state_29410[(12)]);
var inst_29372 = (state_29410[(2)]);
var inst_29373 = (inst_29365 + (1));
var tmp29419 = inst_29362;
var tmp29420 = inst_29364;
var tmp29421 = inst_29363;
var inst_29362__$1 = tmp29419;
var inst_29363__$1 = tmp29421;
var inst_29364__$1 = tmp29420;
var inst_29365__$1 = inst_29373;
var state_29410__$1 = (function (){var statearr_29424 = state_29410;
(statearr_29424[(14)] = inst_29372);

(statearr_29424[(9)] = inst_29362__$1);

(statearr_29424[(10)] = inst_29364__$1);

(statearr_29424[(11)] = inst_29365__$1);

(statearr_29424[(12)] = inst_29363__$1);

return statearr_29424;
})();
var statearr_29425_29460 = state_29410__$1;
(statearr_29425_29460[(2)] = null);

(statearr_29425_29460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (22))){
var state_29410__$1 = state_29410;
var statearr_29426_29461 = state_29410__$1;
(statearr_29426_29461[(2)] = null);

(statearr_29426_29461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (6))){
var inst_29351 = (state_29410[(13)]);
var inst_29360 = f.call(null,inst_29351);
var inst_29361 = cljs.core.seq.call(null,inst_29360);
var inst_29362 = inst_29361;
var inst_29363 = null;
var inst_29364 = (0);
var inst_29365 = (0);
var state_29410__$1 = (function (){var statearr_29427 = state_29410;
(statearr_29427[(9)] = inst_29362);

(statearr_29427[(10)] = inst_29364);

(statearr_29427[(11)] = inst_29365);

(statearr_29427[(12)] = inst_29363);

return statearr_29427;
})();
var statearr_29428_29462 = state_29410__$1;
(statearr_29428_29462[(2)] = null);

(statearr_29428_29462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (17))){
var inst_29376 = (state_29410[(7)]);
var inst_29380 = cljs.core.chunk_first.call(null,inst_29376);
var inst_29381 = cljs.core.chunk_rest.call(null,inst_29376);
var inst_29382 = cljs.core.count.call(null,inst_29380);
var inst_29362 = inst_29381;
var inst_29363 = inst_29380;
var inst_29364 = inst_29382;
var inst_29365 = (0);
var state_29410__$1 = (function (){var statearr_29429 = state_29410;
(statearr_29429[(9)] = inst_29362);

(statearr_29429[(10)] = inst_29364);

(statearr_29429[(11)] = inst_29365);

(statearr_29429[(12)] = inst_29363);

return statearr_29429;
})();
var statearr_29430_29463 = state_29410__$1;
(statearr_29430_29463[(2)] = null);

(statearr_29430_29463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (3))){
var inst_29408 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29410__$1,inst_29408);
} else {
if((state_val_29411 === (12))){
var inst_29396 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29431_29464 = state_29410__$1;
(statearr_29431_29464[(2)] = inst_29396);

(statearr_29431_29464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (2))){
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29410__$1,(4),in$);
} else {
if((state_val_29411 === (23))){
var inst_29404 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29432_29465 = state_29410__$1;
(statearr_29432_29465[(2)] = inst_29404);

(statearr_29432_29465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (19))){
var inst_29391 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29433_29466 = state_29410__$1;
(statearr_29433_29466[(2)] = inst_29391);

(statearr_29433_29466[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (11))){
var inst_29362 = (state_29410[(9)]);
var inst_29376 = (state_29410[(7)]);
var inst_29376__$1 = cljs.core.seq.call(null,inst_29362);
var state_29410__$1 = (function (){var statearr_29434 = state_29410;
(statearr_29434[(7)] = inst_29376__$1);

return statearr_29434;
})();
if(inst_29376__$1){
var statearr_29435_29467 = state_29410__$1;
(statearr_29435_29467[(1)] = (14));

} else {
var statearr_29436_29468 = state_29410__$1;
(statearr_29436_29468[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (9))){
var inst_29398 = (state_29410[(2)]);
var inst_29399 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29410__$1 = (function (){var statearr_29437 = state_29410;
(statearr_29437[(15)] = inst_29398);

return statearr_29437;
})();
if(cljs.core.truth_(inst_29399)){
var statearr_29438_29469 = state_29410__$1;
(statearr_29438_29469[(1)] = (21));

} else {
var statearr_29439_29470 = state_29410__$1;
(statearr_29439_29470[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (5))){
var inst_29354 = cljs.core.async.close_BANG_.call(null,out);
var state_29410__$1 = state_29410;
var statearr_29440_29471 = state_29410__$1;
(statearr_29440_29471[(2)] = inst_29354);

(statearr_29440_29471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (14))){
var inst_29376 = (state_29410[(7)]);
var inst_29378 = cljs.core.chunked_seq_QMARK_.call(null,inst_29376);
var state_29410__$1 = state_29410;
if(inst_29378){
var statearr_29441_29472 = state_29410__$1;
(statearr_29441_29472[(1)] = (17));

} else {
var statearr_29442_29473 = state_29410__$1;
(statearr_29442_29473[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (16))){
var inst_29394 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29443_29474 = state_29410__$1;
(statearr_29443_29474[(2)] = inst_29394);

(statearr_29443_29474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (10))){
var inst_29365 = (state_29410[(11)]);
var inst_29363 = (state_29410[(12)]);
var inst_29370 = cljs.core._nth.call(null,inst_29363,inst_29365);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29410__$1,(13),out,inst_29370);
} else {
if((state_val_29411 === (18))){
var inst_29376 = (state_29410[(7)]);
var inst_29385 = cljs.core.first.call(null,inst_29376);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29410__$1,(20),out,inst_29385);
} else {
if((state_val_29411 === (8))){
var inst_29364 = (state_29410[(10)]);
var inst_29365 = (state_29410[(11)]);
var inst_29367 = (inst_29365 < inst_29364);
var inst_29368 = inst_29367;
var state_29410__$1 = state_29410;
if(cljs.core.truth_(inst_29368)){
var statearr_29444_29475 = state_29410__$1;
(statearr_29444_29475[(1)] = (10));

} else {
var statearr_29445_29476 = state_29410__$1;
(statearr_29445_29476[(1)] = (11));

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
});})(c__20309__auto__))
;
return ((function (switch__20244__auto__,c__20309__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20245__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20245__auto____0 = (function (){
var statearr_29449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29449[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20245__auto__);

(statearr_29449[(1)] = (1));

return statearr_29449;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20245__auto____1 = (function (state_29410){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_29410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e29450){if((e29450 instanceof Object)){
var ex__20248__auto__ = e29450;
var statearr_29451_29477 = state_29410;
(statearr_29451_29477[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29478 = state_29410;
state_29410 = G__29478;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20245__auto__ = function(state_29410){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20245__auto____1.call(this,state_29410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20245__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20245__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto__))
})();
var state__20311__auto__ = (function (){var statearr_29452 = f__20310__auto__.call(null);
(statearr_29452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto__);

return statearr_29452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto__))
);

return c__20309__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29479 = [];
var len__17575__auto___29482 = arguments.length;
var i__17576__auto___29483 = (0);
while(true){
if((i__17576__auto___29483 < len__17575__auto___29482)){
args29479.push((arguments[i__17576__auto___29483]));

var G__29484 = (i__17576__auto___29483 + (1));
i__17576__auto___29483 = G__29484;
continue;
} else {
}
break;
}

var G__29481 = args29479.length;
switch (G__29481) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29479.length)].join('')));

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
var args29486 = [];
var len__17575__auto___29489 = arguments.length;
var i__17576__auto___29490 = (0);
while(true){
if((i__17576__auto___29490 < len__17575__auto___29489)){
args29486.push((arguments[i__17576__auto___29490]));

var G__29491 = (i__17576__auto___29490 + (1));
i__17576__auto___29490 = G__29491;
continue;
} else {
}
break;
}

var G__29488 = args29486.length;
switch (G__29488) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29486.length)].join('')));

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
var args29493 = [];
var len__17575__auto___29544 = arguments.length;
var i__17576__auto___29545 = (0);
while(true){
if((i__17576__auto___29545 < len__17575__auto___29544)){
args29493.push((arguments[i__17576__auto___29545]));

var G__29546 = (i__17576__auto___29545 + (1));
i__17576__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var G__29495 = args29493.length;
switch (G__29495) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29493.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20309__auto___29548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___29548,out){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___29548,out){
return (function (state_29519){
var state_val_29520 = (state_29519[(1)]);
if((state_val_29520 === (7))){
var inst_29514 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29521_29549 = state_29519__$1;
(statearr_29521_29549[(2)] = inst_29514);

(statearr_29521_29549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (1))){
var inst_29496 = null;
var state_29519__$1 = (function (){var statearr_29522 = state_29519;
(statearr_29522[(7)] = inst_29496);

return statearr_29522;
})();
var statearr_29523_29550 = state_29519__$1;
(statearr_29523_29550[(2)] = null);

(statearr_29523_29550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (4))){
var inst_29499 = (state_29519[(8)]);
var inst_29499__$1 = (state_29519[(2)]);
var inst_29500 = (inst_29499__$1 == null);
var inst_29501 = cljs.core.not.call(null,inst_29500);
var state_29519__$1 = (function (){var statearr_29524 = state_29519;
(statearr_29524[(8)] = inst_29499__$1);

return statearr_29524;
})();
if(inst_29501){
var statearr_29525_29551 = state_29519__$1;
(statearr_29525_29551[(1)] = (5));

} else {
var statearr_29526_29552 = state_29519__$1;
(statearr_29526_29552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (6))){
var state_29519__$1 = state_29519;
var statearr_29527_29553 = state_29519__$1;
(statearr_29527_29553[(2)] = null);

(statearr_29527_29553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (3))){
var inst_29516 = (state_29519[(2)]);
var inst_29517 = cljs.core.async.close_BANG_.call(null,out);
var state_29519__$1 = (function (){var statearr_29528 = state_29519;
(statearr_29528[(9)] = inst_29516);

return statearr_29528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29519__$1,inst_29517);
} else {
if((state_val_29520 === (2))){
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29519__$1,(4),ch);
} else {
if((state_val_29520 === (11))){
var inst_29499 = (state_29519[(8)]);
var inst_29508 = (state_29519[(2)]);
var inst_29496 = inst_29499;
var state_29519__$1 = (function (){var statearr_29529 = state_29519;
(statearr_29529[(10)] = inst_29508);

(statearr_29529[(7)] = inst_29496);

return statearr_29529;
})();
var statearr_29530_29554 = state_29519__$1;
(statearr_29530_29554[(2)] = null);

(statearr_29530_29554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (9))){
var inst_29499 = (state_29519[(8)]);
var state_29519__$1 = state_29519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29519__$1,(11),out,inst_29499);
} else {
if((state_val_29520 === (5))){
var inst_29496 = (state_29519[(7)]);
var inst_29499 = (state_29519[(8)]);
var inst_29503 = cljs.core._EQ_.call(null,inst_29499,inst_29496);
var state_29519__$1 = state_29519;
if(inst_29503){
var statearr_29532_29555 = state_29519__$1;
(statearr_29532_29555[(1)] = (8));

} else {
var statearr_29533_29556 = state_29519__$1;
(statearr_29533_29556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (10))){
var inst_29511 = (state_29519[(2)]);
var state_29519__$1 = state_29519;
var statearr_29534_29557 = state_29519__$1;
(statearr_29534_29557[(2)] = inst_29511);

(statearr_29534_29557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29520 === (8))){
var inst_29496 = (state_29519[(7)]);
var tmp29531 = inst_29496;
var inst_29496__$1 = tmp29531;
var state_29519__$1 = (function (){var statearr_29535 = state_29519;
(statearr_29535[(7)] = inst_29496__$1);

return statearr_29535;
})();
var statearr_29536_29558 = state_29519__$1;
(statearr_29536_29558[(2)] = null);

(statearr_29536_29558[(1)] = (2));


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
});})(c__20309__auto___29548,out))
;
return ((function (switch__20244__auto__,c__20309__auto___29548,out){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_29540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29540[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_29540[(1)] = (1));

return statearr_29540;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_29519){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_29519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e29541){if((e29541 instanceof Object)){
var ex__20248__auto__ = e29541;
var statearr_29542_29559 = state_29519;
(statearr_29542_29559[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29560 = state_29519;
state_29519 = G__29560;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_29519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_29519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___29548,out))
})();
var state__20311__auto__ = (function (){var statearr_29543 = f__20310__auto__.call(null);
(statearr_29543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___29548);

return statearr_29543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___29548,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29561 = [];
var len__17575__auto___29631 = arguments.length;
var i__17576__auto___29632 = (0);
while(true){
if((i__17576__auto___29632 < len__17575__auto___29631)){
args29561.push((arguments[i__17576__auto___29632]));

var G__29633 = (i__17576__auto___29632 + (1));
i__17576__auto___29632 = G__29633;
continue;
} else {
}
break;
}

var G__29563 = args29561.length;
switch (G__29563) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29561.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20309__auto___29635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___29635,out){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___29635,out){
return (function (state_29601){
var state_val_29602 = (state_29601[(1)]);
if((state_val_29602 === (7))){
var inst_29597 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29603_29636 = state_29601__$1;
(statearr_29603_29636[(2)] = inst_29597);

(statearr_29603_29636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (1))){
var inst_29564 = (new Array(n));
var inst_29565 = inst_29564;
var inst_29566 = (0);
var state_29601__$1 = (function (){var statearr_29604 = state_29601;
(statearr_29604[(7)] = inst_29565);

(statearr_29604[(8)] = inst_29566);

return statearr_29604;
})();
var statearr_29605_29637 = state_29601__$1;
(statearr_29605_29637[(2)] = null);

(statearr_29605_29637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (4))){
var inst_29569 = (state_29601[(9)]);
var inst_29569__$1 = (state_29601[(2)]);
var inst_29570 = (inst_29569__$1 == null);
var inst_29571 = cljs.core.not.call(null,inst_29570);
var state_29601__$1 = (function (){var statearr_29606 = state_29601;
(statearr_29606[(9)] = inst_29569__$1);

return statearr_29606;
})();
if(inst_29571){
var statearr_29607_29638 = state_29601__$1;
(statearr_29607_29638[(1)] = (5));

} else {
var statearr_29608_29639 = state_29601__$1;
(statearr_29608_29639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (15))){
var inst_29591 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29609_29640 = state_29601__$1;
(statearr_29609_29640[(2)] = inst_29591);

(statearr_29609_29640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (13))){
var state_29601__$1 = state_29601;
var statearr_29610_29641 = state_29601__$1;
(statearr_29610_29641[(2)] = null);

(statearr_29610_29641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (6))){
var inst_29566 = (state_29601[(8)]);
var inst_29587 = (inst_29566 > (0));
var state_29601__$1 = state_29601;
if(cljs.core.truth_(inst_29587)){
var statearr_29611_29642 = state_29601__$1;
(statearr_29611_29642[(1)] = (12));

} else {
var statearr_29612_29643 = state_29601__$1;
(statearr_29612_29643[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (3))){
var inst_29599 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29601__$1,inst_29599);
} else {
if((state_val_29602 === (12))){
var inst_29565 = (state_29601[(7)]);
var inst_29589 = cljs.core.vec.call(null,inst_29565);
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29601__$1,(15),out,inst_29589);
} else {
if((state_val_29602 === (2))){
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29601__$1,(4),ch);
} else {
if((state_val_29602 === (11))){
var inst_29581 = (state_29601[(2)]);
var inst_29582 = (new Array(n));
var inst_29565 = inst_29582;
var inst_29566 = (0);
var state_29601__$1 = (function (){var statearr_29613 = state_29601;
(statearr_29613[(7)] = inst_29565);

(statearr_29613[(10)] = inst_29581);

(statearr_29613[(8)] = inst_29566);

return statearr_29613;
})();
var statearr_29614_29644 = state_29601__$1;
(statearr_29614_29644[(2)] = null);

(statearr_29614_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (9))){
var inst_29565 = (state_29601[(7)]);
var inst_29579 = cljs.core.vec.call(null,inst_29565);
var state_29601__$1 = state_29601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29601__$1,(11),out,inst_29579);
} else {
if((state_val_29602 === (5))){
var inst_29565 = (state_29601[(7)]);
var inst_29574 = (state_29601[(11)]);
var inst_29569 = (state_29601[(9)]);
var inst_29566 = (state_29601[(8)]);
var inst_29573 = (inst_29565[inst_29566] = inst_29569);
var inst_29574__$1 = (inst_29566 + (1));
var inst_29575 = (inst_29574__$1 < n);
var state_29601__$1 = (function (){var statearr_29615 = state_29601;
(statearr_29615[(12)] = inst_29573);

(statearr_29615[(11)] = inst_29574__$1);

return statearr_29615;
})();
if(cljs.core.truth_(inst_29575)){
var statearr_29616_29645 = state_29601__$1;
(statearr_29616_29645[(1)] = (8));

} else {
var statearr_29617_29646 = state_29601__$1;
(statearr_29617_29646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (14))){
var inst_29594 = (state_29601[(2)]);
var inst_29595 = cljs.core.async.close_BANG_.call(null,out);
var state_29601__$1 = (function (){var statearr_29619 = state_29601;
(statearr_29619[(13)] = inst_29594);

return statearr_29619;
})();
var statearr_29620_29647 = state_29601__$1;
(statearr_29620_29647[(2)] = inst_29595);

(statearr_29620_29647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (10))){
var inst_29585 = (state_29601[(2)]);
var state_29601__$1 = state_29601;
var statearr_29621_29648 = state_29601__$1;
(statearr_29621_29648[(2)] = inst_29585);

(statearr_29621_29648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29602 === (8))){
var inst_29565 = (state_29601[(7)]);
var inst_29574 = (state_29601[(11)]);
var tmp29618 = inst_29565;
var inst_29565__$1 = tmp29618;
var inst_29566 = inst_29574;
var state_29601__$1 = (function (){var statearr_29622 = state_29601;
(statearr_29622[(7)] = inst_29565__$1);

(statearr_29622[(8)] = inst_29566);

return statearr_29622;
})();
var statearr_29623_29649 = state_29601__$1;
(statearr_29623_29649[(2)] = null);

(statearr_29623_29649[(1)] = (2));


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
});})(c__20309__auto___29635,out))
;
return ((function (switch__20244__auto__,c__20309__auto___29635,out){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_29627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29627[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_29627[(1)] = (1));

return statearr_29627;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_29601){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_29601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e29628){if((e29628 instanceof Object)){
var ex__20248__auto__ = e29628;
var statearr_29629_29650 = state_29601;
(statearr_29629_29650[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29651 = state_29601;
state_29601 = G__29651;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_29601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_29601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___29635,out))
})();
var state__20311__auto__ = (function (){var statearr_29630 = f__20310__auto__.call(null);
(statearr_29630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___29635);

return statearr_29630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___29635,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29652 = [];
var len__17575__auto___29726 = arguments.length;
var i__17576__auto___29727 = (0);
while(true){
if((i__17576__auto___29727 < len__17575__auto___29726)){
args29652.push((arguments[i__17576__auto___29727]));

var G__29728 = (i__17576__auto___29727 + (1));
i__17576__auto___29727 = G__29728;
continue;
} else {
}
break;
}

var G__29654 = args29652.length;
switch (G__29654) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29652.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20309__auto___29730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20309__auto___29730,out){
return (function (){
var f__20310__auto__ = (function (){var switch__20244__auto__ = ((function (c__20309__auto___29730,out){
return (function (state_29696){
var state_val_29697 = (state_29696[(1)]);
if((state_val_29697 === (7))){
var inst_29692 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29698_29731 = state_29696__$1;
(statearr_29698_29731[(2)] = inst_29692);

(statearr_29698_29731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (1))){
var inst_29655 = [];
var inst_29656 = inst_29655;
var inst_29657 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29696__$1 = (function (){var statearr_29699 = state_29696;
(statearr_29699[(7)] = inst_29657);

(statearr_29699[(8)] = inst_29656);

return statearr_29699;
})();
var statearr_29700_29732 = state_29696__$1;
(statearr_29700_29732[(2)] = null);

(statearr_29700_29732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (4))){
var inst_29660 = (state_29696[(9)]);
var inst_29660__$1 = (state_29696[(2)]);
var inst_29661 = (inst_29660__$1 == null);
var inst_29662 = cljs.core.not.call(null,inst_29661);
var state_29696__$1 = (function (){var statearr_29701 = state_29696;
(statearr_29701[(9)] = inst_29660__$1);

return statearr_29701;
})();
if(inst_29662){
var statearr_29702_29733 = state_29696__$1;
(statearr_29702_29733[(1)] = (5));

} else {
var statearr_29703_29734 = state_29696__$1;
(statearr_29703_29734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (15))){
var inst_29686 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29704_29735 = state_29696__$1;
(statearr_29704_29735[(2)] = inst_29686);

(statearr_29704_29735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (13))){
var state_29696__$1 = state_29696;
var statearr_29705_29736 = state_29696__$1;
(statearr_29705_29736[(2)] = null);

(statearr_29705_29736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (6))){
var inst_29656 = (state_29696[(8)]);
var inst_29681 = inst_29656.length;
var inst_29682 = (inst_29681 > (0));
var state_29696__$1 = state_29696;
if(cljs.core.truth_(inst_29682)){
var statearr_29706_29737 = state_29696__$1;
(statearr_29706_29737[(1)] = (12));

} else {
var statearr_29707_29738 = state_29696__$1;
(statearr_29707_29738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (3))){
var inst_29694 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29696__$1,inst_29694);
} else {
if((state_val_29697 === (12))){
var inst_29656 = (state_29696[(8)]);
var inst_29684 = cljs.core.vec.call(null,inst_29656);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29696__$1,(15),out,inst_29684);
} else {
if((state_val_29697 === (2))){
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29696__$1,(4),ch);
} else {
if((state_val_29697 === (11))){
var inst_29660 = (state_29696[(9)]);
var inst_29664 = (state_29696[(10)]);
var inst_29674 = (state_29696[(2)]);
var inst_29675 = [];
var inst_29676 = inst_29675.push(inst_29660);
var inst_29656 = inst_29675;
var inst_29657 = inst_29664;
var state_29696__$1 = (function (){var statearr_29708 = state_29696;
(statearr_29708[(11)] = inst_29676);

(statearr_29708[(7)] = inst_29657);

(statearr_29708[(8)] = inst_29656);

(statearr_29708[(12)] = inst_29674);

return statearr_29708;
})();
var statearr_29709_29739 = state_29696__$1;
(statearr_29709_29739[(2)] = null);

(statearr_29709_29739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (9))){
var inst_29656 = (state_29696[(8)]);
var inst_29672 = cljs.core.vec.call(null,inst_29656);
var state_29696__$1 = state_29696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29696__$1,(11),out,inst_29672);
} else {
if((state_val_29697 === (5))){
var inst_29660 = (state_29696[(9)]);
var inst_29657 = (state_29696[(7)]);
var inst_29664 = (state_29696[(10)]);
var inst_29664__$1 = f.call(null,inst_29660);
var inst_29665 = cljs.core._EQ_.call(null,inst_29664__$1,inst_29657);
var inst_29666 = cljs.core.keyword_identical_QMARK_.call(null,inst_29657,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29667 = (inst_29665) || (inst_29666);
var state_29696__$1 = (function (){var statearr_29710 = state_29696;
(statearr_29710[(10)] = inst_29664__$1);

return statearr_29710;
})();
if(cljs.core.truth_(inst_29667)){
var statearr_29711_29740 = state_29696__$1;
(statearr_29711_29740[(1)] = (8));

} else {
var statearr_29712_29741 = state_29696__$1;
(statearr_29712_29741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (14))){
var inst_29689 = (state_29696[(2)]);
var inst_29690 = cljs.core.async.close_BANG_.call(null,out);
var state_29696__$1 = (function (){var statearr_29714 = state_29696;
(statearr_29714[(13)] = inst_29689);

return statearr_29714;
})();
var statearr_29715_29742 = state_29696__$1;
(statearr_29715_29742[(2)] = inst_29690);

(statearr_29715_29742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (10))){
var inst_29679 = (state_29696[(2)]);
var state_29696__$1 = state_29696;
var statearr_29716_29743 = state_29696__$1;
(statearr_29716_29743[(2)] = inst_29679);

(statearr_29716_29743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29697 === (8))){
var inst_29660 = (state_29696[(9)]);
var inst_29656 = (state_29696[(8)]);
var inst_29664 = (state_29696[(10)]);
var inst_29669 = inst_29656.push(inst_29660);
var tmp29713 = inst_29656;
var inst_29656__$1 = tmp29713;
var inst_29657 = inst_29664;
var state_29696__$1 = (function (){var statearr_29717 = state_29696;
(statearr_29717[(7)] = inst_29657);

(statearr_29717[(14)] = inst_29669);

(statearr_29717[(8)] = inst_29656__$1);

return statearr_29717;
})();
var statearr_29718_29744 = state_29696__$1;
(statearr_29718_29744[(2)] = null);

(statearr_29718_29744[(1)] = (2));


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
});})(c__20309__auto___29730,out))
;
return ((function (switch__20244__auto__,c__20309__auto___29730,out){
return (function() {
var cljs$core$async$state_machine__20245__auto__ = null;
var cljs$core$async$state_machine__20245__auto____0 = (function (){
var statearr_29722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29722[(0)] = cljs$core$async$state_machine__20245__auto__);

(statearr_29722[(1)] = (1));

return statearr_29722;
});
var cljs$core$async$state_machine__20245__auto____1 = (function (state_29696){
while(true){
var ret_value__20246__auto__ = (function (){try{while(true){
var result__20247__auto__ = switch__20244__auto__.call(null,state_29696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20247__auto__;
}
break;
}
}catch (e29723){if((e29723 instanceof Object)){
var ex__20248__auto__ = e29723;
var statearr_29724_29745 = state_29696;
(statearr_29724_29745[(5)] = ex__20248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29746 = state_29696;
state_29696 = G__29746;
continue;
} else {
return ret_value__20246__auto__;
}
break;
}
});
cljs$core$async$state_machine__20245__auto__ = function(state_29696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20245__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20245__auto____1.call(this,state_29696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20245__auto____0;
cljs$core$async$state_machine__20245__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20245__auto____1;
return cljs$core$async$state_machine__20245__auto__;
})()
;})(switch__20244__auto__,c__20309__auto___29730,out))
})();
var state__20311__auto__ = (function (){var statearr_29725 = f__20310__auto__.call(null);
(statearr_29725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20309__auto___29730);

return statearr_29725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20311__auto__);
});})(c__20309__auto___29730,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441561825676