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
var seq__26272_26284 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26273_26285 = null;
var count__26274_26286 = (0);
var i__26275_26287 = (0);
while(true){
if((i__26275_26287 < count__26274_26286)){
var f_26288 = cljs.core._nth.call(null,chunk__26273_26285,i__26275_26287);
cljs.core.println.call(null,"  ",f_26288);

var G__26289 = seq__26272_26284;
var G__26290 = chunk__26273_26285;
var G__26291 = count__26274_26286;
var G__26292 = (i__26275_26287 + (1));
seq__26272_26284 = G__26289;
chunk__26273_26285 = G__26290;
count__26274_26286 = G__26291;
i__26275_26287 = G__26292;
continue;
} else {
var temp__4126__auto___26293 = cljs.core.seq.call(null,seq__26272_26284);
if(temp__4126__auto___26293){
var seq__26272_26294__$1 = temp__4126__auto___26293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26272_26294__$1)){
var c__18906__auto___26295 = cljs.core.chunk_first.call(null,seq__26272_26294__$1);
var G__26296 = cljs.core.chunk_rest.call(null,seq__26272_26294__$1);
var G__26297 = c__18906__auto___26295;
var G__26298 = cljs.core.count.call(null,c__18906__auto___26295);
var G__26299 = (0);
seq__26272_26284 = G__26296;
chunk__26273_26285 = G__26297;
count__26274_26286 = G__26298;
i__26275_26287 = G__26299;
continue;
} else {
var f_26300 = cljs.core.first.call(null,seq__26272_26294__$1);
cljs.core.println.call(null,"  ",f_26300);

var G__26301 = cljs.core.next.call(null,seq__26272_26294__$1);
var G__26302 = null;
var G__26303 = (0);
var G__26304 = (0);
seq__26272_26284 = G__26301;
chunk__26273_26285 = G__26302;
count__26274_26286 = G__26303;
i__26275_26287 = G__26304;
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
var seq__26276 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26277 = null;
var count__26278 = (0);
var i__26279 = (0);
while(true){
if((i__26279 < count__26278)){
var vec__26280 = cljs.core._nth.call(null,chunk__26277,i__26279);
var name = cljs.core.nth.call(null,vec__26280,(0),null);
var map__26281 = cljs.core.nth.call(null,vec__26280,(1),null);
var map__26281__$1 = ((cljs.core.seq_QMARK_.call(null,map__26281))?cljs.core.apply.call(null,cljs.core.hash_map,map__26281):map__26281);
var arglists = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26305 = seq__26276;
var G__26306 = chunk__26277;
var G__26307 = count__26278;
var G__26308 = (i__26279 + (1));
seq__26276 = G__26305;
chunk__26277 = G__26306;
count__26278 = G__26307;
i__26279 = G__26308;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26276);
if(temp__4126__auto__){
var seq__26276__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26276__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__26276__$1);
var G__26309 = cljs.core.chunk_rest.call(null,seq__26276__$1);
var G__26310 = c__18906__auto__;
var G__26311 = cljs.core.count.call(null,c__18906__auto__);
var G__26312 = (0);
seq__26276 = G__26309;
chunk__26277 = G__26310;
count__26278 = G__26311;
i__26279 = G__26312;
continue;
} else {
var vec__26282 = cljs.core.first.call(null,seq__26276__$1);
var name = cljs.core.nth.call(null,vec__26282,(0),null);
var map__26283 = cljs.core.nth.call(null,vec__26282,(1),null);
var map__26283__$1 = ((cljs.core.seq_QMARK_.call(null,map__26283))?cljs.core.apply.call(null,cljs.core.hash_map,map__26283):map__26283);
var arglists = cljs.core.get.call(null,map__26283__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__26283__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26313 = cljs.core.next.call(null,seq__26276__$1);
var G__26314 = null;
var G__26315 = (0);
var G__26316 = (0);
seq__26276 = G__26313;
chunk__26277 = G__26314;
count__26278 = G__26315;
i__26279 = G__26316;
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

//# sourceMappingURL=repl.js.map?rel=1440531853513