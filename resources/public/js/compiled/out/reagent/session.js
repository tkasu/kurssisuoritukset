// Compiled by ClojureScript 1.7.107 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__19709__auto__ = [];
var len__19702__auto___26412 = arguments.length;
var i__19703__auto___26413 = (0);
while(true){
if((i__19703__auto___26413 < len__19702__auto___26412)){
args__19709__auto__.push((arguments[i__19703__auto___26413]));

var G__26414 = (i__19703__auto___26413 + (1));
i__19703__auto___26413 = G__26414;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((1) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19710__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__26410){
var vec__26411 = p__26410;
var default$ = cljs.core.nth.call(null,vec__26411,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq26408){
var G__26409 = cljs.core.first.call(null,seq26408);
var seq26408__$1 = cljs.core.next.call(null,seq26408);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__26409,seq26408__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__19709__auto__ = [];
var len__19702__auto___26419 = arguments.length;
var i__19703__auto___26420 = (0);
while(true){
if((i__19703__auto___26420 < len__19702__auto___26419)){
args__19709__auto__.push((arguments[i__19703__auto___26420]));

var G__26421 = (i__19703__auto___26420 + (1));
i__19703__auto___26420 = G__26421;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((1) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19710__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__26417){
var vec__26418 = p__26417;
var default$ = cljs.core.nth.call(null,vec__26418,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq26415){
var G__26416 = cljs.core.first.call(null,seq26415);
var seq26415__$1 = cljs.core.next.call(null,seq26415);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__26416,seq26415__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__19709__auto__ = [];
var len__19702__auto___26424 = arguments.length;
var i__19703__auto___26425 = (0);
while(true){
if((i__19703__auto___26425 < len__19702__auto___26424)){
args__19709__auto__.push((arguments[i__19703__auto___26425]));

var G__26426 = (i__19703__auto___26425 + (1));
i__19703__auto___26425 = G__26426;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((1) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19710__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq26422){
var G__26423 = cljs.core.first.call(null,seq26422);
var seq26422__$1 = cljs.core.next.call(null,seq26422);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26423,seq26422__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__26427_SHARP_){
return cljs.core.assoc_in.call(null,p1__26427_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__19709__auto__ = [];
var len__19702__auto___26432 = arguments.length;
var i__19703__auto___26433 = (0);
while(true){
if((i__19703__auto___26433 < len__19702__auto___26432)){
args__19709__auto__.push((arguments[i__19703__auto___26433]));

var G__26434 = (i__19703__auto___26433 + (1));
i__19703__auto___26433 = G__26434;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((1) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19710__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__26430){
var vec__26431 = p__26430;
var default$ = cljs.core.nth.call(null,vec__26431,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq26428){
var G__26429 = cljs.core.first.call(null,seq26428);
var seq26428__$1 = cljs.core.next.call(null,seq26428);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26429,seq26428__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__19709__auto__ = [];
var len__19702__auto___26439 = arguments.length;
var i__19703__auto___26440 = (0);
while(true){
if((i__19703__auto___26440 < len__19702__auto___26439)){
args__19709__auto__.push((arguments[i__19703__auto___26440]));

var G__26441 = (i__19703__auto___26440 + (1));
i__19703__auto___26440 = G__26441;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((1) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19710__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__26437){
var vec__26438 = p__26437;
var default$ = cljs.core.nth.call(null,vec__26438,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq26435){
var G__26436 = cljs.core.first.call(null,seq26435);
var seq26435__$1 = cljs.core.next.call(null,seq26435);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26436,seq26435__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__19709__auto__ = [];
var len__19702__auto___26446 = arguments.length;
var i__19703__auto___26447 = (0);
while(true){
if((i__19703__auto___26447 < len__19702__auto___26446)){
args__19709__auto__.push((arguments[i__19703__auto___26447]));

var G__26448 = (i__19703__auto___26447 + (1));
i__19703__auto___26447 = G__26448;
continue;
} else {
}
break;
}

var argseq__19710__auto__ = ((((2) < args__19709__auto__.length))?(new cljs.core.IndexedSeq(args__19709__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19710__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__26442_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__26442_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq26443){
var G__26444 = cljs.core.first.call(null,seq26443);
var seq26443__$1 = cljs.core.next.call(null,seq26443);
var G__26445 = cljs.core.first.call(null,seq26443__$1);
var seq26443__$2 = cljs.core.next.call(null,seq26443__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26444,G__26445,seq26443__$2);
});

//# sourceMappingURL=session.js.map?rel=1441303748550