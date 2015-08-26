// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('kurssisuoritukset.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29980__delegate = function (x){
if(cljs.core.truth_(kurssisuoritukset.core.init)){
return cljs.core.apply.call(null,kurssisuoritukset.core.init,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kurssisuoritukset.core/init' is missing");
}
};
var G__29980 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29981__i = 0, G__29981__a = new Array(arguments.length -  0);
while (G__29981__i < G__29981__a.length) {G__29981__a[G__29981__i] = arguments[G__29981__i + 0]; ++G__29981__i;}
  x = new cljs.core.IndexedSeq(G__29981__a,0);
} 
return G__29980__delegate.call(this,x);};
G__29980.cljs$lang$maxFixedArity = 0;
G__29980.cljs$lang$applyTo = (function (arglist__29982){
var x = cljs.core.seq(arglist__29982);
return G__29980__delegate(x);
});
G__29980.cljs$core$IFn$_invoke$arity$variadic = G__29980__delegate;
return G__29980;
})()
,new cljs.core.Keyword(null,"server-port","server-port",663745648),(3449),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1440626246336