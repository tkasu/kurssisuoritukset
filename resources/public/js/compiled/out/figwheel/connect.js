// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('kurssisuoritukset.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__18189__delegate = function (x){
if(cljs.core.truth_(kurssisuoritukset.core.main)){
return cljs.core.apply.call(null,kurssisuoritukset.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kurssisuoritukset.core/main' is missing");
}
};
var G__18189 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__18190__i = 0, G__18190__a = new Array(arguments.length -  0);
while (G__18190__i < G__18190__a.length) {G__18190__a[G__18190__i] = arguments[G__18190__i + 0]; ++G__18190__i;}
  x = new cljs.core.IndexedSeq(G__18190__a,0);
} 
return G__18189__delegate.call(this,x);};
G__18189.cljs$lang$maxFixedArity = 0;
G__18189.cljs$lang$applyTo = (function (arglist__18191){
var x = cljs.core.seq(arglist__18191);
return G__18189__delegate(x);
});
G__18189.cljs$core$IFn$_invoke$arity$variadic = G__18189__delegate;
return G__18189;
})()
,new cljs.core.Keyword(null,"server-port","server-port",663745648),(3449),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1441471544037