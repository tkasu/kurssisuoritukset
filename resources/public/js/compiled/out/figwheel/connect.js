// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('kurssisuoritukset.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29661__delegate = function (x){
if(cljs.core.truth_(kurssisuoritukset.core.main)){
return cljs.core.apply.call(null,kurssisuoritukset.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kurssisuoritukset.core/main' is missing");
}
};
var G__29661 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29662__i = 0, G__29662__a = new Array(arguments.length -  0);
while (G__29662__i < G__29662__a.length) {G__29662__a[G__29662__i] = arguments[G__29662__i + 0]; ++G__29662__i;}
  x = new cljs.core.IndexedSeq(G__29662__a,0);
} 
return G__29661__delegate.call(this,x);};
G__29661.cljs$lang$maxFixedArity = 0;
G__29661.cljs$lang$applyTo = (function (arglist__29663){
var x = cljs.core.seq(arglist__29663);
return G__29661__delegate(x);
});
G__29661.cljs$core$IFn$_invoke$arity$variadic = G__29661__delegate;
return G__29661;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1440531859791