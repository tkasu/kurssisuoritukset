// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('kurssisuoritukset.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21408__delegate = function (x){
if(cljs.core.truth_(kurssisuoritukset.core.init)){
return cljs.core.apply.call(null,kurssisuoritukset.core.init,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kurssisuoritukset.core/init' is missing");
}
};
var G__21408 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21409__i = 0, G__21409__a = new Array(arguments.length -  0);
while (G__21409__i < G__21409__a.length) {G__21409__a[G__21409__i] = arguments[G__21409__i + 0]; ++G__21409__i;}
  x = new cljs.core.IndexedSeq(G__21409__a,0);
} 
return G__21408__delegate.call(this,x);};
G__21408.cljs$lang$maxFixedArity = 0;
G__21408.cljs$lang$applyTo = (function (arglist__21410){
var x = cljs.core.seq(arglist__21410);
return G__21408__delegate(x);
});
G__21408.cljs$core$IFn$_invoke$arity$variadic = G__21408__delegate;
return G__21408;
})()
,new cljs.core.Keyword(null,"server-port","server-port",663745648),(3449),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1440699375278