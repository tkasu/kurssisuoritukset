// Compiled by ClojureScript 1.7.107 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__5627__auto__ = [];
var len__5620__auto___6550 = arguments.length;
var i__5621__auto___6551 = (0);
while(true){
if((i__5621__auto___6551 < len__5620__auto___6550)){
args__5627__auto__.push((arguments[i__5621__auto___6551]));

var G__6552 = (i__5621__auto___6551 + (1));
i__5621__auto___6551 = G__6552;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__6548){
var vec__6549 = p__6548;
var default$ = cljs.core.nth.call(null,vec__6549,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq6546){
var G__6547 = cljs.core.first.call(null,seq6546);
var seq6546__$1 = cljs.core.next.call(null,seq6546);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__6547,seq6546__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__5627__auto__ = [];
var len__5620__auto___6557 = arguments.length;
var i__5621__auto___6558 = (0);
while(true){
if((i__5621__auto___6558 < len__5620__auto___6557)){
args__5627__auto__.push((arguments[i__5621__auto___6558]));

var G__6559 = (i__5621__auto___6558 + (1));
i__5621__auto___6558 = G__6559;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__6555){
var vec__6556 = p__6555;
var default$ = cljs.core.nth.call(null,vec__6556,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq6553){
var G__6554 = cljs.core.first.call(null,seq6553);
var seq6553__$1 = cljs.core.next.call(null,seq6553);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__6554,seq6553__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___6562 = arguments.length;
var i__5621__auto___6563 = (0);
while(true){
if((i__5621__auto___6563 < len__5620__auto___6562)){
args__5627__auto__.push((arguments[i__5621__auto___6563]));

var G__6564 = (i__5621__auto___6563 + (1));
i__5621__auto___6563 = G__6564;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq6560){
var G__6561 = cljs.core.first.call(null,seq6560);
var seq6560__$1 = cljs.core.next.call(null,seq6560);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6561,seq6560__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__6565_SHARP_){
return cljs.core.assoc_in.call(null,p1__6565_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___6570 = arguments.length;
var i__5621__auto___6571 = (0);
while(true){
if((i__5621__auto___6571 < len__5620__auto___6570)){
args__5627__auto__.push((arguments[i__5621__auto___6571]));

var G__6572 = (i__5621__auto___6571 + (1));
i__5621__auto___6571 = G__6572;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__6568){
var vec__6569 = p__6568;
var default$ = cljs.core.nth.call(null,vec__6569,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq6566){
var G__6567 = cljs.core.first.call(null,seq6566);
var seq6566__$1 = cljs.core.next.call(null,seq6566);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6567,seq6566__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___6577 = arguments.length;
var i__5621__auto___6578 = (0);
while(true){
if((i__5621__auto___6578 < len__5620__auto___6577)){
args__5627__auto__.push((arguments[i__5621__auto___6578]));

var G__6579 = (i__5621__auto___6578 + (1));
i__5621__auto___6578 = G__6579;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((1) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5628__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__6575){
var vec__6576 = p__6575;
var default$ = cljs.core.nth.call(null,vec__6576,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq6573){
var G__6574 = cljs.core.first.call(null,seq6573);
var seq6573__$1 = cljs.core.next.call(null,seq6573);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6574,seq6573__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__5627__auto__ = [];
var len__5620__auto___6584 = arguments.length;
var i__5621__auto___6585 = (0);
while(true){
if((i__5621__auto___6585 < len__5620__auto___6584)){
args__5627__auto__.push((arguments[i__5621__auto___6585]));

var G__6586 = (i__5621__auto___6585 + (1));
i__5621__auto___6585 = G__6586;
continue;
} else {
}
break;
}

var argseq__5628__auto__ = ((((2) < args__5627__auto__.length))?(new cljs.core.IndexedSeq(args__5627__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5628__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__6580_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__6580_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq6581){
var G__6582 = cljs.core.first.call(null,seq6581);
var seq6581__$1 = cljs.core.next.call(null,seq6581);
var G__6583 = cljs.core.first.call(null,seq6581__$1);
var seq6581__$2 = cljs.core.next.call(null,seq6581__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6582,G__6583,seq6581__$2);
});

//# sourceMappingURL=session.js.map?rel=1441135591288