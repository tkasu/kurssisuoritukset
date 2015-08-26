// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('kurssisuoritukset.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21140__delegate = function (x){
if(cljs.core.truth_(kurssisuoritukset.core.main)){
return cljs.core.apply.call(null,kurssisuoritukset.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kurssisuoritukset.core/main' is missing");
}
};
var G__21140 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21141__i = 0, G__21141__a = new Array(arguments.length -  0);
while (G__21141__i < G__21141__a.length) {G__21141__a[G__21141__i] = arguments[G__21141__i + 0]; ++G__21141__i;}
  x = new cljs.core.IndexedSeq(G__21141__a,0);
} 
return G__21140__delegate.call(this,x);};
G__21140.cljs$lang$maxFixedArity = 0;
G__21140.cljs$lang$applyTo = (function (arglist__21142){
var x = cljs.core.seq(arglist__21142);
return G__21140__delegate(x);
});
G__21140.cljs$core$IFn$_invoke$arity$variadic = G__21140__delegate;
return G__21140;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1440565375169