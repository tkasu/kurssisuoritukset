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
var seq__25439_25453 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25440_25454 = null;
var count__25441_25455 = (0);
var i__25442_25456 = (0);
while(true){
if((i__25442_25456 < count__25441_25455)){
var f_25457 = cljs.core._nth.call(null,chunk__25440_25454,i__25442_25456);
cljs.core.println.call(null,"  ",f_25457);

var G__25458 = seq__25439_25453;
var G__25459 = chunk__25440_25454;
var G__25460 = count__25441_25455;
var G__25461 = (i__25442_25456 + (1));
seq__25439_25453 = G__25458;
chunk__25440_25454 = G__25459;
count__25441_25455 = G__25460;
i__25442_25456 = G__25461;
continue;
} else {
var temp__4425__auto___25462 = cljs.core.seq.call(null,seq__25439_25453);
if(temp__4425__auto___25462){
var seq__25439_25463__$1 = temp__4425__auto___25462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25439_25463__$1)){
var c__17320__auto___25464 = cljs.core.chunk_first.call(null,seq__25439_25463__$1);
var G__25465 = cljs.core.chunk_rest.call(null,seq__25439_25463__$1);
var G__25466 = c__17320__auto___25464;
var G__25467 = cljs.core.count.call(null,c__17320__auto___25464);
var G__25468 = (0);
seq__25439_25453 = G__25465;
chunk__25440_25454 = G__25466;
count__25441_25455 = G__25467;
i__25442_25456 = G__25468;
continue;
} else {
var f_25469 = cljs.core.first.call(null,seq__25439_25463__$1);
cljs.core.println.call(null,"  ",f_25469);

var G__25470 = cljs.core.next.call(null,seq__25439_25463__$1);
var G__25471 = null;
var G__25472 = (0);
var G__25473 = (0);
seq__25439_25453 = G__25470;
chunk__25440_25454 = G__25471;
count__25441_25455 = G__25472;
i__25442_25456 = G__25473;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25474 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16517__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25474);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25474)))?cljs.core.second.call(null,arglists_25474):arglists_25474));
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
var seq__25443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25444 = null;
var count__25445 = (0);
var i__25446 = (0);
while(true){
if((i__25446 < count__25445)){
var vec__25447 = cljs.core._nth.call(null,chunk__25444,i__25446);
var name = cljs.core.nth.call(null,vec__25447,(0),null);
var map__25448 = cljs.core.nth.call(null,vec__25447,(1),null);
var map__25448__$1 = ((((!((map__25448 == null)))?((((map__25448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25448):map__25448);
var doc = cljs.core.get.call(null,map__25448__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25448__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25475 = seq__25443;
var G__25476 = chunk__25444;
var G__25477 = count__25445;
var G__25478 = (i__25446 + (1));
seq__25443 = G__25475;
chunk__25444 = G__25476;
count__25445 = G__25477;
i__25446 = G__25478;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25443);
if(temp__4425__auto__){
var seq__25443__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25443__$1)){
var c__17320__auto__ = cljs.core.chunk_first.call(null,seq__25443__$1);
var G__25479 = cljs.core.chunk_rest.call(null,seq__25443__$1);
var G__25480 = c__17320__auto__;
var G__25481 = cljs.core.count.call(null,c__17320__auto__);
var G__25482 = (0);
seq__25443 = G__25479;
chunk__25444 = G__25480;
count__25445 = G__25481;
i__25446 = G__25482;
continue;
} else {
var vec__25450 = cljs.core.first.call(null,seq__25443__$1);
var name = cljs.core.nth.call(null,vec__25450,(0),null);
var map__25451 = cljs.core.nth.call(null,vec__25450,(1),null);
var map__25451__$1 = ((((!((map__25451 == null)))?((((map__25451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25451):map__25451);
var doc = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25483 = cljs.core.next.call(null,seq__25443__$1);
var G__25484 = null;
var G__25485 = (0);
var G__25486 = (0);
seq__25443 = G__25483;
chunk__25444 = G__25484;
count__25445 = G__25485;
i__25446 = G__25486;
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

//# sourceMappingURL=repl.js.map?rel=1441453638066