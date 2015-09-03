// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__27520_27534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27521_27535 = null;
var count__27522_27536 = (0);
var i__27523_27537 = (0);
while(true){
if((i__27523_27537 < count__27522_27536)){
var f_27538 = cljs.core._nth.call(null,chunk__27521_27535,i__27523_27537);
cljs.core.println.call(null,"  ",f_27538);

var G__27539 = seq__27520_27534;
var G__27540 = chunk__27521_27535;
var G__27541 = count__27522_27536;
var G__27542 = (i__27523_27537 + (1));
seq__27520_27534 = G__27539;
chunk__27521_27535 = G__27540;
count__27522_27536 = G__27541;
i__27523_27537 = G__27542;
continue;
} else {
var temp__4425__auto___27543 = cljs.core.seq.call(null,seq__27520_27534);
if(temp__4425__auto___27543){
var seq__27520_27544__$1 = temp__4425__auto___27543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27520_27544__$1)){
var c__19447__auto___27545 = cljs.core.chunk_first.call(null,seq__27520_27544__$1);
var G__27546 = cljs.core.chunk_rest.call(null,seq__27520_27544__$1);
var G__27547 = c__19447__auto___27545;
var G__27548 = cljs.core.count.call(null,c__19447__auto___27545);
var G__27549 = (0);
seq__27520_27534 = G__27546;
chunk__27521_27535 = G__27547;
count__27522_27536 = G__27548;
i__27523_27537 = G__27549;
continue;
} else {
var f_27550 = cljs.core.first.call(null,seq__27520_27544__$1);
cljs.core.println.call(null,"  ",f_27550);

var G__27551 = cljs.core.next.call(null,seq__27520_27544__$1);
var G__27552 = null;
var G__27553 = (0);
var G__27554 = (0);
seq__27520_27534 = G__27551;
chunk__27521_27535 = G__27552;
count__27522_27536 = G__27553;
i__27523_27537 = G__27554;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27555 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18644__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18644__auto__)){
return or__18644__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27555);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27555)))?cljs.core.second.call(null,arglists_27555):arglists_27555));
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
var seq__27524 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27525 = null;
var count__27526 = (0);
var i__27527 = (0);
while(true){
if((i__27527 < count__27526)){
var vec__27528 = cljs.core._nth.call(null,chunk__27525,i__27527);
var name = cljs.core.nth.call(null,vec__27528,(0),null);
var map__27529 = cljs.core.nth.call(null,vec__27528,(1),null);
var map__27529__$1 = ((((!((map__27529 == null)))?((((map__27529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27529):map__27529);
var doc = cljs.core.get.call(null,map__27529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27556 = seq__27524;
var G__27557 = chunk__27525;
var G__27558 = count__27526;
var G__27559 = (i__27527 + (1));
seq__27524 = G__27556;
chunk__27525 = G__27557;
count__27526 = G__27558;
i__27527 = G__27559;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27524);
if(temp__4425__auto__){
var seq__27524__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27524__$1)){
var c__19447__auto__ = cljs.core.chunk_first.call(null,seq__27524__$1);
var G__27560 = cljs.core.chunk_rest.call(null,seq__27524__$1);
var G__27561 = c__19447__auto__;
var G__27562 = cljs.core.count.call(null,c__19447__auto__);
var G__27563 = (0);
seq__27524 = G__27560;
chunk__27525 = G__27561;
count__27526 = G__27562;
i__27527 = G__27563;
continue;
} else {
var vec__27531 = cljs.core.first.call(null,seq__27524__$1);
var name = cljs.core.nth.call(null,vec__27531,(0),null);
var map__27532 = cljs.core.nth.call(null,vec__27531,(1),null);
var map__27532__$1 = ((((!((map__27532 == null)))?((((map__27532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27532):map__27532);
var doc = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27564 = cljs.core.next.call(null,seq__27524__$1);
var G__27565 = null;
var G__27566 = (0);
var G__27567 = (0);
seq__27524 = G__27564;
chunk__27525 = G__27565;
count__27526 = G__27566;
i__27527 = G__27567;
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

//# sourceMappingURL=repl.js.map?rel=1441303751075