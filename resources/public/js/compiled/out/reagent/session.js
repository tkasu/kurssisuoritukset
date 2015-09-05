// Compiled by ClojureScript 1.7.107 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24326 = arguments.length;
var i__17576__auto___24327 = (0);
while(true){
if((i__17576__auto___24327 < len__17575__auto___24326)){
args__17582__auto__.push((arguments[i__17576__auto___24327]));

var G__24328 = (i__17576__auto___24327 + (1));
i__17576__auto___24327 = G__24328;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__24324){
var vec__24325 = p__24324;
var default$ = cljs.core.nth.call(null,vec__24325,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq24322){
var G__24323 = cljs.core.first.call(null,seq24322);
var seq24322__$1 = cljs.core.next.call(null,seq24322);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__24323,seq24322__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24333 = arguments.length;
var i__17576__auto___24334 = (0);
while(true){
if((i__17576__auto___24334 < len__17575__auto___24333)){
args__17582__auto__.push((arguments[i__17576__auto___24334]));

var G__24335 = (i__17576__auto___24334 + (1));
i__17576__auto___24334 = G__24335;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__24331){
var vec__24332 = p__24331;
var default$ = cljs.core.nth.call(null,vec__24332,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq24329){
var G__24330 = cljs.core.first.call(null,seq24329);
var seq24329__$1 = cljs.core.next.call(null,seq24329);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__24330,seq24329__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24338 = arguments.length;
var i__17576__auto___24339 = (0);
while(true){
if((i__17576__auto___24339 < len__17575__auto___24338)){
args__17582__auto__.push((arguments[i__17576__auto___24339]));

var G__24340 = (i__17576__auto___24339 + (1));
i__17576__auto___24339 = G__24340;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq24336){
var G__24337 = cljs.core.first.call(null,seq24336);
var seq24336__$1 = cljs.core.next.call(null,seq24336);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24337,seq24336__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__24341_SHARP_){
return cljs.core.assoc_in.call(null,p1__24341_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24346 = arguments.length;
var i__17576__auto___24347 = (0);
while(true){
if((i__17576__auto___24347 < len__17575__auto___24346)){
args__17582__auto__.push((arguments[i__17576__auto___24347]));

var G__24348 = (i__17576__auto___24347 + (1));
i__17576__auto___24347 = G__24348;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__24344){
var vec__24345 = p__24344;
var default$ = cljs.core.nth.call(null,vec__24345,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq24342){
var G__24343 = cljs.core.first.call(null,seq24342);
var seq24342__$1 = cljs.core.next.call(null,seq24342);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24343,seq24342__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24353 = arguments.length;
var i__17576__auto___24354 = (0);
while(true){
if((i__17576__auto___24354 < len__17575__auto___24353)){
args__17582__auto__.push((arguments[i__17576__auto___24354]));

var G__24355 = (i__17576__auto___24354 + (1));
i__17576__auto___24354 = G__24355;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__24351){
var vec__24352 = p__24351;
var default$ = cljs.core.nth.call(null,vec__24352,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq24349){
var G__24350 = cljs.core.first.call(null,seq24349);
var seq24349__$1 = cljs.core.next.call(null,seq24349);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24350,seq24349__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24360 = arguments.length;
var i__17576__auto___24361 = (0);
while(true){
if((i__17576__auto___24361 < len__17575__auto___24360)){
args__17582__auto__.push((arguments[i__17576__auto___24361]));

var G__24362 = (i__17576__auto___24361 + (1));
i__17576__auto___24361 = G__24362;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((2) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17583__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__24356_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__24356_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq24357){
var G__24358 = cljs.core.first.call(null,seq24357);
var seq24357__$1 = cljs.core.next.call(null,seq24357);
var G__24359 = cljs.core.first.call(null,seq24357__$1);
var seq24357__$2 = cljs.core.next.call(null,seq24357__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24358,G__24359,seq24357__$2);
});

//# sourceMappingURL=session.js.map?rel=1441453636309