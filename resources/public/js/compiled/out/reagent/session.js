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
var len__17575__auto___24769 = arguments.length;
var i__17576__auto___24770 = (0);
while(true){
if((i__17576__auto___24770 < len__17575__auto___24769)){
args__17582__auto__.push((arguments[i__17576__auto___24770]));

var G__24771 = (i__17576__auto___24770 + (1));
i__17576__auto___24770 = G__24771;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__24767){
var vec__24768 = p__24767;
var default$ = cljs.core.nth.call(null,vec__24768,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq24765){
var G__24766 = cljs.core.first.call(null,seq24765);
var seq24765__$1 = cljs.core.next.call(null,seq24765);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__24766,seq24765__$1);
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
var len__17575__auto___24776 = arguments.length;
var i__17576__auto___24777 = (0);
while(true){
if((i__17576__auto___24777 < len__17575__auto___24776)){
args__17582__auto__.push((arguments[i__17576__auto___24777]));

var G__24778 = (i__17576__auto___24777 + (1));
i__17576__auto___24777 = G__24778;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__24774){
var vec__24775 = p__24774;
var default$ = cljs.core.nth.call(null,vec__24775,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq24772){
var G__24773 = cljs.core.first.call(null,seq24772);
var seq24772__$1 = cljs.core.next.call(null,seq24772);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__24773,seq24772__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24781 = arguments.length;
var i__17576__auto___24782 = (0);
while(true){
if((i__17576__auto___24782 < len__17575__auto___24781)){
args__17582__auto__.push((arguments[i__17576__auto___24782]));

var G__24783 = (i__17576__auto___24782 + (1));
i__17576__auto___24782 = G__24783;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq24779){
var G__24780 = cljs.core.first.call(null,seq24779);
var seq24779__$1 = cljs.core.next.call(null,seq24779);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24780,seq24779__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__24784_SHARP_){
return cljs.core.assoc_in.call(null,p1__24784_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24789 = arguments.length;
var i__17576__auto___24790 = (0);
while(true){
if((i__17576__auto___24790 < len__17575__auto___24789)){
args__17582__auto__.push((arguments[i__17576__auto___24790]));

var G__24791 = (i__17576__auto___24790 + (1));
i__17576__auto___24790 = G__24791;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__24787){
var vec__24788 = p__24787;
var default$ = cljs.core.nth.call(null,vec__24788,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq24785){
var G__24786 = cljs.core.first.call(null,seq24785);
var seq24785__$1 = cljs.core.next.call(null,seq24785);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24786,seq24785__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__17582__auto__ = [];
var len__17575__auto___24796 = arguments.length;
var i__17576__auto___24797 = (0);
while(true){
if((i__17576__auto___24797 < len__17575__auto___24796)){
args__17582__auto__.push((arguments[i__17576__auto___24797]));

var G__24798 = (i__17576__auto___24797 + (1));
i__17576__auto___24797 = G__24798;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((1) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17583__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__24794){
var vec__24795 = p__24794;
var default$ = cljs.core.nth.call(null,vec__24795,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq24792){
var G__24793 = cljs.core.first.call(null,seq24792);
var seq24792__$1 = cljs.core.next.call(null,seq24792);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24793,seq24792__$1);
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
var len__17575__auto___24803 = arguments.length;
var i__17576__auto___24804 = (0);
while(true){
if((i__17576__auto___24804 < len__17575__auto___24803)){
args__17582__auto__.push((arguments[i__17576__auto___24804]));

var G__24805 = (i__17576__auto___24804 + (1));
i__17576__auto___24804 = G__24805;
continue;
} else {
}
break;
}

var argseq__17583__auto__ = ((((2) < args__17582__auto__.length))?(new cljs.core.IndexedSeq(args__17582__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17583__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__24799_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__24799_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq24800){
var G__24801 = cljs.core.first.call(null,seq24800);
var seq24800__$1 = cljs.core.next.call(null,seq24800);
var G__24802 = cljs.core.first.call(null,seq24800__$1);
var seq24800__$2 = cljs.core.next.call(null,seq24800__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24801,G__24802,seq24800__$2);
});

//# sourceMappingURL=session.js.map?rel=1441561821061