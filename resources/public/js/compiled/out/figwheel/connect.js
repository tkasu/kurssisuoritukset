// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('kurssisuoritukset.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19909__delegate = function (x){
if(cljs.core.truth_(kurssisuoritukset.core.main)){
return cljs.core.apply.call(null,kurssisuoritukset.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kurssisuoritukset.core/main' is missing");
}
};
var G__19909 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19910__i = 0, G__19910__a = new Array(arguments.length -  0);
while (G__19910__i < G__19910__a.length) {G__19910__a[G__19910__i] = arguments[G__19910__i + 0]; ++G__19910__i;}
  x = new cljs.core.IndexedSeq(G__19910__a,0);
} 
return G__19909__delegate.call(this,x);};
G__19909.cljs$lang$maxFixedArity = 0;
G__19909.cljs$lang$applyTo = (function (arglist__19911){
var x = cljs.core.seq(arglist__19911);
return G__19909__delegate(x);
});
G__19909.cljs$core$IFn$_invoke$arity$variadic = G__19909__delegate;
return G__19909;
})()
,new cljs.core.Keyword(null,"server-port","server-port",663745648),(3449),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1441460653491