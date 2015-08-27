// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26585_26597 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26586_26598 = null;
var count__26587_26599 = (0);
var i__26588_26600 = (0);
while(true){
if((i__26588_26600 < count__26587_26599)){
var f_26601 = cljs.core._nth.call(null,chunk__26586_26598,i__26588_26600);
cljs.core.println.call(null,"  ",f_26601);

var G__26602 = seq__26585_26597;
var G__26603 = chunk__26586_26598;
var G__26604 = count__26587_26599;
var G__26605 = (i__26588_26600 + (1));
seq__26585_26597 = G__26602;
chunk__26586_26598 = G__26603;
count__26587_26599 = G__26604;
i__26588_26600 = G__26605;
continue;
} else {
var temp__4126__auto___26606 = cljs.core.seq.call(null,seq__26585_26597);
if(temp__4126__auto___26606){
var seq__26585_26607__$1 = temp__4126__auto___26606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26585_26607__$1)){
var c__18906__auto___26608 = cljs.core.chunk_first.call(null,seq__26585_26607__$1);
var G__26609 = cljs.core.chunk_rest.call(null,seq__26585_26607__$1);
var G__26610 = c__18906__auto___26608;
var G__26611 = cljs.core.count.call(null,c__18906__auto___26608);
var G__26612 = (0);
seq__26585_26597 = G__26609;
chunk__26586_26598 = G__26610;
count__26587_26599 = G__26611;
i__26588_26600 = G__26612;
continue;
} else {
var f_26613 = cljs.core.first.call(null,seq__26585_26607__$1);
cljs.core.println.call(null,"  ",f_26613);

var G__26614 = cljs.core.next.call(null,seq__26585_26607__$1);
var G__26615 = null;
var G__26616 = (0);
var G__26617 = (0);
seq__26585_26597 = G__26614;
chunk__26586_26598 = G__26615;
count__26587_26599 = G__26616;
i__26588_26600 = G__26617;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18121__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26589 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26590 = null;
var count__26591 = (0);
var i__26592 = (0);
while(true){
if((i__26592 < count__26591)){
var vec__26593 = cljs.core._nth.call(null,chunk__26590,i__26592);
var name = cljs.core.nth.call(null,vec__26593,(0),null);
var map__26594 = cljs.core.nth.call(null,vec__26593,(1),null);
var map__26594__$1 = ((cljs.core.seq_QMARK_.call(null,map__26594))?cljs.core.apply.call(null,cljs.core.hash_map,map__26594):map__26594);
var arglists = cljs.core.get.call(null,map__26594__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26594__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26618 = seq__26589;
var G__26619 = chunk__26590;
var G__26620 = count__26591;
var G__26621 = (i__26592 + (1));
seq__26589 = G__26618;
chunk__26590 = G__26619;
count__26591 = G__26620;
i__26592 = G__26621;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26589);
if(temp__4126__auto__){
var seq__26589__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26589__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__26589__$1);
var G__26622 = cljs.core.chunk_rest.call(null,seq__26589__$1);
var G__26623 = c__18906__auto__;
var G__26624 = cljs.core.count.call(null,c__18906__auto__);
var G__26625 = (0);
seq__26589 = G__26622;
chunk__26590 = G__26623;
count__26591 = G__26624;
i__26592 = G__26625;
continue;
} else {
var vec__26595 = cljs.core.first.call(null,seq__26589__$1);
var name = cljs.core.nth.call(null,vec__26595,(0),null);
var map__26596 = cljs.core.nth.call(null,vec__26595,(1),null);
var map__26596__$1 = ((cljs.core.seq_QMARK_.call(null,map__26596))?cljs.core.apply.call(null,cljs.core.hash_map,map__26596):map__26596);
var arglists = cljs.core.get.call(null,map__26596__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26596__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26626 = cljs.core.next.call(null,seq__26589__$1);
var G__26627 = null;
var G__26628 = (0);
var G__26629 = (0);
seq__26589 = G__26626;
chunk__26590 = G__26627;
count__26591 = G__26628;
i__26592 = G__26629;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1440697837940