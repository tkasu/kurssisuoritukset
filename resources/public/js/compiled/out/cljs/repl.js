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
var seq__26191_26205 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26192_26206 = null;
var count__26193_26207 = (0);
var i__26194_26208 = (0);
while(true){
if((i__26194_26208 < count__26193_26207)){
var f_26209 = cljs.core._nth.call(null,chunk__26192_26206,i__26194_26208);
cljs.core.println.call(null,"  ",f_26209);

var G__26210 = seq__26191_26205;
var G__26211 = chunk__26192_26206;
var G__26212 = count__26193_26207;
var G__26213 = (i__26194_26208 + (1));
seq__26191_26205 = G__26210;
chunk__26192_26206 = G__26211;
count__26193_26207 = G__26212;
i__26194_26208 = G__26213;
continue;
} else {
var temp__4425__auto___26214 = cljs.core.seq.call(null,seq__26191_26205);
if(temp__4425__auto___26214){
var seq__26191_26215__$1 = temp__4425__auto___26214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26191_26215__$1)){
var c__17320__auto___26216 = cljs.core.chunk_first.call(null,seq__26191_26215__$1);
var G__26217 = cljs.core.chunk_rest.call(null,seq__26191_26215__$1);
var G__26218 = c__17320__auto___26216;
var G__26219 = cljs.core.count.call(null,c__17320__auto___26216);
var G__26220 = (0);
seq__26191_26205 = G__26217;
chunk__26192_26206 = G__26218;
count__26193_26207 = G__26219;
i__26194_26208 = G__26220;
continue;
} else {
var f_26221 = cljs.core.first.call(null,seq__26191_26215__$1);
cljs.core.println.call(null,"  ",f_26221);

var G__26222 = cljs.core.next.call(null,seq__26191_26215__$1);
var G__26223 = null;
var G__26224 = (0);
var G__26225 = (0);
seq__26191_26205 = G__26222;
chunk__26192_26206 = G__26223;
count__26193_26207 = G__26224;
i__26194_26208 = G__26225;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26226 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16517__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16517__auto__)){
return or__16517__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26226);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26226)))?cljs.core.second.call(null,arglists_26226):arglists_26226));
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
var seq__26195 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26196 = null;
var count__26197 = (0);
var i__26198 = (0);
while(true){
if((i__26198 < count__26197)){
var vec__26199 = cljs.core._nth.call(null,chunk__26196,i__26198);
var name = cljs.core.nth.call(null,vec__26199,(0),null);
var map__26200 = cljs.core.nth.call(null,vec__26199,(1),null);
var map__26200__$1 = ((((!((map__26200 == null)))?((((map__26200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26200):map__26200);
var doc = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26227 = seq__26195;
var G__26228 = chunk__26196;
var G__26229 = count__26197;
var G__26230 = (i__26198 + (1));
seq__26195 = G__26227;
chunk__26196 = G__26228;
count__26197 = G__26229;
i__26198 = G__26230;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26195);
if(temp__4425__auto__){
var seq__26195__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26195__$1)){
var c__17320__auto__ = cljs.core.chunk_first.call(null,seq__26195__$1);
var G__26231 = cljs.core.chunk_rest.call(null,seq__26195__$1);
var G__26232 = c__17320__auto__;
var G__26233 = cljs.core.count.call(null,c__17320__auto__);
var G__26234 = (0);
seq__26195 = G__26231;
chunk__26196 = G__26232;
count__26197 = G__26233;
i__26198 = G__26234;
continue;
} else {
var vec__26202 = cljs.core.first.call(null,seq__26195__$1);
var name = cljs.core.nth.call(null,vec__26202,(0),null);
var map__26203 = cljs.core.nth.call(null,vec__26202,(1),null);
var map__26203__$1 = ((((!((map__26203 == null)))?((((map__26203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26203):map__26203);
var doc = cljs.core.get.call(null,map__26203__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26203__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26235 = cljs.core.next.call(null,seq__26195__$1);
var G__26236 = null;
var G__26237 = (0);
var G__26238 = (0);
seq__26195 = G__26235;
chunk__26196 = G__26236;
count__26197 = G__26237;
i__26198 = G__26238;
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

//# sourceMappingURL=repl.js.map?rel=1441561823235