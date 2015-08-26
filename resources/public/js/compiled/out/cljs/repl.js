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
var seq__26591_26603 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26592_26604 = null;
var count__26593_26605 = (0);
var i__26594_26606 = (0);
while(true){
if((i__26594_26606 < count__26593_26605)){
var f_26607 = cljs.core._nth.call(null,chunk__26592_26604,i__26594_26606);
cljs.core.println.call(null,"  ",f_26607);

var G__26608 = seq__26591_26603;
var G__26609 = chunk__26592_26604;
var G__26610 = count__26593_26605;
var G__26611 = (i__26594_26606 + (1));
seq__26591_26603 = G__26608;
chunk__26592_26604 = G__26609;
count__26593_26605 = G__26610;
i__26594_26606 = G__26611;
continue;
} else {
var temp__4126__auto___26612 = cljs.core.seq.call(null,seq__26591_26603);
if(temp__4126__auto___26612){
var seq__26591_26613__$1 = temp__4126__auto___26612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26591_26613__$1)){
var c__18906__auto___26614 = cljs.core.chunk_first.call(null,seq__26591_26613__$1);
var G__26615 = cljs.core.chunk_rest.call(null,seq__26591_26613__$1);
var G__26616 = c__18906__auto___26614;
var G__26617 = cljs.core.count.call(null,c__18906__auto___26614);
var G__26618 = (0);
seq__26591_26603 = G__26615;
chunk__26592_26604 = G__26616;
count__26593_26605 = G__26617;
i__26594_26606 = G__26618;
continue;
} else {
var f_26619 = cljs.core.first.call(null,seq__26591_26613__$1);
cljs.core.println.call(null,"  ",f_26619);

var G__26620 = cljs.core.next.call(null,seq__26591_26613__$1);
var G__26621 = null;
var G__26622 = (0);
var G__26623 = (0);
seq__26591_26603 = G__26620;
chunk__26592_26604 = G__26621;
count__26593_26605 = G__26622;
i__26594_26606 = G__26623;
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
var seq__26595 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26596 = null;
var count__26597 = (0);
var i__26598 = (0);
while(true){
if((i__26598 < count__26597)){
var vec__26599 = cljs.core._nth.call(null,chunk__26596,i__26598);
var name = cljs.core.nth.call(null,vec__26599,(0),null);
var map__26600 = cljs.core.nth.call(null,vec__26599,(1),null);
var map__26600__$1 = ((cljs.core.seq_QMARK_.call(null,map__26600))?cljs.core.apply.call(null,cljs.core.hash_map,map__26600):map__26600);
var arglists = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26600__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26624 = seq__26595;
var G__26625 = chunk__26596;
var G__26626 = count__26597;
var G__26627 = (i__26598 + (1));
seq__26595 = G__26624;
chunk__26596 = G__26625;
count__26597 = G__26626;
i__26598 = G__26627;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26595);
if(temp__4126__auto__){
var seq__26595__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26595__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__26595__$1);
var G__26628 = cljs.core.chunk_rest.call(null,seq__26595__$1);
var G__26629 = c__18906__auto__;
var G__26630 = cljs.core.count.call(null,c__18906__auto__);
var G__26631 = (0);
seq__26595 = G__26628;
chunk__26596 = G__26629;
count__26597 = G__26630;
i__26598 = G__26631;
continue;
} else {
var vec__26601 = cljs.core.first.call(null,seq__26595__$1);
var name = cljs.core.nth.call(null,vec__26601,(0),null);
var map__26602 = cljs.core.nth.call(null,vec__26601,(1),null);
var map__26602__$1 = ((cljs.core.seq_QMARK_.call(null,map__26602))?cljs.core.apply.call(null,cljs.core.hash_map,map__26602):map__26602);
var arglists = cljs.core.get.call(null,map__26602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26632 = cljs.core.next.call(null,seq__26595__$1);
var G__26633 = null;
var G__26634 = (0);
var G__26635 = (0);
seq__26595 = G__26632;
chunk__26596 = G__26633;
count__26597 = G__26634;
i__26598 = G__26635;
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

//# sourceMappingURL=repl.js.map?rel=1440626241536